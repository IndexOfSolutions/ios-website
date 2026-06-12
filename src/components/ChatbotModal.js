'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ChatbotModal.module.css';
import Image from 'next/image';

const TRANSLATIONS = {
  en: {
    dir:        'ltr',
    title:      'Dynamics 365 Business Central Implementation Estimator',
    subtitle:   'AI-powered advisory by Index of Solutions',
    welcome:    'Welcome to <strong>Index of Solutions</strong>. I\'m your Business Central implementation advisor.<br><br>I\'ll ask you a few quick questions to prepare an indicative estimate for a Microsoft Dynamics 365 Business Central implementation.<br><br>To start — what industry does your company operate in, roughly how many employees do you have, and what system are you currently using today?',
    placeholder:'Type your message…',
    hint:       'Powered by <a href="https://www.indexofsolutions.com" target="_blank">Index of Solutions</a> · AI-assisted estimation · Press Enter to send',
    langPrompt: 'Respond in English.',
    // estimate card
    estTitle:   '📊 Implementation Estimate — Year 1',
    recurring:  '🔁 Annual Recurring Fees',
    licFees:    'Microsoft License Fees',
    lsAddonLbl: 'LS Central user add-on',
    posLbl:     'POS device license',
    recSub:     'Recurring Subtotal',
    oneTime:    '⚡ One-Time Implementation Fees',
    implLbl:    'Out-of-Box Implementation',
    lsCentral:  'LS Central (Retail Add-on)',
    otherSvc:   'Other Services',
    custLbl:    'Customization',
    migLbl:     'Data Migration',
    trainLbl:   'Training',
    depts:      'dept',
    deptsP:     'depts',
    oneTimeSub: 'One-Time Subtotal',
    grandTotal: 'Estimated Year 1 Total',
    disclaimer: '⚠️ Indicative estimate only. Final pricing subject to detailed scoping and project requirements.',
    cta:        'Ready for an exact proposal? <a href="https://www.indexofsolutions.com/contact" target="_blank">Book a free consultation →</a>',
  },
  fr: {
    dir:        'ltr',
    title:      'Estimateur d\'implémentation Dynamics 365 Business Central',
    subtitle:   'Conseil IA par Index of Solutions',
    welcome:    'Bienvenue chez <strong>Index of Solutions</strong>. Je suis votre conseiller en implémentation Business Central.<br><br>Je vais vous poser quelques questions rapides pour préparer une estimation indicative d\'une implémentation Microsoft Dynamics 365 Business Central.<br><br>Pour commencer — dans quel secteur d\'activité opère votre entreprise, combien d\'employés avez-vous environ, et quel système utilisez-vous actuellement ?',
    placeholder:'Écrivez votre message…',
    hint:       'Propulsé par <a href="https://www.indexofsolutions.com" target="_blank">Index of Solutions</a> · Estimation assistée par IA · Appuyez sur Entrée pour envoyer',
    langPrompt: 'Respond entirely in French (français). Use formal professional language.',
    estTitle:   '📊 Estimation d\'implémentation — Année 1',
    recurring:  '🔁 Frais annuels récurrents',
    licFees:    'Licences Microsoft',
    lsAddonLbl: 'Complément LS Central',
    posLbl:     'Licence appareil POS',
    recSub:     'Sous-total récurrent',
    oneTime:    '⚡ Frais uniques d\'implémentation',
    implLbl:    'Implémentation de base',
    lsCentral:  'LS Central (module retail)',
    otherSvc:   'Autres services',
    custLbl:    'Personnalisation',
    migLbl:     'Migration des données',
    trainLbl:   'Formation',
    depts:      'dép.',
    deptsP:     'dép.',
    oneTimeSub: 'Sous-total unique',
    grandTotal: 'Total estimé — Année 1',
    disclaimer: '⚠️ Estimation indicative uniquement. Tarification finale soumise à une analyse détaillée.',
    cta:        'Prêt pour une proposition détaillée ? <a href="https://www.indexofsolutions.com/contact" target="_blank">Réserver une consultation gratuite →</a>',
  },
  ar: {
    dir:        'rtl',
    title:      'أداة تقدير تكلفة تطبيق Dynamics 365 Business Central',
    subtitle:   'استشارة بالذكاء الاصطناعي من Index of Solutions',
    welcome:    'مرحباً بك في <strong>Index of Solutions</strong>. أنا مستشارك لتطبيق Business Central.<br><br>سأطرح عليك بعض الأسئلة السريعة لإعداد تقدير استرشادي لتكلفة تطبيق Microsoft Dynamics 365 Business Central.<br><br>للبدء — في أي قطاع تعمل شركتك، وكم عدد موظفيك تقريباً، وما النظام الذي تستخدمه حالياً؟',
    placeholder:'اكتب رسالتك…',
    hint:       'مدعوم من <a href="https://www.indexofsolutions.com" target="_blank">Index of Solutions</a> · تقدير بمساعدة الذكاء الاصطناعي · اضغط Enter للإرسال',
    langPrompt: 'Respond entirely in Arabic (العربية). Use formal Modern Standard Arabic throughout.',
    estTitle:   '📊 تقدير التنفيذ — السنة الأولى',
    recurring:  '🔁 الرسوم السنوية المتكررة',
    licFees:    'رسوم تراخيص Microsoft',
    lsAddonLbl: 'إضافة LS Central لكل مستخدم',
    posLbl:     'ترخيص جهاز POS',
    recSub:     'مجموع الرسوم المتكررة',
    oneTime:    '⚡ رسوم التنفيذ لمرة واحدة',
    implLbl:    'تكلفة التنفيذ الأساسي',
    lsCentral:  'LS Central (إضافة التجزئة)',
    otherSvc:   'خدمات أخرى',
    custLbl:    'التخصيص',
    migLbl:     'ترحيل البيانات',
    trainLbl:   'التدريب',
    depts:      'قسم',
    deptsP:     'أقسام',
    oneTimeSub: 'مجموع الرسوم لمرة واحدة',
    grandTotal: 'الإجمالي التقديري — السنة الأولى',
    disclaimer: '⚠️ تقدير استرشادي فقط. التسعير النهائي يخضع لتحليل تفصيلي ومتطلبات المشروع.',
    cta:        'هل أنت مستعد للحصول على عرض تفصيلي؟ <a href="https://www.indexofsolutions.com/contact" target="_blank">← احجز استشارة مجانية</a>',
  }
};

