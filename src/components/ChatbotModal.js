'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation'
import styles from './ChatbotModal.module.css';
import Image from 'next/image';
import { TRANSLATIONS } from "@/lib/translations";
import { SYSTEM_PROMPT_BASE } from "@/lib/system-prompt";
import { buildEstimateHTML, estimateKey } from "@/lib/estimate";
import EstimateCard from "@/components/EstimateCard";

const PROXY_URL = "/api/chat";

export default function ChatbotModal({ ref }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(null); // null = language picker still showing
  const [messages, setMessages] = useState([]); // { id, role: 'bot'|'user', html?: string, text?: string }
  const [inputValue, setInputValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const historyRef = useRef([]); // [{ role: 'user'|'assistant', content: string }]
  const lastEstimateKeyRef = useRef(null);
  const leadShownRef = useRef(false);

  const messagesWrapRef = useRef(null);
  const inputRef = useRef(null);
  const idCounterRef = useRef(0);

  const nextId = () => ++idCounterRef.current;

  const pathName = usePathname();

  const isPriceEstimatorPage = pathName?.startsWith('/price-estimator');

  const scrollDown = useCallback(() => {
    if (messagesWrapRef.current) {
      messagesWrapRef.current.scrollTop = messagesWrapRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollDown();
  }, [messages, isTyping, scrollDown]);

  const addMsg = useCallback((content, role, kind = "text") => {
    setMessages((prev) => [...prev, { id: nextId(), role, content, kind }]);
  }, []);

  function selectLanguage(selected) {
    setLang(selected);
    const t = TRANSLATIONS[selected];

    setMessages([{ id: nextId(), role: "bot", content: t.welcome, kind: "html" }]);

    setInputDisabled(false);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

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

  const buildEstimateHTML = useCallback((s) => {
    const ess = s.EssentialUsers || (!s.NeedsPremium ? s.FullUsers || 0 : 0);
    const prem = s.PremiumUsers || (s.NeedsPremium ? s.FullUsers || 0 : 0);
    const team = s.TeamMemberUsers || 0;
    const annualLic = (ess * 80 + prem * 110 + team * 8) * 12;

    let implLow = 4000,
      implHigh = 6000;
    if (s.Complexity === 'Standard') {
      implLow = 7500;
      implHigh = 12000;
    }
    if (s.Complexity === 'Complex') {
      implLow = 17500;
      implHigh = 26000;
    }

    let lsLow = 0,
      lsHigh = 0;
    if (s.NeedsLSCentral) {
      const stores = s.RetailLocationCount || 1;
      if (stores <= 2) {
        lsLow = 5000;
        lsHigh = 8000;
      } else if (stores <= 5) {
        lsLow = 10000;
        lsHigh = 13000;
      } else if (stores <= 10) {
        lsLow = 15000;
        lsHigh = 19000;
      } else if (stores <= 20) {
        lsLow = 22000;
        lsHigh = 28000;
      } else {
        lsLow = 32000;
        lsHigh = 45000;
      }
    }

    const posCount = s.NeedsLSCentral ? s.POSCount || 0 : 0;
    const posAnnual = posCount * 85 * 12;
    const lsUserAddon = s.NeedsLSCentral ? ess * 30 * 12 : 0;

    let custLow = 0,
      custHigh = 0;
    if (s.CustomNeeds === 'Minor') {
      custLow = 3000;
      custHigh = 5000;
    }
    if (s.CustomNeeds === 'Moderate') {
      custLow = 8000;
      custHigh = 13000;
    }
    if (s.CustomNeeds === 'Major') {
      custLow = 20000;
      custHigh = 32000;
    }

    let migLow = 0,
      migHigh = 0;
    if (s.HistoryMigration === 'Limited') {
      migLow = 2000;
      migHigh = 4000;
    }
    if (s.HistoryMigration === 'Full') {
      migLow = 5000;
      migHigh = 9000;
    }

    const depts = s.TrainingDepts || 2;
    const trainLow = depts * 800,
      trainHigh = depts * 1200;

    const recurringTotal = annualLic + lsUserAddon + posAnnual;

    const custAdjLow = Math.round(custLow / 2),
      custAdjHigh = Math.round(custHigh / 2);
    const migAdjLow = Math.round(migLow / 2),
      migAdjHigh = Math.round(migHigh / 2);
    const trainAdjLow = Math.round(trainLow / 2),
      trainAdjHigh = Math.round(trainHigh / 2);
    const otherAdjLow = custAdjLow + migAdjLow + trainAdjLow;
    const otherAdjHigh = custAdjHigh + migAdjHigh + trainAdjHigh;

    const oneTimeLow = implLow + lsLow + otherAdjLow;
    const oneTimeHigh = implHigh + lsHigh + otherAdjHigh;

    const grandLow = recurringTotal + oneTimeLow;
    const grandHigh = recurringTotal + oneTimeHigh;

    const fmt = (v) => '$' + Math.round(v).toLocaleString();
    const rng = (l, h) => fmt(l) + ' – ' + fmt(h);

    let rows = `<div class="est-section-label">${t.recurring}</div>`;
    rows += `<div class="est-row"><span>${t.licFees}</span><span>${fmt(recurringTotal)}/yr</span></div>`;
    if (ess > 0)
      rows += `<div class="est-row est-sub"><span>↳ ${ess} Essentials @ $80/mo</span><span>${fmt(ess * 80 * 12)}/yr</span></div>`;
    if (s.NeedsLSCentral && ess > 0)
      rows += `<div class="est-row est-sub"><span>↳ ${t.lsAddonLbl} (${ess} × $30/mo)</span><span>${fmt(lsUserAddon)}/yr</span></div>`;
    if (prem > 0)
      rows += `<div class="est-row est-sub"><span>↳ ${prem} Premium @ $110/mo</span><span>${fmt(prem * 110 * 12)}/yr</span></div>`;
    if (team > 0)
      rows += `<div class="est-row est-sub"><span>↳ ${team} Team Members @ $8/mo</span><span>${fmt(team * 8 * 12)}/yr</span></div>`;
    if (posCount > 0)
      rows += `<div class="est-row est-sub"><span>↳ ${posCount} ${t.posLbl}${posCount > 1 && lang === 'en' ? 's' : ''} @ $85/mo</span><span>${fmt(posAnnual)}/yr</span></div>`;
    rows += `<div class="est-subtotal"><span>${t.recSub}</span><span>${fmt(recurringTotal)}/yr</span></div>`;

    rows += `<hr class="est-divider">`;
    rows += `<div class="est-section-label">${t.oneTime}</div>`;
    rows += `<div class="est-row"><span>${t.implLbl}</span><span>${rng(implLow, implHigh)}</span></div>`;
    if (s.NeedsLSCentral)
      rows += `<div class="est-row"><span>${t.lsCentral}</span><span>${rng(lsLow, lsHigh)}</span></div>`;
    if (otherAdjLow > 0) {
      rows += `<div class="est-row"><span>${t.otherSvc}</span><span>${rng(otherAdjLow, otherAdjHigh)}</span></div>`;
      if (custAdjLow > 0)
        rows += `<div class="est-row est-sub"><span>↳ ${t.custLbl} (${s.CustomNeeds})</span><span>${rng(custAdjLow, custAdjHigh)}</span></div>`;
      if (migAdjLow > 0)
        rows += `<div class="est-row est-sub"><span>↳ ${t.migLbl} (${s.HistoryMigration})</span><span>${rng(migAdjLow, migAdjHigh)}</span></div>`;
      rows += `<div class="est-row est-sub"><span>↳ ${t.trainLbl} (${depts} ${depts > 1 ? t.deptsP : t.depts})</span><span>${rng(trainAdjLow, trainAdjHigh)}</span></div>`;
    } 
    rows += `<div class="est-subtotal"><span>${t.oneTimeSub}</span><span>${rng(oneTimeLow, oneTimeHigh)}</span></div>`;

    return `<div class="est-card">
      <h4>${t.estTitle}</h4>
      ${rows}
      <div class="est-total"><span>${t.grandTotal}</span><span>${rng(grandLow, grandHigh)}</span></div>
      <div class="disclaimer">${t.disclaimer}</div>
      <div class="cta-card">${t.cta}</div>
    </div>`;
  }, [lang, t]);

  if (isPriceEstimatorPage) {
    return null;
  }

  if (!isOpen) {
    return (
      <button
        id="trigger-btn"
        className={styles.triggerBtn}
        onClick={() => {
            setIsOpen(true);
        }}
        aria-label="Open chatbot"
        title="Ask about BC implementation estimate"
      >
        <Image src="/assets/images/logo/chatbot-robot.webp" width="60" height="60" alt="Chatbot" />
      </button>
    );
  }

  return (
    <div data-lenis-prevent id="modal" className={styles.modalOverlay} onClick={() => {
        setIsOpen(false)// Re-enable background scrolling when modal is closed
    }}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerIcon}>IOS</div>
          <div className={styles.headerText}>
            <h1>{headerTitle}</h1>
            <p>{headerSubtitle}</p>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className={styles.messagesContainer} ref={messagesWrapRef}>
          {lang === null && (
            <div className={styles.languagePicker}>
              <div className={styles.msgBot}>
                <div className={styles.avatar}>IOS</div>
                <div className={styles.bubble}>
                  <p>Welcome · Bienvenue · أهلاً وسهلاً</p>
                  <p>Please choose your language to get started.</p>
                  <div className={styles.langButtons}>
                    <button onClick={() => selectLanguage('en')}>🇬🇧 English</button>
                    <button onClick={() => selectLanguage('fr')}>🇫🇷 Français</button>
                    <button onClick={() => selectLanguage('ar')}>🇸🇦 العربية</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              className={`${styles.msg} ${m.role === 'user' ? styles.msgUser : styles.msgBot}`}
            >
              <div className={`${styles.avatar} ${m.role === "user" ? styles.userAvatar : styles.botAvatar}`}>
                {m.role === "user" ? "You" : "IOS"}
              </div>
              <div className={`${styles.bubble} ${lang === 'ar' ? styles.rtl : ''}`}>
                {m.kind === "estimate" ? (
                  <EstimateCard state={m.content} translations={TRANSLATIONS} lang={lang} />
                ) : m.kind === "html" ? (
                  <div dangerouslySetInnerHTML={{ __html: m.content }} />
                ) : (
                  <p>{m.content}</p>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className={`${styles.msg} ${styles.msgBot}`}>
              <div className={`${styles.avatar} ${styles.botAvatar}`}>IOS</div>
              <div className={styles.bubble}>
                <div className={styles.typing}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className={styles.inputBar}>
          <textarea
            ref={inputRef}
            className={styles.input}
            placeholder={t ? t.placeholder : ""}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={inputDisabled}
            rows="1"
          />
          <button
            className={styles.sendBtn}
            onClick={handleSend}
            disabled={inputDisabled}
            aria-label="Send message"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
