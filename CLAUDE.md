# IOS Website — Claude Code Reference

## Project Overview

**Client:** Index of Solutions (IOS) — Microsoft Certified ERP partner based in Beirut, Lebanon.  
**Purpose:** Public marketing website for IOS's Microsoft Dynamics 365 Business Central services, with an AI-powered implementation cost estimator chatbot.  
**Live URL:** https://www.indexofsolutions.com  
**Stack:** Next.js 16.1.6 (App Router) · React 19 · Tailwind CSS v4 · Supabase · Resend · Anthropic Claude API · GSAP · Lenis

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16.1.6 with Turbopack (`next dev --turbopack`) |
| UI | React 19, Tailwind CSS v4, shadcn/ui primitives |
| Animations | GSAP 3 (`@gsap/react`), Lenis smooth scrolling |
| Database | Supabase (blogs table) |
| Email | Resend (contact form + chatbot lead notifications) |
| AI Chatbot | Anthropic API (`claude-haiku-4-5-20251001`) |
| Forms | Formik |
| Icons | FontAwesome (`@fortawesome/react-fontawesome`) |
| Fonts | Newake (display), Inter, Inter Italic, JetBrains Mono — all local `.woff2` in `public/assets/fonts/` |

---

## Directory Structure

```
src/
├── app/
│   ├── (public)/          # Public-facing pages (main site)
│   │   ├── layout.js      # Root layout: Header, Footer, ChatbotModal, SmoothScrolling
│   │   ├── page.js        # Home page
│   │   ├── about/
│   │   │   ├── page.js
│   │   │   └── case-studies/page.js
│   │   ├── blogs/
│   │   │   ├── page.js       # Fetches from Supabase `Blogs` table
│   │   │   └── [slug]/page.js
│   │   ├── contact/page.js
│   │   ├── price-estimator/page.js   # Full-page chat widget (hides chatbot modal)
│   │   ├── industries/
│   │   │   ├── distribution-erp/page.js
│   │   │   ├── pharma-erp/page.js
│   │   │   └── retail-erp/page.js
│   │   ├── services/
│   │   │   ├── business-central-implementation/page.js
│   │   │   ├── business-central-consultancy/page.js
│   │   │   ├── business-central-support/page.js
│   │   │   ├── business-central-training/page.js
│   │   │   ├── dynamics-nav-support/page.js
│   │   │   ├── nav-to-business-central-upgrade/page.js
│   │   │   ├── power-bi-and-analytics/page.js
│   │   │   ├── ls-central-transforms-business-central-into-a-complete-retail-powerhouse/page.js
│   │   │   └── full-stack-hr-platform/page.js
│   │   ├── microsoft-dynamics-365-business-central-lebanon/page.js
│   │   ├── top-microsoft-dynamics-business-central-partners-in-lebanon/page.js
│   │   ├── privacy-policy/page.js
│   │   ├── terms-and-conditions/page.js
│   │   ├── globals.css     # Tailwind v4 theme tokens + utility classes
│   │   ├── sitemap.js
│   │   └── robots.js
│   ├── (admin)/           # Admin area (currently minimal — login stub only)
│   │   ├── layout.js
│   │   ├── admin.css
│   │   └── login/page.js
│   └── api/
│       ├── chat/route.js              # POST /api/chat — Anthropic proxy for chatbot
│       └── send-estimate-email/route.js  # POST /api/send-estimate-email — Resend email
│
├── components/
│   ├── layouts/
│   │   ├── Header.js          # Sticky nav with nested dropdowns (desktop) + mobile modal
│   │   ├── Footer.js          # Social links, page links, Microsoft partner badge
│   │   ├── Services.js
│   │   └── Industries.js
│   ├── animations/
│   │   ├── SmoothScrolling.js     # Lenis wrapper
│   │   ├── HorizontalMarquee.js
│   │   ├── TextMarquee.js
│   │   ├── ServicesHorizontalScrolling.js
│   │   └── ImageComparisonSlider.js
│   ├── SVGs/
│   │   ├── HeroLightEffect.js
│   │   ├── FooterLightEffect.js
│   │   ├── BoxLightEffect.js
│   │   └── SeparaterLightEffect.js
│   ├── ui/
│   │   ├── IconWrapper.js         # FontAwesome wrapper
│   │   ├── ContactUsForm.js
│   │   ├── QuestionBubbleCard.js
│   │   ├── AnswerBubbleCard.js
│   │   ├── button.jsx / card.jsx / input.jsx / label.jsx / alert.jsx  # shadcn primitives
│   │   └── theme-provider.jsx
│   ├── emails/
│   │   ├── Action.js              # Server action: submitContactForm()
│   │   ├── ContactTemplate.js     # React Email template for contact form
│   │   └── ThankYouTemplate.js
│   ├── ChatbotModal.js            # Floating chatbot button + modal (hidden on /price-estimator)
│   ├── ChatbotModal.module.css
│   ├── EstimateCard.js            # JSX component to render the pricing estimate
│   ├── BlogFilters.js
│   └── priceCalculator.module.css
│
├── sections/              # Home page section components
│   ├── Hero.js
│   ├── WhatWeOffer.js
│   ├── WhyChooseIOS.js
│   ├── FAQ.js
│   └── ContactUs.js
│
├── constants/
│   ├── seo.js             # SITE_NAME, DEFAULT_META_DESCRIPTION, SEO_KEYWORDS, SERVICES_KEYWORDS
│   ├── FAQs.js            # FAQ data array (used on home page + JSON-LD)
│   └── Blogs.js           # Static fallback blog data (actual blogs fetched from Supabase)
│
├── lib/
│   ├── system-prompt.js   # SYSTEM_PROMPT_BASE — the full Anthropic system prompt for the estimator
│   ├── translations.js    # TRANSLATIONS object for en/fr/ar (chatbot UI strings)
│   ├── estimate.js        # calculateEstimate(), estimateKey(), fmt(), rng() — all pricing math
│   └── utils.js           # cn() helper (clsx + tailwind-merge)
│
├── data/
│   └── ios-knowledge-base.md   # Company knowledge base read by /api/chat for company FAQ answers
│
└── utils/supabase/
    ├── client.js      # Browser Supabase client
    ├── server.js      # Server Supabase client
    ├── middleware.js  # Supabase auth middleware helper
    └── public.js
```

