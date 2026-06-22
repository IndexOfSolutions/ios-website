'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../../../components/priceCalculator.module.css';
import { TRANSLATIONS } from "@/lib/translations";
import { SYSTEM_PROMPT_BASE } from "@/lib/system-prompt";
import { estimateKey } from "@/lib/estimate";
import EstimateCard from "@/components/EstimateCard";

const PROXY_URL = "/api/chat";

export default function ChatWidget() {
  // ── State (mirrors the original module-level `let` variables) ──
  const [lang, setLang] = useState(null); // null = language picker still showing
  const [messages, setMessages] = useState([]); // { id, role: 'bot'|'user', html?: string, text?: string }
  const [inputValue, setInputValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  // Refs replace plain JS module-level mutable variables that don't need
  // to trigger a re-render on their own (history, lastEstimateKey, leadShown).
  const historyRef = useRef([]); // [{ role: 'user'|'assistant', content: string }]
  const lastEstimateKeyRef = useRef(null);
  const leadShownRef = useRef(false);

  const messagesWrapRef = useRef(null);
  const inputRef = useRef(null);
  const idCounterRef = useRef(0);

  const nextId = () => ++idCounterRef.current;

  const scrollDown = useCallback(() => {
    if (messagesWrapRef.current) {
      messagesWrapRef.current.scrollTop = messagesWrapRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollDown();
  }, [messages, isTyping, scrollDown]);

  // ── addMsg(content, role, kind) ──
  // kind: "text" (default) | "html" (trusted fixed-string HTML) | "estimate" (renders <EstimateCard> from a state object)
  const addMsg = useCallback((content, role, kind = "text") => {
    setMessages((prev) => [...prev, { id: nextId(), role, content, kind }]);
  }, []);

  // ── selectLanguage(lang) ──
  function selectLanguage(selected) {
    setLang(selected);
    const t = TRANSLATIONS[selected];

    setMessages([{ id: nextId(), role: "bot", content: t.welcome, kind: "html" }]);

    setInputDisabled(false);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  // ── callAPI(userMsg) — direct port, only the endpoint payload shape changes
  //     because this now hits a Next.js Route Handler instead of an Azure Function ──
  async function callAPI(userMsg) {
    historyRef.current.push({ role: "user", content: userMsg });

    const fullConvo = historyRef.current
      .map((m) => m.role.toUpperCase() + ": " + m.content)
      .join("\n");

    const res = await fetch(PROXY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system: TRANSLATIONS[lang].langPrompt + "\n\n" + SYSTEM_PROMPT_BASE,
        conversation: fullConvo,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error("Proxy error " + res.status + ": " + err);
    }

    const data = await res.json();
    historyRef.current.push({
      role: "assistant",
      content: data.state.NextMessage || "",
    });
    return data;
  }

  // ── handleSend() — direct port of the original handler ──
  async function handleSend() {
    const text = inputValue.trim();
    if (!text) return;

    setInputValue("");
    setInputDisabled(true);

    addMsg(text, "user");
    setIsTyping(true);

    try {
      const { state } = await callAPI(text);
      console.log("[IOS Estimator] state:", state.ReadyToEstimate, "missing:", state.MissingFields);
      setIsTyping(false);

      if (state.NextMessage) addMsg(state.NextMessage, "bot");

      if (state.ReadyToEstimate) {
        console.log("[IOS Estimator] ReadyToEstimate", state)
        const key = estimateKey(state);
        if (key !== lastEstimateKeyRef.current) {
          lastEstimateKeyRef.current = key;

          if (state.ContactCollected) {
            console.log("[IOS Estimator] ContactCollected", state)
            addMsg(state, "bot", "estimate");
          }

          // Build a clean human-readable transcript from the visible messages
          const transcript = [
            ...messages,
            { role: "user", content: text, kind: "text" },
          ]
            .filter((m) => m.kind !== "estimate")
            .map((m) => {
              const speaker = m.role === "user" ? "USER" : "BOT";
              const body =
                m.kind === "html"
                  ? String(m.content).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
                  : String(m.content);
              return `${speaker}: ${body}`;
            })
            .join("\n\n");
            console.log("[IOS Estimator] transcript", transcript)
          fetch("/api/send-estimate-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
          }).catch((err) =>
            console.warn("[IOS Estimator] Email send failed:", err)
          );
        }
      }

      if (state.LeadCaptured && state.EmailReady && !leadShownRef.current) {
        console.log("[IOS Estimator] LeadCaptured and EmailReady", state, state.EmailReady)
        console.log("[IOS Estimator] transcript", transcript)
        leadShownRef.current = true;
        // Update email with captured email address
        fetch("/api/send-estimate-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state),
        }).catch((err) =>
          console.warn("[IOS Estimator] Email update failed:", err)
        );
      }
    } catch (err) {
      setIsTyping(false);
      console.error("[IOS Estimator]", err);
      addMsg("Sorry, I ran into an issue. Please try again in a moment.", "bot");
    }

    setInputDisabled(false);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  // ── Events: Enter to send, textarea auto-grow ──
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    // auto-grow, same min/max as the original (#user-input CSS: min 46px, max 140px)
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  }

  const t = lang ? TRANSLATIONS[lang] : null;
  const headerTitle = t ? t.title : "Dynamics 365 Business Central Implementation Estimator";
  const headerSubtitle = t ? t.subtitle : "AI-powered advisory by Index of Solutions";

  return (
    <div className={styles.app} dir={t ? t.dir : "ltr"}>
      {/* Top header */}
      <header className={styles.pageHeader}>
        <div className={styles.headerIcon}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="7" fill="#2563eb" />
            <path
              d="M8 10.5L16 6.5L24 10.5V21.5L16 25.5L8 21.5V10.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M8 10.5L16 14.5L24 10.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M16 14.5V25.5" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
        <div className={styles.hdrText}>
          <h1>{headerTitle}</h1>
          <p>
            <span className={styles.onlineDot}></span>
            <span>{headerSubtitle}</span>
          </p>
        </div>
      </header>

      {/* Messages */}
      <div className={styles.messagesWrap} ref={messagesWrapRef}>
        <div className={styles.messages}>
          {lang === null && (
            <div className={`${styles.msg} ${styles.msgBot}`}>
              <div className={`${styles.av} ${styles.botAv}`}>IOS</div>
              <div className={styles.bbl}>
                Welcome · Bienvenue · أهلاً وسهلاً
                <br />
                <br />
                Please choose your language to get started.
                <br />
                Veuillez choisir votre langue pour commencer.
                <br />
                يرجى اختيار لغتك للبدء.
                <div className={styles.langPickWrap}>
                  <button className={styles.langPickBtn} onClick={() => selectLanguage("en")}>
                    🇬🇧 English
                  </button>
                  <button className={styles.langPickBtn} onClick={() => selectLanguage("fr")}>
                    🇫🇷 Français
                  </button>
                  <button className={styles.langPickBtn} onClick={() => selectLanguage("ar")}>
                    🇸🇦 العربية
                  </button>
                </div>
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div
              key={m.id}
              className={`${styles.msg} ${m.role === "user" ? styles.msgUser : styles.msgBot}`}
            >
              <div className={`${styles.av} ${m.role === "user" ? styles.userAv : styles.botAv}`}>
                {m.role === "user" ? "You" : "IOS"}
              </div>
              {m.kind === "estimate" ? (
                <div className={styles.bbl}>
                  <EstimateCard state={m.content} translations={TRANSLATIONS} lang={lang} />
                </div>
              ) : m.kind === "html" ? (
                <div className={styles.bbl} dangerouslySetInnerHTML={{ __html: m.content }} />
              ) : (
                <div className={styles.bbl}>{m.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Typing indicator */}
        {isTyping && (
          <div className={styles.typing}>
            <div className={`${styles.av} ${styles.botAv}`}>IOS</div>
            <div className={styles.typingBbl}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className={styles.inputBar}>
        <div className={styles.inputInner}>
          <textarea
            ref={inputRef}
            className={styles.userInput}
            rows={1}
            aria-label="Your message"
            disabled={inputDisabled}
            placeholder={t ? t.placeholder : ""}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className={styles.sendBtn}
            aria-label="Send message"
            disabled={inputDisabled}
            onClick={handleSend}
          >
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
        <p
          className={styles.inputHint}
          dangerouslySetInnerHTML={{ __html: t ? t.hint : "" }}
        />
      </div>
    </div>
  );
}
