import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'e-Invoicing and VAT Compliance in Lebanon with Business Central',
  'description': 'Prepare your business for e-invoicing mandates and manage VAT compliance in Lebanon using Microsoft Dynamics 365 Business Central — structured invoice formats, tax reporting, and audit-ready records.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/services/e-invoicing-vat-lebanon`,
}

export const metadata = {
  title: 'e-Invoicing and VAT Compliance in Lebanon | Business Central | Index of Solutions',
  description:
    'Prepare your Lebanese business for e-invoicing and VAT compliance with Microsoft Dynamics 365 Business Central. Structured invoice generation, VAT reporting, audit trails, and multi-currency tax handling — all within your ERP.',
  keywords: [
    'e-invoicing Lebanon',
    'VAT compliance Lebanon',
    'electronic invoicing Lebanon',
    'Business Central VAT Lebanon',
    'e-invoice ERP Lebanon',
    'tax compliance software Lebanon',
    'VAT reporting Business Central',
    'digital invoicing Lebanon',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/services/e-invoicing-vat-lebanon` },
  openGraph: {
    url: `${siteUrl}/services/e-invoicing-vat-lebanon`,
    title: 'e-Invoicing and VAT Compliance in Lebanon | Business Central',
    description: 'Structured invoice generation, VAT reporting, and audit-ready compliance for Lebanese businesses — built into Business Central.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`, alt: 'e-Invoicing VAT Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'e-Invoicing and VAT Compliance Lebanon | Business Central',
    description: 'Get your business ready for e-invoicing mandates with Business Central.',
  },
}

export default function EInvoicingVATLebanon() {
  return (
    <ServicesLayout
      jsonLd={serviceJsonLd}
      title={'e-Invoicing and VAT Compliance with Business Central'}
    >
      <p className='font-[inter] text-lg'>
        E-invoicing mandates are spreading rapidly across the Middle East. Saudi Arabia (ZATCA), Egypt, and the UAE have already implemented mandatory electronic invoicing for businesses — Lebanon is watching closely and is expected to follow. The businesses that will handle this transition smoothly are the ones already running their invoicing inside a compliant ERP. Business Central is built for exactly this.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What Business Central Does for Tax & Invoicing Compliance</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🧾</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Structured Invoice Generation</h3>
            <p className='text-fg font-[inter]'>
              Business Central generates invoices in structured digital formats (XML, PDF/A, UBL) that meet e-invoicing standards. Every required field — tax registration number, invoice sequence, line-level tax — is included automatically.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📊</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>VAT Calculation & Reporting</h3>
            <p className='text-fg font-[inter]'>
              Configure Lebanon's 11% VAT rate (or any applicable rate) once, and Business Central applies it correctly to every transaction — sales, purchases, credit notes, and adjustments. VAT returns are generated directly from the system.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔍</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Full Audit Trail</h3>
            <p className='text-fg font-[inter]'>
              Every invoice, credit note, and payment is logged with a complete, unalterable audit trail. If the tax authority requests documentation, Business Central produces it instantly — no searching through filing cabinets or email chains.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>💱</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Multi-Currency Tax Handling</h3>
            <p className='text-fg font-[inter]'>
              For Lebanese businesses transacting in USD and LBP, Business Central calculates VAT in the transaction currency and reports in the functional currency — with correct exchange rate treatment for tax purposes.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔗</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Government Portal Integration</h3>
            <p className='text-fg font-[inter]'>
              As Lebanon or other countries in which you operate introduce e-invoicing portals, Business Central can be configured to submit invoices automatically via API — removing the manual submission step entirely.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📁</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Archived Invoice Records</h3>
            <p className='text-fg font-[inter]'>
              Business Central retains the full history of every invoice in the system with no manual archiving required. Records are searchable, exportable, and retained for as long as your compliance requirements mandate.
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>The Regional e-Invoicing Wave</h2>
        <p className='font-[inter]'>
          The Middle East is in the middle of a digital tax transformation. Saudi Arabia mandated e-invoicing for all VAT-registered businesses in phases from 2021 to 2023. Egypt followed with its own e-invoicing system. The UAE is progressing. Jordan has announced plans. Lebanon will not be an exception — the only question is timing.
        </p>
        <p className='font-[inter]'>
          Lebanese businesses that export to or invoice clients in KSA, UAE, or Egypt already need to comply with those countries' e-invoicing rules today. Business Central handles cross-border invoice formats and can be configured for multiple country requirements within a single company.
        </p>
        <p className='font-[inter]'>
          The businesses that will transition smoothly when Lebanon mandates e-invoicing are the ones already generating their invoices from a structured ERP — not Word documents or PDF editors.
        </p>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Common Questions</h2>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Is e-invoicing mandatory in Lebanon yet?' />
          <AnswerBubbleCard answer='As of mid-2026, Lebanon has not yet mandated e-invoicing for all businesses. However, businesses that export to Saudi Arabia, the UAE, or Egypt must comply with those countries\' e-invoicing requirements for invoices issued to customers there. We monitor regulatory developments and will notify clients when Lebanese e-invoicing legislation is confirmed.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='We currently generate invoices in Word or Excel. What would a Business Central transition involve?' />
          <AnswerBubbleCard answer='Moving invoicing into Business Central is typically one of the first things configured during implementation. We map your current invoice layouts into Business Central templates, configure your tax codes, and train your team on the invoicing workflow. Most companies find the process takes 2–3 weeks and immediately notice the time saved on manual document creation.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Can Business Central generate Arabic invoices?' />
          <AnswerBubbleCard answer='Yes. Business Central supports Arabic language for invoice templates, and we configure bilingual (Arabic/English) invoice layouts during implementation. Arabic invoices are a standard requirement for many Lebanese and regional clients.' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['e-Invoicing', 'VAT Compliance', 'Business Central', 'Lebanon', 'Digital Tax', 'ERP'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </ServicesLayout>
  )
}