---

## Environment Variables

| Variable | Used By | Notes |
|---|---|---|
| `ANTHROPIC_API_KEY` | `/api/chat` | Claude API for chatbot |
| `RESEND_API_KEY` | `/api/send-estimate-email`, `emails/Action.js` | Email delivery |
| `RESEND_FROM` | Both email routes | Sender address (must be verified in Resend) |
| `CONTACT_TO` | Both email routes | Recipient for leads/contact form |
| `SUPABASE_URL` | `utils/supabase/client.js` + `server.js` | Supabase project URL |
| `SUPABASE_PUBLISHABLE_DEFAULT_KEY` | `utils/supabase/client.js` | Supabase anon key |
| `NEXT_PUBLIC_SITE_URL` / `SITE_URL` / `VERCEL_PROJECT_PRODUCTION_URL` | All page metadata | Site URL for canonical tags and OG metadata |

All secrets go in `.env.local` for development. In production they are set as Application Settings on Azure App Service.

---

## AI Chatbot — How It Works

The chatbot is the most complex feature. There are **two entry points** that share the same logic:

1. **`ChatbotModal.js`** — floating button (bottom-right) visible on all pages except `/price-estimator`
2. **`/price-estimator/page.js`** — full-page standalone version

### Flow

```
User types → ChatbotModal / PriceEstimator page
  → POST /api/chat
      → Anthropic claude-haiku-4-5-20251001
          returns JSON state object
  → If state.NeedsCompanyInfo → reads src/data/ios-knowledge-base.md, answers from KB
  → If state.ReadyToEstimate + state.ContactCollected → renders <EstimateCard>
  → If state.ReadyToEstimate → POST /api/send-estimate-email (lead notification to CONTACT_TO)
  → If state.LeadCaptured + state.EmailReady → POST /api/send-estimate-email again (with email)
```

### Key Files for Chatbot

| File | Role |
|---|---|
| `src/lib/system-prompt.js` | The Anthropic system prompt — DO NOT change the JSON field names or the pricing table without also updating `estimate.js` and `send-estimate-email/route.js` |
| `src/lib/estimate.js` | `calculateEstimate(state)` — single source of pricing math. `estimateKey(state)` — detects when estimate changes to avoid duplicate renders |
| `src/lib/translations.js` | UI strings for English, French, Arabic. Also contains `langPrompt` injected into the system prompt |
| `src/components/EstimateCard.js` | Renders the estimate breakdown using CSS Modules. Uses `calculateEstimate()` — no math here |
| `src/app/api/chat/route.js` | Anthropic proxy. Also calls `answerFromKnowledgeBase()` for company info questions |
| `src/data/ios-knowledge-base.md` | Plain-text company FAQ used for company info answers |