const SYSTEM_PROMPT_BASE = `You are IOS Project Estimator, a senior Microsoft Dynamics 365 Business Central and LS Central solution architect at Index of Solutions.

CRITICAL OUTPUT RULES:
- Return ONLY valid JSON — nothing else
- No markdown, no backticks, no explanations outside JSON
- All strings use double quotes
- Use null for unknown values, true/false for booleans

CONVERSATION BEHAVIOR:
- Sound like a professional BC consultant, not a form
- Ask 2–4 questions max per message
- Never repeat already-answered questions
- Never ask which ERP the client prefers — always assume Business Central
- Do not greet or re-introduce yourself after the very first message
- NEVER write dollar amounts, price ranges, or cost breakdowns in NextMessage — ever. The estimate card is rendered separately by the system from the JSON fields you return.

FIELDS TO COLLECT:
- EmployeeCount: total employees
- FullUsers: users needing full BC access (finance, sales, purchasing, inventory, warehouse, production, management)
- TeamMemberUsers: light users (approvals, viewing reports, self-service only) — can be 0
- Industry: Manufacturing / Retail / Food & Beverage / Distribution / Services / Healthcare / Construction / Education / Logistics / Other
- CurrentSystem: Excel / Manual / Paper-Based / Odoo / SAP / Oracle / QuickBooks / Sage / Zoho / Business Central / Other
- ImplementationScope: derive automatically — if CurrentSystem is BC → Expansion or Upgrade; anything else → Migration; null if CurrentSystem is null
- CompanyType: Single Company / Multi Company / Group / Franchise
- LocationCount: number of branches, offices, warehouses, sites
- RetailLocationCount: stores/outlets — REQUIRED for Retail & F&B; NEVER leave null for these industries; ask explicitly before proceeding
- POSCount: POS terminals — REQUIRED for Retail & F&B; NEVER leave null; ask explicitly before proceeding
- NeedsLSCentral: true if Retail/F&B with stores + POS; false otherwise; null if unknown
- ModulesRequired: array — pick from [Finance, Sales, Purchasing, Inventory, Warehouse, Manufacturing, Service, Projects, CRM, POS, Payroll]
- NeedsPremium: true ONLY if client explicitly needs Production Orders, BOMs, Routings, MRP, Capacity Planning, or Service Orders. Do NOT set true just because Industry is Manufacturing.
- LicenseType: Essentials / Premium / Mixed / Unknown
- EssentialUsers: count of Essentials-tier full users
- PremiumUsers: count of Premium-tier full users
- TrainingDepts: number of departments needing user training
- HistoryMigration: None / Limited / Full
- DataCleanliness: Good / Average / Poor
- CustomNeeds: None / Minor / Moderate / Major
- Complexity: Basic / Standard / Complex — infer from all data collected

READY TO ESTIMATE — set ReadyToEstimate=true ONLY when ALL of these are known:
- Industry, EmployeeCount, CurrentSystem
- FullUsers (or inferable)
- TeamMemberUsers (or confirmed zero)
- CustomNeeds, HistoryMigration
- Retail/F&B: also RetailLocationCount and POSCount
- Manufacturing: also NeedsPremium (confirmed yes or no)

PRE-ESTIMATE CONTACT GATE:
- Once ReadyToEstimate=true, do NOT reveal the estimate yet
- Ask naturally for: full name, company name, and phone number
- Once all three are provided, set ContactCollected=true
- Only after ContactCollected=true should NextMessage say the estimate is ready
- Do not skip this step even if the user asks for the estimate directly

PRICING:

Microsoft license fees (annual, per user/month × 12):
  Essentials:   $80/user/month
  Premium:      $110/user/month
  Team Members: $8/user/month

Implementation fees:
  Basic:    $4,000 – $6,000
  Standard: $7,500 – $12,000
  Complex:  $17,500 – $26,000

LS Central add-on (only if NeedsLSCentral=true):
  1–2 stores:   $5,000 – $8,000
  3–5 stores:   $10,000 – $13,000
  6–10 stores:  $15,000 – $19,000
  11–20 stores: $22,000 – $28,000
  21+ stores:   $32,000 – $45,000

Other Services (apply ÷2 to get IOS adjusted rate):
  Customization:
    None:     $0
    Minor:    $3,000 – $5,000
    Moderate: $8,000 – $13,000
    Major:    $20,000 – $32,000
  Migration:
    None:    $0
    Limited: $2,000 – $4,000
    Full:    $5,000 – $9,000
  Training: $800–$1,200 per department

Formula:
  AnnualLicense    = (EssentialUsers×80 + PremiumUsers×110 + TeamMemberUsers×8) × 12
  OtherServicesRaw = Customization + Migration + Training
  OtherServicesAdj = OtherServicesRaw ÷ 2
  GrandTotal       = AnnualLicense + Implementation + LSCentral + OtherServicesAdj

When ReadyToEstimate=true AND ContactCollected=true:
- Set EstimateSummary to a one-line plain-text note (no numbers, no breakdown)
- NextMessage must say ONLY something like: "Thank you. Based on what you've shared, here is your indicative estimate:"
- NEVER put any dollar amounts, ranges, line items, or calculations in NextMessage — the estimate is rendered separately by the system
- NEVER calculate or display pricing in NextMessage under any circumstances

POST-ESTIMATE MODIFICATIONS:
- After the estimate has been shown, the user may want to adjust their requirements (e.g., fewer users, remove customization, different store count)
- If the user requests any change: update ONLY the affected fields in the JSON, keep ReadyToEstimate=true and ContactCollected=true — do NOT reset them
- The system will automatically detect the change and re-render an updated estimate card
- NextMessage should briefly acknowledge what changed (e.g., "I've updated the estimate — here is the revised breakdown:")
- Do NOT ask for name/company/phone again — you already have them
- Do NOT produce a full new qualification flow — just apply the change and confirm

LEAD CAPTURE (after estimate is presented):
- You already have CustomerName, CompanyName, CustomerPhone from the pre-estimate gate
- Now collect only CustomerEmail — ask naturally
- If user declines, ask once more politely before dropping it
- Once email is provided: set LeadCaptured=true, EmailReady=true
- Generate EmailSubject and EmailBody for internal notification to sales@indexofsolutions.com
- EmailBody must summarize: contact details (name, company, phone, email), business profile, estimate range, recommended next step
- NextMessage after full capture: "Thank you. Your details have been shared with our team and we will be in touch shortly."

COMPANY INFORMATION REQUESTS:
- If the user asks anything about Index of Solutions as a company (phone number, address, location, email, services offered, about us, office hours, how to contact, etc.), set NeedsCompanyInfo=true and NextMessage="Let me look that up for you."
- The system will automatically fetch the website and answer the question — you do not need to know the answer yourself
- Do NOT make up or guess company contact details

ALWAYS RETURN THIS EXACT JSON STRUCTURE:
{
  "EmployeeCount": null,
  "FullUsers": null,
  "TeamMemberUsers": null,
  "Industry": null,
  "CurrentSystem": null,
  "ImplementationScope": null,
  "CompanyType": null,
  "LocationCount": null,
  "RetailLocationCount": null,
  "POSCount": null,
  "NeedsLSCentral": null,
  "ModulesRequired": [],
  "NeedsPremium": null,
  "LicenseType": "Unknown",
  "EssentialUsers": null,
  "PremiumUsers": null,
  "TrainingDepts": null,
  "HistoryMigration": null,
  "DataCleanliness": null,
  "CustomNeeds": null,
  "Complexity": null,
  "ReadyToEstimate": false,
  "ContactCollected": false,
  "MissingFields": [],
  "NextMessage": "",
  "EstimateSummary": null,
  "CustomerName": null,
  "CompanyName": null,
  "CustomerPhone": null,
  "CustomerEmail": null,
  "LeadCaptured": false,
  "EmailReady": false,
  "EmailSubject": null,
  "EmailBody": null,
  "NeedsCompanyInfo": false
}`;

