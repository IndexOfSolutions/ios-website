import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Microsoft Power Apps Development in Lebanon',
  'description': 'Build custom business applications without heavy coding using Microsoft Power Apps — fully integrated with your Business Central data. Deployed by certified consultants in Beirut.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/services/power-apps-lebanon`,
}

export const metadata = {
  title: 'Microsoft Power Apps Development in Lebanon | Index of Solutions',
  description:
    'Build custom business applications without heavy coding using Microsoft Power Apps — connected directly to your Business Central, SharePoint, and Microsoft 365 data. Certified consultants in Beirut, Lebanon.',
  keywords: [
    'Power Apps Lebanon',
    'Microsoft Power Apps Beirut',
    'low-code development Lebanon',
    'Power Apps Business Central',
    'custom app development Lebanon',
    'Power Platform Lebanon',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/services/power-apps-lebanon` },
  openGraph: {
    title: 'Microsoft Power Apps Development in Lebanon | Index of Solutions',
    description: 'Build custom business apps connected to Business Central — without heavy coding. Certified Power Apps consultants in Beirut.',
    images: [{ url: `${siteUrl}/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`, alt: 'Power Apps Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Power Apps Development in Lebanon',
    description: 'Custom business apps connected to Business Central — without heavy coding. Certified consultants in Beirut.',
  },
}

export default function PowerAppsLebanon() {
  return (
    <ServicesLayout
      jsonLd={serviceJsonLd}
      title={'Microsoft Power Apps for Lebanese Businesses'}
    >
      <p className='font-[inter] text-lg'>
        Not every business process fits neatly into a standard ERP screen. Power Apps lets you build exactly the tool your team needs — a mobile approval app, a field inspection form, a customer portal, a delivery dashboard — connected directly to your Business Central data, without the cost or timeline of custom software development.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What You Can Build with Power Apps</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📱</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Mobile Field Apps</h3>
            <p className='text-fg font-[inter]'>
              Give your field staff a mobile app to log deliveries, capture signatures, submit expense reports, or update job progress — all syncing back to Business Central in real time.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>✅</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Approval Workflows</h3>
            <p className='text-fg font-[inter]'>
              Replace email chains with structured approval apps for purchase orders, leave requests, expense claims, or quality checks — with full audit trails and notifications.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🏪</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Customer & Vendor Portals</h3>
            <p className='text-fg font-[inter]'>
              Build external-facing portals where customers can check order status, download invoices, or submit requests — pulling live data from Business Central without exposing your ERP.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔍</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Inspection & Audit Forms</h3>
            <p className='text-fg font-[inter]'>
              Replace paper-based inspection checklists with digital forms that capture photos, GPS location, timestamps, and signatures — with automatic reporting to management.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📋</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Inventory & Warehouse Apps</h3>
            <p className='text-fg font-[inter]'>
              Let warehouse staff scan barcodes, perform stock counts, and process goods receipts from a tablet — reducing errors and eliminating double data entry into Business Central.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📊</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Management Dashboards</h3>
            <p className='text-fg font-[inter]'>
              Build executive dashboards that pull KPIs directly from Business Central and present them in a clean, mobile-friendly view — no report running, no exports required.
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Power Apps + Business Central: Better Together</h2>
        <p className='font-[inter]'>
          Power Apps connects natively to Business Central through Microsoft's API layer. Data entered in a Power App is immediately available in Business Central — and vice versa. There is no synchronisation delay, no middleware, and no additional integration cost. It is the same Microsoft ecosystem, extended.
        </p>
        <p className='font-[inter]'>
          Combine Power Apps with Power Automate and you can trigger automated workflows from within your custom app — sending alerts, creating records in Business Central, emailing approvers, or updating SharePoint — all without writing backend code.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Why Lebanese Businesses Are Adopting Power Apps</h2>
        <p className='font-[inter]'>
          Lebanese businesses often have highly customised, manual processes that have evolved over years — delivery workflows unique to the local market, approval chains adapted to family-owned governance structures, Arabic-language forms that don't fit standard ERP screens. Power Apps lets you digitise these processes exactly as they are, without forcing your team to adapt to a rigid software model.
        </p>
        <p className='font-[inter]'>
          The alternative — full custom software development — is expensive, slow, and leaves you dependent on the developer for every future change. Power Apps can be maintained and updated internally by a business analyst or a trained power user, with no developer required for most changes.
        </p>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Common Questions</h2>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Do we need a separate licence for Power Apps?' />
          <AnswerBubbleCard answer='Power Apps for internal use is included in most Microsoft 365 business plans. If you need apps for external users (customers, vendors) or premium connectors, a per-user or per-app Power Apps licence is required. We will review your current licensing position and advise you before any project starts.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='How long does it take to build a Power App?' />
          <AnswerBubbleCard answer='Simple apps — approval forms, mobile data entry tools, dashboards — typically take 2–4 weeks from requirements to go-live. More complex apps with multiple integrations or offline capability take 4–8 weeks. Because Power Apps uses visual builders rather than full code, build times are significantly faster than traditional custom development.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Can Power Apps work offline?' />
          <AnswerBubbleCard answer='Yes. Power Apps supports offline mode for scenarios where internet connectivity is unreliable — field teams, warehouses, or remote locations. The app caches data locally and syncs automatically when connectivity is restored.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Can our team maintain the app after you build it?' />
          <AnswerBubbleCard answer='That is one of Power Apps' strongest advantages. After delivery, we provide training so your internal team can make minor changes — adding fields, adjusting layouts, updating lists — without needing a developer. We remain available for more complex changes or new builds.' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['Power Apps', 'Power Platform', 'Business Central', 'Low-Code', 'Lebanon', 'Microsoft 365'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </ServicesLayout>
  )
}