### Pricing Logic (in `estimate.js` and mirrored in `send-estimate-email/route.js`)

- **Essentials license:** $80/user/month × 12
- **Premium license:** $110/user/month × 12
- **Team Member license:** $8/user/month × 12
- **Implementation:** Basic $4k–$6k | Standard $7.5k–$12k | Complex $17.5k–$26k
- **LS Central setup:** 1–2 stores $5k–$8k → 21+ stores $32k–$45k
- **LS Central user add-on:** $30/Essential user/month × 12
- **POS device licenses:** $85/device/month × 12
- **Customization:** None $0 | Minor $3k–$5k | Moderate $8k–$13k | Major $20k–$32k (÷2 for IOS adjusted rate)
- **Migration:** None $0 | Limited $2k–$4k | Full $5k–$9k (÷2)
- **Training:** $800–$1,200/department (÷2)
- **Grand Total = Recurring + One-Time (adjusted)**

> **Important:** The `÷2` adjustment for Other Services (customization, migration, training) is an IOS-specific pricing discount that is applied before displaying to the customer.

---

## Contact Form

- **Page:** `/contact`
- **Form fields:** Full Name, Company Name, Type of Business, Service, Phone Number, Email
- **Server action:** `src/components/emails/Action.js` → `submitContactForm()`
- **Email template:** `src/components/emails/ContactTemplate.js` (React Email)
- **Library:** Resend SDK
- Sends to `process.env.CONTACT_TO`, reply-to set to customer email

---

## Blog System

- **Page:** `/blogs` — fetches from Supabase `Blogs` table ordered by `date` ascending, then reversed for display
- **Dynamic pages:** `/blogs/[slug]`
- **Static fallback data:** `src/constants/Blogs.js` (not used in production — Supabase is the source of truth)
- Blog images are stored in Supabase Storage (`BlogsImages` bucket)
- Filtering is handled client-side by `BlogFilters.js`

---

## Design System

### Colors (defined in `globals.css` `@theme`)

| Token | Value | Usage |
|---|---|---|
| `--color-mainbg` | `#18181b` | Page background |
| `--color-fg` | `#F1F1F1` | Primary text |
| `--color-primary` | `#3b82f6` | Accents, links, buttons |
| `--color-secondary` | `#27272a` | Cards, secondary backgrounds |
| `--color-border-color` | `#3f3f46` | Borders |
| `--color-edges` | `#71717a` | Subtle borders |

### Typography

- **Newake** (`--font-newake`) — display/heading font (large titles, footer wordmark)
- **Inter** (`--font-inter`) — body text
- **Inter Italic** (`--font-inter-italic`) — subtitles
- **JetBrains Mono** (`--font-jetBrainsMono`) — code/mono

Use `font-[newake]`, `font-[inter]` etc. in Tailwind classes to apply.

### Spacing

- `py-section-vertical` = `120px` (desktop section padding)
- `py-section-vertical-sm` = `60px` (mobile section padding)

### Buttons

Primary CTA button pattern:
```jsx
className='px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border-primary-button-border shadow-primary-button-shadow'
```

### Glow Lines (decorative section dividers)

- `.glow-line-left` — blue glow fading right
- `.glow-line-right` — blue glow fading left
- `.glow-line` — centered blue glow (mobile)

---

## Navigation Structure

**Desktop nav** (in `Header.js`): sticky, blurred, nested hover dropdowns

```
Home
About → [Case Studies]
Services → Business Central [Implementation, Consultancy, Support, Training]
          Power BI & Analytics
          Dynamics NAV → [NAV to BC Upgrade, NAV Support]
          LS Central For Retail
          Full Stack HR Platform
Industries → [Pharma ERP, Retail ERP, Distribution ERP]
Price Estimator
Blogs
Contact
```

**Mobile nav:** full-screen overlay with accordion-style toggles.

---

## SEO Architecture

