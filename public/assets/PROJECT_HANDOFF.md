# IOS BC Estimator — Project Handoff

## What This Is

An AI-powered chatbot widget for the Index of Solutions website that qualifies prospects and generates indicative cost estimates for Microsoft Dynamics 365 Business Central implementations. Built to replace a Microsoft Copilot-based solution that was too expensive.

---

## Current Status

- Chatbot widget: **complete**
- Azure Function proxy: **complete**
- GitHub Actions workflow: **complete**
- Deployment to Azure: **pending — not yet pushed to repo**
- Live testing: **not yet done**
- Email sending (lead notification): **not yet implemented — email body is generated but not sent**

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML + CSS + JS (single file) |
| API Proxy | Azure Function (Node.js) |
| Hosting | Azure Static Web Apps |
| CI/CD | GitHub Actions |
| AI Model | Claude Sonnet (`claude-sonnet-4-20250514`) via Anthropic API |
| Secret Management | Azure App Settings (or Key Vault via Managed Identity) |

---

## Repo File Structure

```
your-repo/
├── chatbot-widget.html              ← full chatbot UI + JS logic
├── staticwebapp.config.json         ← Azure SWA routing config
├── api/
│   └── chat/
│       ├── index.js                 ← Azure Function (Anthropic proxy)
│       └── function.json            ← Function binding config
└── .github/
    └── workflows/
        └── deploy.yml               ← GitHub Actions CI/CD pipeline
```

---

## How It Works

1. User opens the chatbot on the website
2. Widget sends user messages to `/api/chat` (Azure Function)
3. Azure Function calls Anthropic API (`claude-sonnet-4-20250514`) with the full conversation history + system prompt
4. Claude returns a structured JSON object (not prose)
5. Widget reads the JSON and renders the next message, or the estimate card, or the lead capture flow
6. When lead is captured, an email body is generated internally (sending not yet wired up)

---

## The System Prompt Logic

Claude acts as "IOS Project Estimator" and always returns a JSON object — never plain text. The JSON tracks all collected fields and drives the conversation state.

### Fields Claude collects

| Field | Description |
|-------|-------------|
| `EmployeeCount` | Total company employees |
| `FullUsers` | Users needing full BC access |
| `TeamMemberUsers` | Light users (approvals/reports only) |
| `Industry` | Manufacturing / Retail / F&B / Distribution / Services / Healthcare / Construction / Education / Logistics / Other |
| `CurrentSystem` | Excel / Manual / Odoo / SAP / Oracle / QuickBooks / Sage / Zoho / Business Central / Other |
| `ImplementationScope` | Auto-derived: Migration / Expansion / Upgrade |
| `CompanyType` | Single Company / Multi Company / Group / Franchise |
| `LocationCount` | Number of branches/offices/sites |
| `RetailLocationCount` | Stores/outlets (Retail & F&B only) |
| `POSCount` | POS terminals (Retail & F&B only) |
| `NeedsLSCentral` | true if Retail/F&B with stores + POS |
| `ModulesRequired` | Array: Finance, Sales, Purchasing, Inventory, Warehouse, Manufacturing, Service, Projects, CRM, POS, Payroll |
| `NeedsPremium` | true only if Production Orders / BOMs / Routings / MRP / Service Orders explicitly needed |
| `LicenseType` | Essentials / Premium / Mixed / Unknown |
| `EssentialUsers` | Count of Essentials-tier users |
| `PremiumUsers` | Count of Premium-tier users |
| `TrainingDepts` | Number of departments needing training |
| `HistoryMigration` | None / Limited / Full |
| `DataCleanliness` | Good / Average / Poor |
| `CustomNeeds` | None / Minor / Moderate / Major |
| `Complexity` | Basic / Standard / Complex (auto-inferred) |
| `ReadyToEstimate` | true when all required fields collected |
| `CustomerName` | Lead name |
| `CustomerPhone` | Lead phone |
| `CustomerEmail` | Lead email |
| `LeadCaptured` | true when all 3 contact fields collected |
| `EmailReady` | true when email body is generated |
| `EmailSubject` | Internal email subject |
| `EmailBody` | Internal email body for sales@indexofsolutions.com |

### ReadyToEstimate — minimum required fields

All projects:
- Industry, EmployeeCount, CurrentSystem, FullUsers, TeamMemberUsers, CustomNeeds, HistoryMigration

Retail / Food & Beverage also need:
- RetailLocationCount, POSCount

Manufacturing also needs:
- NeedsPremium (confirmed yes or no)

