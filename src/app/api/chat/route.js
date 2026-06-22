/**
 * IOS BC Estimator — Next.js API Route (replaces the Azure Function proxy)
 * Route: POST /api/chat
 *
 * This is a direct port of the original Azure Function `index.js`.
 * Same Anthropic call, same prompt-caching header, same JSON parsing
 * and knowledge-base fallback logic. Only the transport (Azure Function
 * handler → Next.js Route Handler) has changed.
 *
 * Reads ANTHROPIC_API_KEY from environment variables (.env.local in dev,
 * platform environment variables in production).
 */

import https from "https";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Next.js route handlers don't need manual CORS/OPTIONS handling the way
// Azure Functions did, because the widget is served from the same origin
// as this route (no cross-origin call). We keep the headers anyway in case
// you ever embed this widget on a different domain (e.g. a static HTML
// page on indexofsolutions.com pointing at this Next.js app's API).
function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400, headers: corsHeaders() }
    );
  }

  const { system, conversation } = body || {};

  if (!system || !conversation) {
    return NextResponse.json(
      { error: "Missing system or conversation" },
      { status: 400, headers: corsHeaders() }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY is not set in environment variables.");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500, headers: corsHeaders() }
    );
  }

  const requestBody = JSON.stringify({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1500,
    system: [
      {
        type: "text",
        text: system,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [
      {
        role: "user",
        content:
          "Here is the full conversation so far. Analyze it and return the JSON output.\n\n" +
          conversation,
      },
    ],
  });

  try {
    const anthropicResponse = await callAnthropic(apiKey, requestBody);
    const rawText = anthropicResponse.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("");

    const clean = rawText.replace(/```json\s*|```/g, "").trim();

    let state;
    try {
      state = JSON.parse(clean);
    } catch {
      console.warn("JSON parse failed, returning fallback state.");
      state = {
        NextMessage:
          "I'm sorry, I encountered an issue. Could you please try again?",
        ReadyToEstimate: false,
        LeadCaptured: false,
        EmailReady: false,
      };
    }

    // If Claude flagged a company info request, answer from the knowledge base
    if (state.NeedsCompanyInfo) {
      try {
        const userQuestion = extractLastUserMessage(conversation);
        state.NextMessage = await answerFromKnowledgeBase(apiKey, userQuestion);
      } catch (kbErr) {
        console.warn("Knowledge base lookup failed:", kbErr.message);
        state.NextMessage =
          "For detailed company information, please visit www.indexofsolutions.com or reach out to us directly through the website.";
      }
      state.NeedsCompanyInfo = false;
    }

    return NextResponse.json({ state }, { status: 200, headers: corsHeaders() });
  } catch (err) {
    console.error("Anthropic call failed:", err.message);
    return NextResponse.json(
      { error: "Failed to reach Anthropic API" },
      { status: 502, headers: corsHeaders() }
    );
  }
}

// ── Extract the last user message from the conversation string ──
function extractLastUserMessage(conversation) {
  const lines = conversation.split("\n");
  let last = "";
  for (const line of lines) {
    if (line.startsWith("USER:")) last = line.replace(/^USER:\s*/, "").trim();
  }
  return last || "company information";
}

// ── Read knowledge base file and answer the user's question ──
async function answerFromKnowledgeBase(apiKey, userQuestion) {
  // In the Azure Function this resolved relative to the function folder.
  // In Next.js, process.cwd() is the project root, so the file lives at
  // /data/ios-knowledge-base.md instead of being two levels up.
  const kbPath = path.join(process.cwd(), "data", "ios-knowledge-base.md");
  const kb = fs.readFileSync(kbPath, "utf8");

  const prompt = `You are a helpful assistant for Index of Solutions. Based ONLY on the following company knowledge base, answer the user's question clearly and concisely. If the specific information is not found, say "For the most up-to-date information, please visit www.indexofsolutions.com".\n\nKnowledge base:\n${kb}\n\nUser question: ${userQuestion}`;

  const requestBody = JSON.stringify({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 400,
    messages: [{ role: "user", content: prompt }],
  });

  const response = await callAnthropic(apiKey, requestBody);
  return response.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("")
    .trim();
}

// ── Call Anthropic via Node https (no SDK dependency — same as original) ──
function callAnthropic(apiKey, body) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.anthropic.com",
      path: "/v1/messages",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "prompt-caching-2024-07-31",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const request = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode >= 400) {
            reject(new Error("Anthropic error " + res.statusCode + ": " + data));
          } else {
            resolve(parsed);
          }
        } catch {
          reject(new Error("Failed to parse Anthropic response"));
        }
      });
    });

    request.on("error", reject);
    request.write(body);
    request.end();
  });
}
