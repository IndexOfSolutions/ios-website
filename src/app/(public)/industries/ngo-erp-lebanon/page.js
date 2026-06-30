import IndustriesLayout from '@/components/layouts/Industries'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const industryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'ERP for NGOs and Non-Profit Organisations in Lebanon',
  'description': 'Microsoft Dynamics 365 Business Central for NGOs and non-profit organisations in Lebanon: donor fund management, project-based accounting, grant tracking, multi-currency reporting, and full financial transparency.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/industries/ngo-erp-lebanon`,
}

export const metadata = {
  title: 'ERP for NGOs in Lebanon | Non-Profit ERP | Business Central | Index of Solutions',
  description:
    'Microsoft Dynamics 365 Business Central for NGOs and non-profit organisations in Lebanon: donor fund accounting, grant tracking, project-based financials, multi-currency reporting, and audit-ready transparency.',
  keywords: [
    'NGO ERP Lebanon',
    'non-profit ERP Lebanon',
    'ERP for NGOs Lebanon',
    'donor fund management ERP',
    'Business Central for NGOs',
    'non-profit accounting software Lebanon',
    'grant management ERP Lebanon',
    'humanitarian organisation ERP',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/industries/ngo-erp-lebanon` },
  openGraph: {
    url: `${siteUrl}/industries/ngo-erp-lebanon`,
    title: 'ERP for NGOs in Lebanon | Non-Profit ERP | Business Central',
    description: 'Donor fund accounting, grant tracking, project financials, and audit-ready reporting for NGOs in Lebanon with Business Central.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`, alt: 'ERP for NGOs Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP for NGOs in Lebanon | Business Central',
    description: 'Donor fund accounting, grant tracking, and audit-ready financial reporting for Lebanese NGOs.',
  },
}

export default function NGOERPLebanon() {
  return (
    <IndustriesLayout
      jsonLd={industryJsonLd}
      title={'Business Central ERP for NGOs and Non-Profits in Lebanon'}
      imageURL={'about-index-of-solutions-microsoft-business-solution-partner'}
      imageAlt={'ERP for NGOs and Non-Profit Organisations in Lebanon'}
    >
      <p className='font-[inter] text-lg'>
        Lebanon hosts one of the highest concentrations of NGOs and non-profit organisations per capita in the world. These organisations face a unique financial management challenge: they must demonstrate complete transparency to international donors while managing projects across multiple locations, currencies, and funding sources — often simultaneously. Business Central gives Lebanese NGOs the financial control and reporting depth their donors require, without the complexity of enterprise-only systems.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What Business Central Does for NGOs</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>💰</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Donor Fund Accounting</h3>
            <p className='text-fg font-[inter]'>
              Track every dollar by donor and fund. Business Central ensures restricted funds are only used for their designated purpose, with automatic alerts when spending approaches fund limits — protecting you from compliance violations.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📋</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Grant & Project Tracking</h3>
            <p className='text-fg font-[inter]'>
              Manage multiple grants simultaneously with project-level budgets, expenditure tracking, and variance reporting. Generate donor reports directly from the system — no manual Excel compilation.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>💱</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Multi-Currency Reporting</h3>
            <p className='text-fg font-[inter]'>
              Receive funding in USD, EUR, GBP, or other currencies and report in any combination. Business Central handles exchange rate adjustments automatically, giving donors accurate local-currency breakdowns without manual conversion.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔍</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Audit-Ready Transparency</h3>
            <p className='text-fg font-[inter]'>
              Every transaction is logged with full traceability — who posted it, when, and against which fund or project. External auditors get a complete, unalterable record that satisfies the most demanding donor compliance requirements.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📊</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Budget vs. Actual Reporting</h3>
            <p className='text-fg font-[inter]'>
              Track actual spending against approved budgets in real time, at the project, department, or organisation level. Identify underspend before grant deadlines and overspend before it becomes a compliance issue.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🌍</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Multi-Location Operations</h3>
            <p className='text-fg font-[inter]'>
              Manage field offices across Lebanon or the region from a single system. Consolidate financial data from all locations for unified reporting to headquarters or international donors, without waiting for manual submissions.
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Why Lebanese NGOs Need Stronger Financial Systems</h2>
        <p className='font-[inter]'>
          Lebanon's economic crisis has intensified donor scrutiny. International organisations — UN agencies, EU bodies, bilateral donors — now require more detailed financial reporting, tighter fund separation, and faster audit response than ever before. NGOs still running on spreadsheets or basic accounting packages are spending more time preparing donor reports than delivering programmes.
        </p>
        <p className='font-[inter]'>
          Business Central automates the reporting layer. When a donor requests a fund utilisation report, your finance team generates it from the system in minutes — not days of spreadsheet consolidation. When an audit begins, every transaction is already documented, traceable, and accessible.
        </p>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Common Questions</h2>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Can Business Central separate restricted and unrestricted funds?' />
          <AnswerBubbleCard answer='Yes. Business Central uses dimensions (customisable tags you attach to every transaction) to separate funds by donor, project, restriction type, or any other category your organisation uses. You can run a P&L or balance sheet filtered to any single fund or project at any time, without affecting the overall financial view.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Our donors use different reporting templates. Can we generate custom reports?' />
          <AnswerBubbleCard answer='Yes. Business Central supports custom report layouts using Word or RDLC templates, and integrates natively with Power BI for dashboard-style donor reports. We configure the standard templates your main donors require during implementation, so your team can generate them with one click.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='We receive funding in USD and EUR but operate in LBP. How does Business Central handle this?' />
          <AnswerBubbleCard answer='Business Central handles unlimited currencies simultaneously. You can configure it to record transactions in the originating currency, maintain your books in a functional currency (e.g. USD), and report in a local currency (LBP) — all with automatic exchange rate adjustments and gain/loss tracking.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Is Business Central affordable for a small NGO?' />
          <AnswerBubbleCard answer='Business Central starts at $80/user/month with no minimum user count. A small NGO finance team of 3–5 users pays $240–$400/month in licences. Implementation for a straightforward NGO setup starts at $4,000–$6,000 as a one-time cost. Many NGOs find this significantly cheaper than the staff time and audit risk of their current spreadsheet-based approach.' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['NGO ERP', 'Non-Profit', 'Business Central', 'Lebanon', 'Donor Reporting', 'Fund Accounting'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </IndustriesLayout>
  )
}
