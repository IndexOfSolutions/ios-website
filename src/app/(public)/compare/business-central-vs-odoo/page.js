import React from 'react'
import Link from 'next/link'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Business Central vs Odoo — Which ERP is Right for Your Business?',
  'description': 'Honest comparison of Microsoft Dynamics 365 Business Central and Odoo for Lebanese businesses: total cost, support, scalability, and Microsoft ecosystem integration.',
  'url': `${siteUrl}/compare/business-central-vs-odoo`,
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
}

export const metadata = {
  title: 'Business Central vs Odoo: Which ERP Should You Choose? | Index of Solutions',
  description:
    'Microsoft Dynamics 365 Business Central vs Odoo — a complete comparison for Lebanese and regional businesses. Compare real total cost, Microsoft integration, scalability, support, and long-term fit.',
  keywords: [
    'Business Central vs Odoo',
    'Dynamics 365 vs Odoo',
    'Odoo vs Business Central Lebanon',
    'ERP comparison Lebanon',
    'Odoo alternative Lebanon',
    'Microsoft ERP vs Odoo',
    'open source ERP Lebanon',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/compare/business-central-vs-odoo` },
  openGraph: {
    url: `${siteUrl}/compare/business-central-vs-odoo`,
    title: 'Business Central vs Odoo — Which ERP Should You Choose?',
    description: 'Total cost, Microsoft integration, support and scalability compared for Lebanese businesses.',
    type: 'article',
    images: [{ url: `${siteUrl}/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`, alt: 'Business Central vs Odoo — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Central vs Odoo: ERP Comparison for Lebanese Businesses',
    description: 'Total cost, support, and scalability compared — which ERP is right for your business.',
  },
}

const comparisonRows = [
  {
    category: 'Business Model',
    bc: 'Commercial SaaS — Microsoft-backed, enterprise-grade SLAs',
    odoo: 'Open-source core (Odoo Community) + commercial add-ons (Odoo Enterprise)',
  },
  {
    category: 'Licence Cost',
    bc: '$80/user/month (Essentials), $110/user/month (Premium)',
    odoo: 'Community: free. Enterprise: ~$24/user/month but most features require paid modules',
  },
  {
    category: 'True Total Cost',
    bc: 'Transparent: licence + implementation + support. No hidden module fees.',
    odoo: 'Lower headline price, but module licensing, hosting, and customisation costs compound quickly',
  },
  {
    category: 'Implementation Time',
    bc: '6 – 20 weeks for most SMB implementations',
    odoo: '3–9 months — complex module configuration and customisation often extend timelines',
  },
  {
    category: 'Microsoft 365 Integration',
    bc: 'Native — Outlook, Teams, Excel, Power BI, SharePoint all work without connectors',
    odoo: 'Requires third-party connectors or custom development; not native',
  },
  {
    category: 'AI & Automation',
    bc: 'Microsoft Copilot built in — bank reconciliation, order entry, data chat, forecasting',
    odoo: 'Some AI features in development but limited and not yet production-ready at scale',
  },
  {
    category: 'Financial & Accounting Depth',
    bc: 'Deep — designed for complex multi-company, multi-currency, multi-dimensional accounting',
    odoo: 'Adequate for small businesses; multi-company and complex accounting requires significant customisation',
  },
  {
    category: 'Hosting & Infrastructure',
    bc: 'Microsoft Azure — 99.9% uptime SLA, automatic backups, enterprise security',
    odoo: 'Community: self-hosted (you manage). Enterprise: Odoo.sh cloud or self-hosted',
  },
  {
    category: 'Security & Compliance',
    bc: 'SOC 2, ISO 27001, GDPR — enterprise-grade by default',
    odoo: 'Depends on hosting choice; Community on self-hosted requires internal IT to manage security',
  },
  {
    category: 'Customisation Model',
    bc: 'Extensions via AL language; 10,000+ certified apps on Microsoft AppSource',
    odoo: 'Highly customisable via Python — but customisations create upgrade debt and maintenance burden',
  },
  {
    category: 'Upgrade Risk',
    bc: 'Microsoft handles updates; extensions certified for compatibility',
    odoo: 'Customisations often break on major version upgrades; migration is a recurring project cost',
  },
  {
    category: 'Local Support in Lebanon',
    bc: 'Active certified partners with in-country expertise and Arabic-language support',
    odoo: 'Limited certified partners locally; support quality varies significantly',
  },
]

const bcWins = [
  'You want predictable total cost of ownership — no hidden module fees or upgrade surprises',
  'Your team uses Microsoft 365 (Outlook, Teams, Excel) — integration is zero-effort',
  'You need enterprise-grade security and uptime without managing your own servers',
  'You want AI features (Copilot) working today, not on a roadmap',
  'Your accounting is multi-company, multi-currency, or complex by nature',
  'You want a local partner who can support you in Arabic and knows the Lebanese market',
  'You need the system to scale as you grow without re-implementation',
]

const odooWins = [
  'You are a very early-stage startup with minimal budget and simple processes',
  'You have in-house Python developers who can maintain and customise the platform',
  'You only need CRM and simple sales management — not a full ERP',
]

export default function BusinessCentralVsOdoo() {
  return (
    <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className='relative container flex flex-col gap-16 max-w-[1366px] mx-auto w-full'>

        {/* Header */}
        <div className='flex flex-col gap-1 items-center text-center justify-center'>
          <div className='flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl'>
            <div className='hidden xl:block glow-line-left w-72'></div>
            <h1>Business Central vs Odoo</h1>
            <div className='hidden xl:block glow-line-right w-72'></div>
          </div>
          <div className='w-full xl:hidden glow-line'></div>
          <p className='font-[interItalic] text-fg mt-2'>A complete ERP comparison for Lebanese and regional businesses</p>
        </div>

        <div className='flex flex-col gap-16 w-full max-w-[960] mx-auto text-white'>

          <p className='font-[inter] text-lg'>
            Odoo's open-source positioning and low headline price make it attractive for cost-conscious businesses. But <strong>total cost of ownership tells a different story</strong>. This comparison gives you the full picture — licence fees, implementation, hidden module costs, upgrade risk, and long-term support — so you can make an informed decision.
          </p>

          {/* The Hidden Cost Warning */}
          <div className='relative rounded-lg border-2 border-border-color bg-secondary/30 p-6 flex flex-col gap-3'>
            <h3 className='font-[newake] text-fg text-2xl'>The Odoo Pricing Reality</h3>
            <p className='font-[inter] text-fg'>
              Odoo Community is free and open-source, but it lacks most features businesses actually need. Odoo Enterprise starts at ~$24/user/month, but critical modules — Accounting, Manufacturing, HR, Inventory — each add to the cost. Once you add realistic modules for a mid-size business, the per-user cost often matches or exceeds Business Central's $80/user, <em>before</em> factoring in implementation, hosting, and customisation.
            </p>
          </div>

          {/* Comparison Table */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl font-[newake]'>Side-by-Side Comparison</h2>
            <div className='w-full overflow-x-auto'>
              <table className='w-full border-collapse font-[inter]'>
                <thead>
                  <tr>
                    <th className='text-left p-4 border border-border-color bg-secondary text-fg font-bold w-[200]'></th>
                    <th className='text-left p-4 border border-border-color bg-primary/10 text-primary font-bold'>Business Central</th>
                    <th className='text-left p-4 border border-border-color bg-secondary text-fg font-bold'>Odoo</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ category, bc, odoo }, i) => (
                    <tr key={category} className={i % 2 === 0 ? 'bg-mainbg' : 'bg-secondary/30'}>
                      <td className='p-4 border border-border-color text-fg font-bold text-sm'>{category}</td>
                      <td className='p-4 border border-border-color text-fg text-sm'>{bc}</td>
                      <td className='p-4 border border-border-color text-fg/70 text-sm'>{odoo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* When BC Wins */}
          <div className='flex flex-col gap-6'>
            <h2 className='text-4xl font-[newake]'>When Business Central is the Right Choice</h2>
            <ul className='flex flex-col gap-3 list-none font-[inter]'>
              {bcWins.map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <span className='text-primary mt-1 font-bold'>✓</span>
                  <span className='text-fg'>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* When Odoo Might Work */}
          <div className='flex flex-col gap-6'>
            <h2 className='text-4xl font-[newake]'>When Odoo Might Be a Better Fit</h2>
            <ul className='flex flex-col gap-3 list-none font-[inter]'>
              {odooWins.map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <span className='text-fg/40 mt-1'>→</span>
                  <span className='text-fg'>{item}</span>
                </li>
              ))}
            </ul>
            <p className='font-[inter] text-fg/70 text-sm'>
              If you are past the startup stage, have more than 10 users, or depend on Microsoft 365, Business Central almost always delivers a better total value over a 3-year horizon.
            </p>
          </div>

          {/* Upgrade Risk */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl font-[newake]'>The Upgrade Problem Nobody Talks About</h2>
            <p className='font-[inter]'>
              One of Odoo's most significant long-term risks is version upgrades. Odoo releases major versions annually, and customisations built on previous versions often break during upgrades. Every major version migration becomes a mini re-implementation project — costing time and money.
            </p>
            <p className='font-[inter]'>
              Business Central on SaaS (cloud) updates automatically. Microsoft's extension model ensures certified apps and customisations remain compatible across updates. There is no "upgrade project" — the system stays current without business disruption.
            </p>
          </div>

          {/* CTA */}
          <div className='relative rounded-lg border-2 border-primary bg-mainbg p-8 flex flex-col gap-4 items-center text-center'>
            <h2 className='font-[newake] text-fg text-3xl md:text-4xl'>See What Business Central Would Cost Your Business</h2>
            <p className='font-[inter] text-fg max-w-[600]'>
              Our AI estimator gives you an instant, itemised cost breakdown — licence fees, implementation, customisation, and training — based on your specific situation. No registration, no sales call.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/price-estimator'
                className='px-8 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border-primary-button-border shadow-primary-button-shadow font-[inter] font-bold text-fg'
              >
                Try the Free Estimator →
              </Link>
              <Link
                href='/contact'
                className='px-8 py-3 rounded-lg border-2 border-border-color font-[inter] font-bold text-fg hover:border-primary transition-colors'
              >
                Talk to a Consultant
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-3'>
            {['Business Central', 'Odoo', 'ERP Comparison', 'Lebanon', 'Open Source ERP', 'Microsoft Dynamics'].map((tag) => (
              <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
