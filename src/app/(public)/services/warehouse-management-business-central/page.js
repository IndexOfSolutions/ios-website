import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Warehouse Management with Business Central in Lebanon',
  'description': 'Optimise your warehouse operations with Microsoft Dynamics 365 Business Central: bin management, directed put-away and pick, barcode scanning, real-time inventory visibility, and full traceability.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/services/warehouse-management-business-central`,
}

export const metadata = {
  title: 'Warehouse Management with Business Central | WMS Lebanon | Index of Solutions',
  description:
    'Optimise your warehouse with Microsoft Dynamics 365 Business Central: bin management, directed pick and put-away, barcode scanning, real-time stock visibility, and lot/serial traceability — all within your ERP.',
  keywords: [
    'warehouse management Business Central',
    'WMS Lebanon',
    'Business Central warehouse module',
    'warehouse management ERP Lebanon',
    'bin management Business Central',
    'barcode scanning ERP Lebanon',
    'inventory management Lebanon',
    'directed pick put-away Business Central',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/services/warehouse-management-business-central` },
  openGraph: {
    url: `${siteUrl}/services/warehouse-management-business-central`,
    title: 'Warehouse Management with Business Central | WMS Lebanon',
    description: 'Bin management, directed pick and put-away, barcode scanning, and real-time inventory — WMS built into your Business Central ERP.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/business-central-for-distribution.webp`, alt: 'Warehouse Management Business Central Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse Management with Business Central | Lebanon',
    description: 'Bin management, barcode scanning, and real-time inventory — WMS built into Business Central.',
  },
}

export default function WarehouseManagementBusinessCentral() {
  return (
    <ServicesLayout
      jsonLd={serviceJsonLd}
      title={'Warehouse Management with Business Central'}
      imageURL={'business-central-for-distribution'}
      imageAlt={'Warehouse Management Business Central Lebanon'}
    >
      <p className='font-[inter] text-lg'>
        Most warehouse problems are actually data problems. Stock goes missing not because it physically disappears, but because nobody knows exactly where it is. Business Central's warehouse management module gives you bin-level control of your entire warehouse — from the moment goods arrive to the moment they leave — without adding a separate WMS system to your technology stack.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Warehouse Features in Business Central</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📍</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Bin & Location Management</h3>
            <p className='text-fg font-[inter]'>
              Define your warehouse down to zone, aisle, rack, and bin level. Every item has a known location — so staff find stock instantly and managers see exactly where inventory sits at any moment.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📲</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Barcode & Mobile Scanning</h3>
            <p className='text-fg font-[inter]'>
              Warehouse staff use handheld scanners or mobile devices to receive goods, confirm put-aways, pick orders, and perform stock counts — eliminating paper-based processes and data entry errors.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🗂️</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Directed Put-Away & Pick</h3>
            <p className='text-fg font-[inter]'>
              Business Central directs staff to the optimal bin for put-away based on item rules, capacity, and zone logic. Picks are optimised to reduce travel time — cutting the minutes spent per order in half.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔢</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Lot & Serial Traceability</h3>
            <p className='text-fg font-[inter]'>
              Track every item by lot number or serial number from goods receipt to customer delivery. Full forward and backward traceability — essential for pharma, food, electronics, and any business subject to product recalls.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔄</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Cycle Counting</h3>
            <p className='text-fg font-[inter]'>
              Replace disruptive annual stocktakes with rolling cycle counts. Business Central schedules counts by zone or item category — staff count continuously throughout the year so inventory accuracy stays above 99% without shutting down operations.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🚚</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Cross-Docking</h3>
            <p className='text-fg font-[inter]'>
              Move goods directly from incoming shipments to outgoing delivery without putting them away. Business Central supports cross-docking for high-velocity items, reducing handling time and warehouse footprint.
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>WMS Built Into Your ERP — No Integration Required</h2>
        <p className='font-[inter]'>
          The biggest problem with standalone WMS systems is the integration layer between the warehouse and the ERP. Every goods receipt, pick, or transfer has to sync between two databases — creating delays, errors, and a permanent maintenance burden.
        </p>
        <p className='font-[inter]'>
          Business Central's warehouse module runs in the same database as your financials, purchasing, and sales. A goods receipt in the warehouse is immediately visible to purchasing. A picked order updates inventory and triggers invoicing automatically. There is no sync, no interface, and no data gap between warehouse and back office.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Warehouse Complexity Levels</h2>
        <p className='font-[inter]'>Business Central's warehouse functionality scales with your operation. You choose the level that matches your complexity:</p>
        <div className='flex flex-col gap-3 mt-2'>
          {[
            { level: 'Basic Warehousing', desc: 'Single location, no bins, inventory posted directly. Right for small warehouses with simple in/out flows.' },
            { level: 'Bin Management', desc: 'Multi-location with bin tracking. Staff see exact bin locations; no directed instructions yet. Good for medium warehouses.' },
            { level: 'Advanced Warehousing', desc: 'Full directed put-away and pick, zone management, mobile scanning, and cross-docking. For high-volume distribution operations.' },
          ].map(({ level, desc }) => (
            <div key={level} className='flex gap-4 items-start border-l-2 border-primary pl-4'>
              <div>
                <p className='font-[inter] font-bold text-fg'>{level}</p>
                <p className='font-[inter] text-fg/80 text-sm'>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Common Questions</h2>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Do I need a separate WMS system if I use Business Central?' />
          <AnswerBubbleCard answer="For most Lebanese SMBs and mid-market distributors, Business Central's built-in warehouse module covers everything needed — bin management, directed pick and put-away, barcode scanning, lot tracking, and cycle counting. A separate WMS is typically only needed for very large, highly automated warehouses with conveyor systems or robotic picking. We assess your operation during discovery and advise honestly." />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='What hardware do warehouse staff need?' />
          <AnswerBubbleCard answer="Business Central's warehouse module works with standard Android or Windows-based handheld scanners (like Zebra or Honeywell devices), tablets, or even smartphones. We recommend devices based on your warehouse environment — cold storage, outdoor use, or high-drop risk all have different hardware requirements." />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Can Business Central handle multiple warehouses in different locations?' />
          <AnswerBubbleCard answer='Yes. Business Central supports unlimited warehouse locations, each with their own bin structure, zones, and policies. Inter-warehouse transfers are managed through transfer orders, with full inventory tracking across all locations in real time.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='We have 50,000+ SKUs. Can Business Central handle that scale?' />
          <AnswerBubbleCard answer='Yes. Business Central is used by distribution companies with hundreds of thousands of SKUs. The item catalogue has no practical limit, and warehouse operations scale with database capacity rather than any system-imposed ceiling.' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['Warehouse Management', 'Business Central', 'WMS', 'Lebanon', 'Distribution', 'Barcode Scanning'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </ServicesLayout>
  )
}
