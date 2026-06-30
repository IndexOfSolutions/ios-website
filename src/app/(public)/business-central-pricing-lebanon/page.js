import React from 'react'
import Link from 'next/link'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Business Central Pricing in Lebanon 2026',
  'description': 'Complete guide to Microsoft Dynamics 365 Business Central pricing in Lebanon — licence costs, implementation fees, and total cost of ownership explained.',
  'url': `${siteUrl}/business-central-pricing-lebanon`,
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
}

export const metadata = {
  title: 'Business Central Pricing in Lebanon 2026 | Cost Guide | Index of Solutions',
  description:
    'How much does Microsoft Dynamics 365 Business Central cost in Lebanon? Complete 2026 guide covering licence fees, implementation costs, customisation, training, and what affects your total investment.',
  keywords: [
    'Business Central cost Lebanon',
    'Business Central pricing Lebanon',
    'ERP implementation cost Lebanon',
    'Dynamics 365 Business Central price',
    'Business Central licence fee',
    'ERP cost Lebanon 2026',
    'Business Central implementation cost',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/business-central-pricing-lebanon` },
  openGraph: {
    url: `${siteUrl}/business-central-pricing-lebanon`,
    title: 'Business Central Pricing in Lebanon 2026 | Cost Guide',
    description: 'Licence fees, implementation costs, and total investment — the complete Business Central pricing guide for Lebanese businesses.',
    type: 'article',
    images: [{ url: `${siteUrl}/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`, alt: 'Business Central Pricing Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Central Pricing in Lebanon 2026',
    description: 'Licence fees, implementation costs, and total investment guide for Lebanese businesses.',
  },
}

const licenceTiers = [
  {
    name: 'Essentials',
    price: '$80',
    period: 'user / month',
    description: 'Full access to Finance, Sales, Purchasing, Inventory, Warehouse, and Project Management modules.',
    best: 'Best for most SMBs — covers the full ERP core without production manufacturing.',
  },
  {
    name: 'Premium',
    price: '$110',
    period: 'user / month',
    description: 'Everything in Essentials plus Manufacturing (Production Orders, BOMs, MRP) and Service Management.',
    best: 'Best for manufacturers, engineering firms, or companies with complex service operations.',
  },
  {
    name: 'Team Member',
    price: '$8',
    period: 'user / month',
    description: 'Read-only access plus limited write actions: approve documents, submit timesheets, update personal HR data.',
    best: 'Best for staff who need to view reports or approve requests without needing full ERP access.',
  },
]

const costFactors = [
  { label: 'Number of full users', impact: 'High', note: 'Every Essentials or Premium user adds $80–$110/month to your annual licence cost.' },
  { label: 'Licence tier (Essentials vs Premium)', impact: 'High', note: 'Premium adds $30/user/month over Essentials — significant at scale.' },
  { label: 'Implementation complexity', impact: 'High', note: 'A simple single-company implementation costs less than a multi-site, multi-currency rollout.' },
  { label: 'Data migration volume', impact: 'Medium', note: 'Migrating 5 years of transactions from a legacy system takes more time than starting fresh.' },
  { label: 'Customisations required', impact: 'Medium', note: 'Standard BC handles 80–90% of business processes. The remaining 10–20% may need tailored extensions.' },
  { label: 'Number of departments needing training', impact: 'Medium', note: 'Each department requires role-specific training sessions — more departments means more training time.' },
  { label: 'LS Central for retail', impact: 'Variable', note: 'If you need POS integration and unified retail management, LS Central adds to the total investment.' },
]

export default function BusinessCentralPricingLebanon() {
  return (
    <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className='relative container flex flex-col gap-16 max-w-[1366px] mx-auto w-full'>

        {/* Header */}
        <div className='flex flex-col gap-1 items-center text-center justify-center'>
          <div className='flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl'>
            <div className='hidden xl:block glow-line-left w-72'></div>
            <h1>Business Central Pricing in Lebanon</h1>
            <div className='hidden xl:block glow-line-right w-72'></div>
          </div>
          <div className='w-full xl:hidden glow-line'></div>
          <p className='font-[interItalic] text-fg mt-2'>Complete 2026 cost guide for Lebanese businesses</p>
        </div>

        <div className='flex flex-col gap-16 w-full max-w-[900] mx-auto text-white'>

          <p className='font-[inter] text-lg'>
            One of the first questions any Lebanese business asks when evaluating Business Central is: <strong>how much will this actually cost?</strong> The answer depends on several variables — licence tier, number of users, complexity of your operations, and the scope of implementation services. This guide breaks it all down so you can walk into any conversation with realistic numbers.
          </p>

          {/* Licence Costs */}
          <div className='flex flex-col gap-8'>
            <h2 className='text-4xl font-[newake]'>1. Licence Costs</h2>
            <p className='font-[inter]'>
              Business Central is priced per user per month, billed annually through Microsoft. There are three licence tiers:
            </p>
            <div className='flex flex-col gap-4'>
              {licenceTiers.map((tier) => (
                <div key={tier.name} className='relative rounded-lg border-2 border-border-color bg-mainbg p-6 flex flex-col md:flex-row md:items-start gap-4'>
                  <div className='min-w-[160]'>
                    <p className='font-[newake] text-primary text-3xl'>{tier.name}</p>
                    <p className='font-[inter] text-fg text-2xl font-bold'>{tier.price} <span className='text-sm font-normal opacity-60'>{tier.period}</span></p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-[inter] text-fg'>{tier.description}</p>
                    <p className='font-[inter] text-primary text-sm'>{tier.best}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='relative rounded-lg border-2 border-primary bg-mainbg p-6'>
              <p className='font-[inter] text-fg'><strong>Example:</strong> A company with 8 Essentials users and 4 Team Members pays <strong>$8,064/year</strong> in licence fees — ($80 × 8 + $8 × 4) × 12.</p>
            </div>
          </div>

          {/* Implementation Costs */}
          <div className='flex flex-col gap-8'>
            <h2 className='text-4xl font-[newake]'>2. Implementation Costs</h2>
            <p className='font-[inter]'>
              Implementation is a one-time investment that covers discovery, configuration, data migration, testing, and go-live support. The cost depends on your complexity:
            </p>
            <div className='flex flex-col gap-4'>
              {[
                { tier: 'Basic', range: '$4,000 – $6,000', desc: 'Single company, straightforward processes, limited data migration, small team. Typical for small trading or services businesses.' },
                { tier: 'Standard', range: '$7,500 – $12,000', desc: 'Multi-user, moderate customisation, data migration from a previous system, multiple departments. Most common for growing Lebanese SMBs.' },
                { tier: 'Complex', range: '$17,500 – $26,000', desc: 'Multi-company, multi-site, significant customisation, large data migration, or LS Central for retail. Typical for mid-market businesses.' },
              ].map(({ tier, range, desc }) => (
                <div key={tier} className='relative rounded-lg border-2 border-border-color bg-mainbg p-6 flex flex-col md:flex-row md:items-start gap-4'>
                  <div className='min-w-[160]'>
                    <p className='font-[newake] text-fg text-2xl'>{tier}</p>
                    <p className='font-[inter] text-primary font-bold'>{range}</p>
                  </div>
                  <p className='font-[inter] text-fg'>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Costs */}
          <div className='flex flex-col gap-6'>
            <h2 className='text-4xl font-[newake]'>3. Other Services</h2>
            <p className='font-[inter]'>Beyond the core licence and implementation, these services may apply depending on your situation:</p>
            <div className='flex flex-col gap-3'>
              {[
                { item: 'Customisation', range: 'From $1,500 (minor) to $16,000 (major)' },
                { item: 'Data Migration', range: 'From $1,000 (limited) to $4,500 (full historical data)' },
                { item: 'Training', range: '$400 – $600 per department' },
                { item: 'LS Central Setup (retail)', range: '$5,000 – $45,000 depending on store count' },
                { item: 'Ongoing Support', range: 'Flexible SLA-based plans available' },
              ].map(({ item, range }) => (
                <div key={item} className='flex justify-between items-center border-b border-border-color pb-3'>
                  <span className='font-[inter] text-fg'>{item}</span>
                  <span className='font-[inter] text-primary font-medium'>{range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Affects Your Cost */}
          <div className='flex flex-col gap-6'>
            <h2 className='text-4xl font-[newake]'>4. What Affects Your Total Cost</h2>
            <div className='flex flex-col gap-3'>
              {costFactors.map(({ label, impact, note }) => (
                <div key={label} className='relative rounded-lg border border-border-color bg-mainbg p-4 flex flex-col gap-1'>
                  <div className='flex justify-between items-center'>
                    <span className='font-[inter] font-bold text-fg'>{label}</span>
                    <span className={`font-[inter] text-sm px-2 py-0.5 rounded-full ${impact === 'High' ? 'bg-primary/20 text-primary' : 'bg-secondary text-fg/60'}`}>{impact} impact</span>
                  </div>
                  <p className='font-[inter] text-fg text-sm opacity-80'>{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA to Estimator */}
          <div className='relative rounded-lg border-2 border-primary bg-mainbg p-8 flex flex-col gap-4 items-center text-center'>
            <h2 className='font-[newake] text-fg text-3xl md:text-4xl'>Get Your Personalised Estimate in Minutes</h2>
            <p className='font-[inter] text-fg max-w-[600]'>
              Instead of guessing, use our AI-powered cost estimator. Answer a few questions about your business and get an instant, itemised breakdown — licence fees, implementation, customisation, and training — tailored to your specific situation.
            </p>
            <Link
              href='/price-estimator'
              className='px-8 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border-primary-button-border shadow-primary-button-shadow font-[inter] font-bold text-fg'
            >
              Try the Free Estimator →
            </Link>
            <p className='font-[inter] text-fg text-sm opacity-60'>No registration. No sales call. Instant results.</p>
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-3'>
            {['Business Central', 'Pricing', 'Lebanon', 'ERP Cost', 'Implementation', '2026'].map((tag) => (
              <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