---

## Pricing Logic

### Microsoft License Fees (annual)
| License | Monthly per user | Annual per user |
|---------|-----------------|-----------------|
| Essentials | $80 | $960 |
| Premium | $110 | $1,320 |
| Team Members | $8 | $96 |

### Implementation Fees (out-of-box — no adjustment applied)
| Complexity | Range |
|-----------|-------|
| Basic | $8,000 – $15,000 |
| Standard | $15,000 – $35,000 |
| Complex | $35,000 – $80,000 |

### LS Central Add-on (if NeedsLSCentral = true)
| Stores | Range |
|--------|-------|
| 1–2 | $5,000 – $10,000 |
| 3–5 | $10,000 – $15,000 |
| 6+ | $15,000 – $20,000 |

### Other Services (÷2 adjustment applied — IOS competitive rate)
| Type | None | Minor | Moderate | Major |
|------|------|-------|----------|-------|
| Customization | $0 | $3,000–$6,000 | $8,000–$18,000 | $20,000–$50,000 |
| Migration | $0 | $2,000–$5,000 | $5,000–$15,000 | — |
| Training | — | $800–$1,500/dept | — | — |

### Grand Total Formula
```
AnnualLicense    = (EssentialUsers × $80 + PremiumUsers × $110 + TeamMemberUsers × $8) × 12
OtherServicesRaw = Customization + Migration + Training
OtherServicesAdj = OtherServicesRaw ÷ 2
GrandTotal       = AnnualLicense + Implementation + LSCentral + OtherServicesAdj
```

---

## Azure Setup

### Required Azure App Setting
| Name | Value |
|------|-------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key (`sk-ant-...`) |

Set via: Azure Portal → Static Web App → Configuration → Application Settings

### Optional: Key Vault via Managed Identity
If you prefer Key Vault:
1. Store secret as `ANTHROPIC-API-KEY` in Key Vault
2. In App Settings, set value as: `@Microsoft.KeyVault(SecretUri=https://your-vault.vault.azure.net/secrets/ANTHROPIC-API-KEY/)`
3. Assign `Key Vault Secrets User` role to the Static Web App's Managed Identity

### GitHub Secret Required
| Secret Name | Value |
|------------|-------|
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | Deployment token from Azure Portal → Static Web App → Manage deployment token |

---

## Deployment Steps (not done yet)

1. Add `ANTHROPIC_API_KEY` to Azure App Settings
2. Add `AZURE_STATIC_WEB_APPS_API_TOKEN` to GitHub repo secrets
3. Merge files into repo (check `app_location` in `deploy.yml` matches your HTML folder)
4. Push to `main` → GitHub Actions deploys automatically
5. Test `/api/chat` endpoint directly with a POST request
6. Open widget on site and run a full test conversation

---

## What Still Needs to Be Done

### High priority
- [ ] Deploy to Azure and verify end-to-end conversation works
- [ ] Test all industry paths (Retail with LS Central, Manufacturing with Premium, standard Services)
- [ ] Adjust pricing ranges if Youssef wants different numbers

### Medium priority
- [ ] Wire up actual email sending for lead notifications
  - Options: SendGrid (Azure native), Azure Communication Services, or a simple SMTP call from the Function
  - Target: `sales@indexofsolutions.com`
  - Trigger: when `LeadCaptured = true` and `EmailReady = true`
- [ ] Style the widget to match the exact indexofsolutions.com design more closely (current branding is approximate)

### Nice to have
- [ ] Save leads to Azure Table Storage or a database instead of just email
- [ ] Admin dashboard to view all captured leads
- [ ] Add Arabic language support

---

## Key Contacts / Config

| Item | Value |
|------|-------|
| Website | https://www.indexofsolutions.com |
| Lead email | sales@indexofsolutions.com |
| AI model | `claude-sonnet-4-20250514` |
| Proxy endpoint | `/api/chat` (relative — works on any Azure SWA domain) |

---

## Notes

- The `PROXY_URL` in `chatbot-widget.html` is already set to `/api/chat` — no hardcoded domain needed
- The widget is a floating button (bottom-right) that opens a chat window — no page layout changes needed on the site
- Claude only asks about fields in `MissingFields` — it will not repeat questions already answered
- The ÷2 pricing adjustment on Other Services is intentional — it reflects IOS's competitive regional rates vs standard Microsoft partner rates
- Do not change the JSON output structure in the system prompt without updating the `buildEstimateHTML()` function in the widget accordingly
