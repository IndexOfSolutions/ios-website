import IndustriesLayout from '@/components/layouts/Industries'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const industryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Business Central ERP for Construction in Lebanon',
  'description': 'Microsoft Dynamics 365 Business Central for construction companies in Lebanon: project costing, subcontractor management, procurement, equipment tracking, and multi-project financial control.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/industries/construction-erp-lebanon`,
}

export const metadata = {
  title: 'Construction ERP Lebanon | Business Central for Construction Companies',
  description:
    'Microsoft Dynamics 365 Business Central for construction companies in Lebanon: project cost control, subcontractor management, procurement, equipment tracking, and real-time financial visibility across all active projects.',
  keywords: [
    'construction ERP Lebanon',
    'Business Central for construction',
    'project costing ERP Lebanon',
    'construction management software Lebanon',
    'subcontractor management ERP',
    'construction company ERP Beirut',
    'project-based ERP Lebanon',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/industries/construction-erp-lebanon` },
  openGraph: {
    url: `${siteUrl}/industries/construction-erp-lebanon`,
    title: 'Construction ERP Lebanon | Business Central for Construction',
    description: 'Project costing, subcontractor management, procurement, and real-time financial control for Lebanese construction companies with Business Central.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/business-central-for-distribution.webp`, alt: 'Business Central for Construction Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction ERP Lebanon | Business Central',
    description: 'Project costing, subcontractor management, and financial control for Lebanese construction companies.',
  },
}

export default function ConstructionERPLebanon() {
  return (
    <IndustriesLayout
      jsonLd={industryJsonLd}
      title={'Business Central for Construction Companies in Lebanon'}
      imageURL={'business-central-for-distribution'}
      imageAlt={'Business Central for Construction in Lebanon'}
    >
      <p className='font-[inter] text-lg'>
        Construction companies in Lebanon manage a level of operational complexity that most ERPs underestimate: projects running in parallel across different sites, subcontractors paid in multiple currencies, material costs that fluctuate weekly, and clients demanding detailed cost breakdowns. Business Central gives construction firms a single system to run all of this — with real-time visibility into every project's financial position.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What Business Central Does for Construction</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🏗️</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Project Cost Control</h3>
            <p className='text-fg font-[inter]'>
              Create detailed project budgets by phase, trade, or cost category. Track actual spend against budget in real time — so you see a cost overrun when it starts, not when the project closes.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>👷</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Subcontractor Management</h3>
            <p className='text-fg font-[inter]'>
              Manage subcontractor contracts, track progress billing, set retention amounts, and control payment releases — all linked to project budgets so every payment is accounted for.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔩</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Materials Procurement</h3>
            <p className='text-fg font-[inter]'>
              Generate purchase orders linked to specific projects, track deliveries to site, and compare supplier quotes — preventing the over-ordering that ties up capital and the under-ordering that delays progress.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🚜</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Equipment & Asset Tracking</h3>
            <p className='text-fg font-[inter]'>
              Track equipment allocation across projects, manage maintenance schedules, and capture equipment costs against the project they serve — so your true project profitability includes every machine hour.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📄</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Progress Billing & Invoicing</h3>
            <p className='text-fg font-[inter]'>
              Issue progress invoices tied to project milestones, track receivables by project and client, and manage retention receivables — giving finance a clear view of what has been earned vs. collected.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>💱</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Multi-Currency Projects</h3>
            <p className='text-fg font-[inter]'>
              Manage contracts billed in USD, material purchases in LBP, and subcontractor payments in mixed currencies — with automatic exchange rate handling and consolidated project reporting.
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>The Construction Challenge in Lebanon</h2>
        <p className='font-[inter]'>
          Lebanon's construction sector faces challenges that amplify the cost of poor financial control: currency instability means material costs can change significantly between quote and procurement; subcontractors often operate informally, making contract management critical; and clients increasingly require detailed cost reporting that disconnected spreadsheets simply cannot produce reliably.
        </p>
        <p className='font-[inter]'>
          Business Central centralises all of this into one auditable system. Every purchase order, subcontractor payment, and material receipt is logged against the right project — giving owners and finance directors a real-time view of project health without waiting for month-end reports.
        </p>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Common Questions</h2>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Does Business Central have native project management features?' />
          <AnswerBubbleCard answer='Yes. Business Central includes a Jobs module specifically for project-based businesses. It handles project budgets, resource planning, time and material tracking, and project invoicing natively. For construction-specific workflows like subcontractor retention or site-level procurement, we configure and extend these modules to match your operations.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='We run 10–15 projects in parallel. Can Business Central handle that?' />
          <AnswerBubbleCard answer='Yes, with no limitation on the number of concurrent projects. Each project has its own budget, cost structure, and reporting view — and you can roll them all up into consolidated company-level financial statements. The more projects you run, the more valuable the real-time visibility becomes.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='How do we track costs that are shared across multiple projects?' />
          <AnswerBubbleCard answer='Business Central handles shared costs — head office overhead, shared equipment, management salaries — through allocation rules that distribute them proportionally across active projects. This gives you a true fully-loaded project cost, not just direct site costs.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Can our site supervisors use Business Central from the field?' />
          <AnswerBubbleCard answer='Business Central has a fully functional web interface accessible from any device. For structured mobile workflows — material receipts, daily logs, inspection forms — we often complement Business Central with Power Apps, building simple mobile tools that sync data back to the ERP in real time.' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['Construction ERP', 'Business Central', 'Project Costing', 'Lebanon', 'Subcontractor Management', 'Procurement'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </IndustriesLayout>
  )
}