export default function ChatbotModal({ ref }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentLang, setCurrentLang] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const t = TRANSLATIONS[currentLang];

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const selectLanguage = useCallback((lang) => {
    setCurrentLang(lang);
    setMessages([
      {
        role: 'bot',
        content: TRANSLATIONS[lang].welcome,
        isHTML: true,
      },
    ]);
    setInitialized(true);
  }, []);

  const callAPI = useCallback(
    async (userMsg) => {
      setIsLoading(true);

      try {
        const conversationStr = messages
          .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
          .join('\n');

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system: SYSTEM_PROMPT_BASE,
            conversation: conversationStr,
          }),
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        const { state } = data;

        if (state?.NextMessage) {
          setMessages((prev) => [
            ...prev,
            {
              role: 'bot',
              content: state.NextMessage,
              state,
            },
          ]);
        }

        // Render estimate card if ReadyToEstimate and ContactCollected
        if (state?.ReadyToEstimate && state?.ContactCollected) {
          const estimateHTML = buildEstimateHTML(state);
          setMessages((prev) => [
            ...prev,
            {
              role: 'bot',
              content: estimateHTML,
              isHTML: true,
              state,
            },
          ]);
        }
      } catch (err) {
        console.error('API call failed:', err);
        setMessages((prev) => [
          ...prev,
          {
            role: 'bot',
            content: "I'm sorry, I encountered an issue. Could you please try again?",
          },
        ]);
      } finally {
        setIsLoading(false);
        // Auto-focus input after response
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    },
    [messages]
  );

  const handleSend = useCallback(async () => {
    if (!userInput.trim()) return;

    const userMsg = userInput.trim();
    setUserInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);

    await callAPI(userMsg);
  }, [userInput, callAPI]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

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
      rows += `<div class="est-row est-sub"><span>↳ ${posCount} ${t.posLbl}${posCount > 1 && currentLang === 'en' ? 's' : ''} @ $85/mo</span><span>${fmt(posAnnual)}/yr</span></div>`;
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
  }, [currentLang, t]);

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
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
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
        <div className={styles.messagesContainer}>
          {!initialized ? (
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
          ) : (
            <>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`${styles.msg} ${msg.role === 'user' ? styles.msgUser : styles.msgBot}`}
                >
                  <div className={`${styles.avatar} ${msg.role === 'user' ? styles.userAvatar : styles.botAvatar}`}>
                    {msg.role === 'user' ? 'You' : 'IOS'}
                  </div>
                  <div className={`${styles.bubble} ${currentLang === 'ar' ? styles.rtl : ''}`}>
                    {msg.isHTML ? (
                      <div dangerouslySetInnerHTML={{ __html: msg.content }} />
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
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
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input */}
        {initialized && (
          <div className={styles.inputBar}>
            <textarea
              ref={inputRef}
              className={styles.input}
              placeholder={t.placeholder}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              rows="1"
            />
            <button
              className={styles.sendBtn}
              onClick={handleSend}
              disabled={isLoading || !userInput.trim()}
              aria-label="Send message"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
