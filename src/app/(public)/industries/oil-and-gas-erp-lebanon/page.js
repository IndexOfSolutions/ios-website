import IndustriesLayout from '@/components/layouts/Industries'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import Link from 'next/link'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()
const pageUrl = `${siteUrl}/industries/oil-and-gas-erp-lebanon`

const features = [
  {
    icon: '🛢️',
    title: 'Bulk Fuel & Tank Inventory',
    body: 'Track gasoline, diesel, fuel oil, and lubricants by tank, depot, and station in litres, tonnes, or any unit you trade in. Reconcile book stock against tank readings and flag losses before they grow.',
  },
  {
    icon: '🔥',
    title: 'LPG Cylinder Tracking',
    body: 'Manage filled and empty cylinders as returnable assets, including deposits, refills, exchanges, and cylinders held by customers or dealers. You always know how many cylinders are out and who has them.',
  },
  {
    icon: '🚚',
    title: 'Distribution & Fleet Costs',
    body: 'Plan deliveries to stations, industrial clients, and generator operators. Charge fuel, maintenance, and driver costs to each truck and route, and see the real cost of every delivered litre.',
  },
  {
    icon: '⛽',
    title: 'Station Network Management',
    body: 'Run company-owned and dealer-operated stations from one back office: daily sales, meter readings, cash reconciliation, and shop sales. See the margin of each station without waiting for month-end.',
  },
  {
    icon: '📈',
    title: 'Price Volatility & Margins',
    body: 'Update selling prices quickly when official price tables or import costs change, revalue stock correctly, and measure margin per product, customer, and site even when prices move weekly.',
  },
  {
    icon: '🛡️',
    title: 'Compliance, HSE & Audit Trail',
    body: 'Keep a full audit trail of every receipt, transfer, and sale. Store certificates, inspection records, and safety documents with the relevant tank, truck, or site, ready for regulators and auditors.',
  },
]

const businesses = [
  'Petroleum product importers and storage terminal operators',
  'Fuel distributors supplying stations, industry, and private generators',
  'Gas station networks, both company-owned and dealer-operated',
  'LPG bottling plants and cylinder distribution companies',
  'Lubricant and petrochemical traders',
  'Oilfield service and energy contractors working on project-based contracts',
]

const faqs = [
  {
    question: 'Can Business Central manage fuel in litres, tonnes, and barrels at the same time?',
    answer: 'Yes. Business Central supports several units of measure per product, with conversion factors between them. You can buy by tonne or metric ton, store in litres, and sell by litre or barrel. For temperature and density-based conversions we configure the calculation to match the method you report to customs and regulators.',
  },
  {
    question: 'How do you handle LPG cylinder deposits and returns?',
    answer: 'Cylinders are tracked as returnable items with deposit amounts. When a customer exchanges an empty cylinder for a full one, Business Central records the gas sale and the cylinder movement separately. You keep an accurate count of cylinders held by each dealer or customer, and the deposit liability on your balance sheet.',
  },
  {
    question: 'Fuel prices change every week. Can the system keep up?',
    answer: 'Yes. Price lists can be updated centrally in minutes and take effect from a set date and time, at every station and for every customer group. Inventory is valued on the costing method you choose, so margins reflect the actual cost of the fuel you sold, not just the latest import price.',
  },
  {
    question: 'How long does an implementation take for a fuel or gas distributor?',
    answer: 'A distributor with one depot and a delivery fleet typically goes live in 10 to 14 weeks. Station networks and multi-depot operations with cylinder tracking usually take 14 to 24 weeks. We run parallel stock reconciliation before go-live so no litre is unaccounted for during the cutover.',
  },
]

const relatedServices = [
  { href: '/industries/distribution-erp', label: 'Business Central for Distribution' },
  { href: '/services/warehouse-management-business-central', label: 'Depot & Warehouse Management in Business Central' },
  { href: '/services/power-apps-lebanon', label: 'Power Apps for Field Deliveries & Tank Readings' },
  { href: '/services/power-bi-and-analytics', label: 'Power BI for Volume & Margin Analysis' },
]

const industryJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      'name': 'Business Central ERP for Oil, Gas and Petroleum Companies in Lebanon',
      'serviceType': 'Oil and gas ERP implementation',
      'description': 'Microsoft Dynamics 365 Business Central for petroleum and gas companies in Lebanon: bulk fuel and tank inventory, LPG cylinder tracking, distribution fleet costing, station network management, price volatility, and compliance.',
      'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
      'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
      'url': pageUrl,
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        'name': question,
        'acceptedAnswer': { '@type': 'Answer', 'text': answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${siteUrl}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Industries' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Oil & Gas ERP', 'item': pageUrl },
      ],
    },
  ],
}

export const metadata = {
  title: 'Oil, Gas & Petroleum ERP in Lebanon',
  description:
    'Business Central ERP for petroleum and gas companies in Lebanon: fuel and tank inventory, LPG cylinder tracking, fleet costing, station networks and margins.',
  keywords: [
    'oil and gas ERP Lebanon',
    'petroleum ERP Lebanon',
    'fuel distribution ERP',
    'LPG cylinder tracking software',
    'gas station management software Lebanon',
    'Business Central for oil and gas',
    'fuel inventory management system',
    'energy company ERP Beirut',
  ].join(', '),
  alternates: { canonical: pageUrl },
  openGraph: {
    url: pageUrl,
    title: 'Oil, Gas & Petroleum ERP in Lebanon | Business Central',
    description: 'Fuel and tank inventory, LPG cylinder tracking, fleet costing and station network management for Lebanese petroleum and gas companies.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/business-central-for-distribution.webp`, alt: 'Business Central for Oil and Gas Companies in Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oil, Gas & Petroleum ERP in Lebanon | Business Central',
    description: 'Fuel inventory, LPG cylinders, fleet costing and station networks for petroleum and gas companies in Lebanon.',
  },
}

export default function OilAndGasERPLebanon() {
  return (
    <IndustriesLayout
      jsonLd={industryJsonLd}
      title={'Business Central ERP for Petroleum & Gas Companies in Lebanon'}
      imageURL={'business-central-for-distribution'}
      imageAlt={'Business Central ERP for Oil, Gas and Petroleum Companies in Lebanon'}
    >
      <p className='font-[inter] text-lg'>
        Petroleum and gas companies in Lebanon keep the country running: they import and store fuel, supply stations and the private generators that power homes and factories, and deliver LPG to every region. Margins are thin, prices move often, and a few percent of unexplained stock loss can wipe out a month&apos;s profit. Microsoft Dynamics 365 Business Central gives fuel and gas operators one system to control stock, deliveries, pricing, and finance, from the terminal to the final customer.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What Business Central Does for Oil & Gas Companies</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>
          {features.map(({ icon, title, body }) => (
            <div key={title} className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
              <span className='text-3xl' aria-hidden='true'>{icon}</span>
              <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>{title}</h3>
              <p className='text-fg font-[inter]'>{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>The Energy Challenge in Lebanon</h2>
        <p className='font-[inter]'>
          Lebanon&apos;s fuel and gas sector works under conditions most ERP vendors never plan for: frequent official price changes, imports paid in USD, dual-currency sales, high demand from private generators, and close regulatory scrutiny. Many distributors still reconcile tanks, trucks, and cash in spreadsheets, so losses and margin leaks show up weeks after they happen.
        </p>
        <p className='font-[inter]'>
          Business Central records every litre and every cylinder as it moves, from vessel discharge and depot storage to truck loading, station delivery, and customer invoice. Operations, finance, and management work from the same live figures, and auditors get a complete trail of every transaction.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Petroleum & Gas Businesses We Work With</h2>
        <ul className='font-[inter] flex flex-col gap-3 list-none'>
          {businesses.map((item) => (
            <li key={item} className='flex items-start gap-3'>
              <span className='text-primary mt-1'>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Oil & Gas ERP: Common Questions</h2>
        {faqs.map(({ question, answer }) => (
          <div key={question} className='flex flex-col gap-4'>
            <QuestionBubbleCard question={question} />
            <AnswerBubbleCard answer={answer} />
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Related Services</h2>
        <ul className='font-[inter] flex flex-col gap-3 list-none'>
          {relatedServices.map(({ href, label }) => (
            <li key={href} className='flex items-start gap-3'>
              <span className='text-primary mt-1'>→</span>
              <Link href={href} className='hover:text-primary underline underline-offset-4'>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['Oil & Gas ERP', 'Business Central', 'Petroleum', 'Fuel Distribution', 'LPG', 'Lebanon'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </IndustriesLayout>
  )
}
