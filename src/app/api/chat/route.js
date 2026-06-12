import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Helper function to call Anthropic API
async function callAnthropic(apiKey, requestBody) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: requestBody,
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.status}`);
  }

  return response.json();
}

function extractLastUserMessage(conversation) {
  const lines = conversation.split('\n');
  let last = '';
  for (const line of lines) {
    if (line.startsWith('USER:')) {
      last = line.replace(/^USER:\s*/, '').trim();
    }
  }
  return last || 'company information';
}

async function answerFromKnowledgeBase(apiKey, userQuestion) {
  try {
    const kbPath = join(process.cwd(), 'public', 'assets', 'ios-knowledge-base.md');
    const kb = await readFile(kbPath, 'utf8');

    const prompt = `You are a helpful assistant for Index of Solutions. Based ONLY on the following company knowledge base, answer the user's question clearly and concisely. If the specific information is not found, say "For the most up-to-date information, please visit www.indexofsolutions.com".\n\nKnowledge base:\n${kb}\n\nUser question: ${userQuestion}`;

    const body = JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      messages: [{ role: 'user', content: prompt }],
    });

    const response = await callAnthropic(apiKey, body);
    return response.content
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('')
      .trim();
  } catch (err) {
    console.warn('Knowledge base lookup failed:', err.message);
    return 'For detailed company information, please visit www.indexofsolutions.com or reach out to us directly through the website.';
  }
}

export async function POST(request) {
  try {
    const { system, conversation } = await request.json();

    if (!system || !conversation) {
      return NextResponse.json(
        { error: 'Missing system or conversation' },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const requestBody = JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1500,
      system: [
        {
          type: 'text',
          text: system,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [
        {
          role: 'user',
          content:
            'Here is the full conversation so far. Analyze it and return the JSON output.\n\n' +
            conversation,
        },
      ],
    });

    const anthropicResponse = await callAnthropic(apiKey, requestBody);

    const rawText = anthropicResponse.content
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('');

    const clean = rawText.replace(/```json\s*|```/g, '').trim();

    let state;
    try {
      state = JSON.parse(clean);
    } catch {
      console.warn('JSON parse failed, returning fallback state');
      state = {
        NextMessage: "I'm sorry, I encountered an issue. Could you please try again?",
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
        console.warn('Knowledge base lookup failed:', kbErr.message);
        state.NextMessage =
          'For detailed company information, please visit www.indexofsolutions.com or reach out to us directly through the website.';
      }
      state.NeedsCompanyInfo = false;
    }

    return NextResponse.json({ state });
  } catch (err) {
    console.error('API error:', err.message);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 502 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