- All page-level metadata is in each page's exported `metadata` object
- Global defaults are in `src/constants/seo.js`
- JSON-LD structured data:
  - Root layout: `ProfessionalService` + `WebSite` schema
  - Home: `WebPage` + `FAQPage` schema
  - Blogs: `Blog` schema
  - Service/industry pages: their own schemas
- Canonical URLs derived from env var `NEXT_PUBLIC_SITE_URL`
- **Middleware** (`middleware.js`): 301 redirects all uppercase URL paths to lowercase

---

## Middleware

`middleware.js` enforces lowercase URLs on all non-API, non-static paths. This prevents duplicate content issues where e.g. `/Services/Business-Central-Implementation` and `/services/business-central-implementation` would both resolve.

---

## Admin Area

Located at `src/app/(admin)/`. Currently only has a placeholder login page — **full admin functionality is planned but not yet built**. The admin layout uses a separate `admin.css`. The Supabase auth utilities in `utils/supabase/` (client, server, middleware) are already in place for when auth is implemented. Do not remove or modify them.

---

## Common Tasks

### Add a new service page
1. Create `src/app/(public)/services/<slug>/page.js`
2. Add the route to `Header.js` (desktop dropdown + mobile menu)
3. Add the route to `Footer.js` links
4. Add to `src/app/(public)/sitemap.js`
5. Add SEO metadata using the `metadata` export pattern from existing service pages

### Add a new blog post
- Add directly in Supabase `Blogs` table with fields: `title`, `type`, `excerpt`, `body`, `link` (slug), `imageURL`, `author`, `date`
- Upload image to Supabase Storage `BlogsImages` bucket

### Add a new industry page
1. Create `src/app/(public)/industries/<slug>/page.js`
2. Add to `Header.js` Industries dropdown
3. Add to `src/app/(public)/sitemap.js`

### Modify chatbot pricing
Edit `src/lib/system-prompt.js` (the PRICING section) **and** update `src/lib/estimate.js` (`calculateEstimate`) **and** `src/app/api/send-estimate-email/route.js` to keep the three in sync.

### Add a new chatbot language
1. Add a new key to `TRANSLATIONS` in `src/lib/translations.js` with all required fields
2. Add a language picker button in `ChatbotModal.js` and `price-estimator/page.js`

### Update the knowledge base (company FAQ answers)
Edit `src/data/ios-knowledge-base.md` — the chatbot reads this file when users ask about the company.

---

## Running the Project

