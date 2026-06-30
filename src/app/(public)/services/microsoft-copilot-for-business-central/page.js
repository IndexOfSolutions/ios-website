import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Microsoft Copilot for Dynamics 365 Business Central',
  'description': 'Unlock AI-powered automation inside Business Central with Microsoft Copilot. Get instant answers from your data, automate repetitive tasks, and make faster decisions — without leaving your ERP.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/services/microsoft-copilot-for-business-central`,
}

export const metadata = {
  title: 'Microsoft Copilot for Business Central in Lebanon | Index of Solutions',
  description:
    'Unlock AI-powered automation inside Business Central with Microsoft Copilot. Get instant answers from your ERP data, automate repetitive tasks, and make faster decisions — deployed and configured by certified consultants in Lebanon.',
  keywords: [
    'Microsoft Copilot Business Central',
    'Copilot Dynamics 365 Lebanon',
    'AI ERP Lebanon',
    'Business Central AI features',
    'Copilot ERP Lebanon',
    'artificial intelligence ERP',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/services/microsoft-copilot-for-business-central` },
  openGraph: {
    title: 'Microsoft Copilot for Business Central in Lebanon | Index of Solutions',
    description:
      'AI-powered automation inside Business Central — instant data answers, automated tasks, and smarter decisions. Deployed by certified consultants in Beirut.',
    images: [{ url: `${siteUrl}/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`, alt: 'Microsoft Copilot for Business Central — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Copilot for Business Central | Index of Solutions',
    description: 'AI-powered automation inside Business Central. Deployed by certified consultants in Lebanon.',
  },
}

export default function MicrosoftCopilotForBusinessCentral() {
  return (
    <ServicesLayout
      jsonLd={serviceJsonLd}
      title={'Microsoft Copilot for Business Central'}
    >
      <p className='font-[inter] text-lg'>
        Microsoft Copilot is now built directly into Dynamics 365 Business Central. It brings AI-powered assistance into the same screens your team uses every day — no separate tool, no data exports, no learning curve. Ask a question in plain language, get an instant answer from your live ERP data.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What Copilot Does Inside Business Central</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>💬</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Chat with Your Data</h3>
            <p className='text-fg font-[inter]'>
              Ask Copilot questions like "What were our top 10 customers last quarter?" or "Show me inventory items below reorder point" and get instant, accurate answers — no report builder required.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>✍️</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>AI-Written Descriptions</h3>
            <p className='text-fg font-[inter]'>
              Copilot auto-generates product descriptions, marketing text, and item attributes in seconds. Write once, publish everywhere — website, catalogue, sales documents.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔄</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Bank Reconciliation</h3>
            <p className='text-fg font-[inter]'>
              Copilot matches bank statement lines to open ledger entries automatically — a task that used to take hours now takes minutes, with AI suggesting matches your team just approves.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📦</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Sales Order Automation</h3>
            <p className='text-fg font-[inter]'>
              Paste a customer email or PDF order into Business Central and Copilot extracts the items, quantities, and delivery details — creating a draft sales order in seconds.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📊</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Financial Forecasting</h3>
            <p className='text-fg font-[inter]'>
              Copilot analyses historical patterns and flags cash flow risks before they become problems — giving finance teams a heads-up instead of a surprise at month-end.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔍</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Inventory Analysis</h3>
            <p className='text-fg font-[inter]'>
              Ask Copilot to identify slow-moving stock, predict stockouts, or suggest reorder quantities based on sales velocity — keeping inventory lean without running short.
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Why This Matters for Lebanese Businesses</h2>
        <p className='font-[inter]'>
          In Lebanon's high-pressure business environment — multi-currency transactions, supply chain volatility, and lean finance teams — every hour of manual work is costly. Copilot eliminates the most repetitive tasks in your ERP: reconciliation, report pulling, order entry, content writing. Your team focuses on decisions, not data entry.
        </p>
        <p className='font-[inter]'>
          Because Copilot works inside Business Central's existing interface, there is nothing new to install or integrate. If you are already on Business Central, you can activate Copilot features without disrupting your current setup.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>How We Deploy Copilot for Your Team</h2>
        <p className='font-[inter]'>
          Enabling Copilot is not just a settings toggle. To get real value, it needs to be configured against your specific data model, chart of accounts, item catalogue, and user roles. Our consultants handle the full activation, testing, and team training so your staff knows exactly what to ask — and trusts what they get back.
        </p>
        <div className='flex flex-col gap-4 mt-4'>
          {[
            { step: '01', title: 'Copilot Readiness Assessment', desc: 'We review your current BC version, data quality, and user workflows to identify where Copilot will deliver the most immediate value.' },
            { step: '02', title: 'Feature Activation & Configuration', desc: 'We enable the right Copilot features for your licence tier and configure them against your actual data — not a demo environment.' },
            { step: '03', title: 'User Training', desc: 'We run role-based sessions showing your finance, sales, and purchasing teams exactly how to use Copilot in their daily tasks.' },
            { step: '04', title: 'Ongoing Optimisation', desc: 'As Microsoft releases new Copilot capabilities, we keep your setup current and help you adopt features as they become available.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className='flex gap-6 items-start border-l-2 border-primary pl-6'>
              <span className='font-[newake] text-primary text-3xl leading-none'>{step}</span>
              <div>
                <h3 className='font-[inter] font-bold text-fg text-lg'>{title}</h3>
                <p className='font-[inter] text-fg'>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Common Questions</h2>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Do I need a new licence to use Copilot in Business Central?' />
          <AnswerBubbleCard answer='Most Copilot features are included in your existing Business Central Essentials or Premium licence at no extra cost. Some advanced AI features may require a Microsoft 365 Copilot add-on licence — we will advise you based on your current subscription before any activation.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Is our data safe when using Copilot?' />
          <AnswerBubbleCard answer='Yes. Copilot in Business Central runs entirely within Microsoft's secure cloud infrastructure. Your data never leaves your tenant, is never used to train public AI models, and is protected by the same enterprise-grade security and compliance standards that apply to the rest of your Microsoft 365 environment.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Which version of Business Central do I need?' />
          <AnswerBubbleCard answer='Copilot features are available from Business Central 2023 Wave 2 (version 23) onwards. If you are on an older version, we can assess an upgrade path. Customers on cloud (SaaS) Business Central receive Copilot updates automatically as Microsoft releases them.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Does Copilot work in Arabic?' />
          <AnswerBubbleCard answer='Microsoft is actively expanding Copilot language support. Currently, Copilot works best in English, but the underlying Business Central interface can run in Arabic and the AI responses adapt to the language of your query. We will be transparent about current limitations and keep you updated as Arabic support matures.' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['Microsoft Copilot', 'Business Central', 'AI ERP', 'Automation', 'Lebanon', 'Dynamics 365'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </ServicesLayout>
  )
}