```bash
npm run dev      # Development with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

Node >= 20 required.

### Deployment (Azure App Service)

The site is deployed on **Azure App Service**. The `.deployment` file at the project root sets `SCM_DO_BUILD_DURING_DEPLOYMENT=false`, meaning the app must be pre-built before deployment — Azure does **not** run `npm run build` automatically on deploy. Build the app locally or in CI, then push the output.

Set all environment variables as **Application Settings** in the Azure App Service configuration panel (not in any committed file).

---

## Company Context

**Index of Solutions (IOS)** is a Microsoft Certified ERP partner in Beirut, Lebanon (founded ~2012, website says 2022 in KB).  
- **Contact:** y.nasser@indexofsolutions.com · +961 3 865 174  
- **Address:** Cornish al Mazraa, Sabbah Center, Block B, 2nd Floor, Beirut  
- **LinkedIn:** https://www.linkedin.com/company/indexofsolutions/  
- **Primary services:** Business Central implementation, consultancy, support, training, NAV-to-BC upgrades, Power BI, LS Central for retail, Full Stack HR Platform  
- **Industries served:** Retail, Pharma, Distribution, Manufacturing, F&B, Services  
- **Brochure:** `/assets/PDFs/IOSDesign16.pdf`

---

## Opinly Blog (`/insights`)

A second, AI-authored blog powered by [Opinly](https://opinly.ai), independent of
the Supabase blog at `/blogs`. Content is written in the Opinly dashboard and
pulled at build/request time — there is nothing to edit in this repo to publish a
post.

### Packages

`@opinly/backend` (data client) · `@opinly/react` (Tiptap renderer) ·
`@opinly/next` (Next glue) · `@opinly/shared` (URL/SEO/sitemap builders) ·
`svix` (webhook signature verification).

### Configuration

`withOpinlyConfig(...)` wraps the export in `next.config.mjs`. It injects the
`OPINLY_*` env vars the SDK reads at runtime and adds a rewrite from `/images/*`
to `https://cdn.opinly.ai/iTODrjyxXpvtRpc5gYuCP/*`.

**Change blogPath / imagesPath / companyName / siteUrl in `next.config.mjs` only** —
never as environment variables, or the two will disagree.

| Env var | Where |
|---|---|
| `OPINLY_API_KEY` | Secret `sk-` key. Server-only, read by `createOpinlyClient`. Must be present **at build time** for prerendering and the sitemap. |
| `OPINLY_WEBHOOK_SIGNING_SECRET` | Svix secret for `/api/opinly`. |

The analytics pixel's `pk-` key is publishable and write-only, so it is inlined
in `src/app/layout.js` rather than kept in the environment.

### Files

| File | Role |
|---|---|
| `src/clients/opinly.js` | Lazily-built, memoized clients. **Lazy on purpose** — `createOpinlyClient` throws when `OPINLY_API_KEY` is unset, and at module scope that fails the build for every route that merely imports it. `getOpinly()` tags every fetch `'opinly'`; `getOpinlyEvents()` is `no-store` for writes. |
| `src/app/(public)/insights/[[...slug]]/page.js` | The whole blog. Routes by first URL segment to the matching typed endpoint, then a `switch` on the result. Handles home, post, category, **tag**, author and authors. |
| `src/components/opinly/` | The page UI — index, post, category, tag, author views, and `PostContent` wrapping `<OpinlyContent>`. |
| `src/components/opinly/config.js` | Render config + per-node Tailwind classes, derived from `opinlyConfig`. |
| `src/app/(public)/insights/rss.xml/route.js` | RSS feed. |
| `src/app/api/opinly/route.js` | `content.routes-changed` webhook. |
| `src/app/(public)/sitemap.js` | Existing sitemap, with Opinly's `routes()` merged in. |

### Cache invalidation — both halves are required

The webhook must do **two** things, because there are two caches:

1. `revalidateTag('opinly', { expire: 0 })` — the data cache. On Next 16+ the
   second argument is **required and behavioural**: `{ expire: 0 }` drops the
   responses now, whereas a named profile like `'max'` would keep serving stale
   posts for up to a year. Works for static and dynamic routes alike.
2. `revalidatePath(...)` for each changed route — the rendered HTML/RSC.

`revalidatePath` alone is not enough: on a self-hosted deployment (this site is
`output: 'standalone'` on Azure) it is a **silent no-op** for dynamically-rendered
routes, because the tag→path mapping is only seeded for prerendered routes at
build time. That is also why `generateStaticParams` prerenders every known route.

### Gotchas

- `routes()` includes **tag** routes. The route must handle them or the sitemap
  will advertise URLs that 404. (The upstream docs' sample omits this.)
- `middleware.js` skips `/images` in its lowercase redirect — Opinly CDN file
  keys are mixed-case nanoids and lowercasing one breaks the image silently.
- Post slugs are **flat**: `/insights/my-post`, never nested under a category.

---

## Opinly Analytics

The pixel in `src/app/layout.js` captures page views (including App Router
client-side navigations), clicks, form submissions, and auto-identifies visitors
from recognisable email fields. Most signal needs no code.

| File | Role |
|---|---|
| `src/lib/opinly-browser.js` | Client helpers: `getOpinlyAnonId()`, `identifyOpinlyVisitor()`, `trackOpinlyEvent()`. All no-op safely if the pixel hasn't loaded. |
| `src/lib/opinly-events.js` | Server-side events: `trackLead()`, `trackContactRequest()`, `trackPurchase()`. `server-only`; all errors swallowed. |
| `src/lib/opinly-estimator.js` | Shared POST helper so ChatbotModal and /price-estimator wire attribution identically. |

**Conversions wired:** `generate_lead` from the contact form
(`src/components/emails/Action.js`) and from the price estimator
(`src/app/api/send-estimate-email/route.js`). Both send `anonId` **and** `email`
— the ID attributes exactly, the email is the fallback when the ID never made it.
Without either, the lead is recorded but attributed to "direct".

**No purchase events.** This site has no checkout, orders or payments — deals
close offline. `trackPurchase()` exists and is documented but nothing calls it.
Do **not** feed it price-estimator totals: Opinly counts `purchase` value as
gross revenue *earned*, so quoting pipeline as revenue would corrupt every
report. Call it from a CRM webhook when a deal actually closes, with the real
contract value and order number.
