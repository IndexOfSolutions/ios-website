import React from 'react'
import Link from 'next/link'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Business Central vs SAP — Which ERP is Right for Your Business?',
  'description': 'Honest comparison of Microsoft Dynamics 365 Business Central and SAP for Lebanese and regional SMBs: cost, implementation time, usability, and long-term fit.',
  'url': `${siteUrl}/compare/business-central-vs-sap`,
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
}

export const metadata = {
  title: 'Business Central vs SAP: Which ERP is Right for You? | Index of Solutions',
  description:
    'Microsoft Dynamics 365 Business Central vs SAP — an honest comparison for Lebanese and regional SMBs. Compare cost, implementation time, scalability, usability, and which ERP actually fits growing businesses.',
  keywords: [
    'Business Central vs SAP',
    'Dynamics 365 vs SAP',
    'ERP comparison Lebanon',
    'SAP vs Business Central SMB',
    'Business Central SAP alternative',
    'ERP for SMB Lebanon',
    'Microsoft ERP vs SAP',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/compare/business-central-vs-sap` },
  openGraph: {
    url: `${siteUrl}/compare/business-central-vs-sap`,
    title: 'Business Central vs SAP — Which ERP is Right for You?',
    description: 'Honest ERP comparison: cost, implementation time, usability, and long-term fit for Lebanese SMBs.',
    type: 'article',
    images: [{ url: `${siteUrl}/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`, alt: 'Business Central vs SAP — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Central vs SAP: Which ERP Fits Lebanese Businesses?',
    description: 'Honest cost, usability, and implementation comparison for regional SMBs.',
  },
}

const comparisonRows = [
  {
    category: 'Target Market',
    bc: 'SMBs and mid-market companies (10–500 employees)',
    sap: 'Enterprise and large corporations; SAP Business One targets SMBs but is limited',
  },
  {
    category: 'Licence Cost',
    bc: 'From $80/user/month (Essentials)',
    sap: 'SAP B1 starts at ~$100+/user/month; SAP S/4HANA significantly higher',
  },
  {
    category: 'Implementation Cost',
    bc: '$4,000 – $26,000 depending on scope',
    sap: 'SAP B1: $20,000 – $100,000+; SAP S/4HANA: often $500,000+',
  },
  {
    category: 'Implementation Time',
    bc: '6 – 20 weeks for most SMB implementations',
    sap: 'SAP B1: 3–9 months; SAP S/4HANA: 12–36 months',
  },
  {
    category: 'Microsoft 365 Integration',
    bc: 'Native — embedded in the same ecosystem as Outlook, Teams, Excel, Power BI',
    sap: 'Requires middleware or custom connectors; not native',
  },
  {
    category: 'User Experience',
    bc: 'Modern web interface; same UX as Microsoft 365 products staff already use',
    sap: 'SAP B1 has an older UI; S/4HANA is more modern but complex',
  },
  {
    category: 'AI & Copilot',
    bc: 'Microsoft Copilot built in — chat with your data, automate reconciliation, generate descriptions',
    sap: 'SAP Joule available but requires separate subscription and integration effort',
  },
  {
    category: 'Customisation',
    bc: 'Extensions via AL language; Microsoft AppSource marketplace with 10,000+ apps',
    sap: 'Strong but expensive; customisations often require ABAP developers',
  },
  {
    category: 'Cloud Deployment',
    bc: 'SaaS (cloud) as standard; automatic updates quarterly',
    sap: 'Cloud options available but on-premise heritage; migration to cloud can be complex',
  },
  {
    category: 'Partner Ecosystem in Lebanon',
    bc: 'Active — multiple certified Microsoft partners with local support',
    sap: 'Limited local partner presence; often requires regional (Dubai/KSA) support',
  },
  {
    category: 'Ongoing Maintenance',
    bc: 'Microsoft handles infrastructure, security, and updates on SaaS',
    sap: 'On-premise requires internal IT; cloud shifts burden but cost remains high',
  },
]

const bcWins = [
  'You have 10–300 users and want a full ERP without enterprise complexity',
  'You are already using Microsoft 365 (Outlook, Teams, Excel) daily',
  'You want to go live in weeks, not months',
  'Budget matters — both upfront and ongoing',
  'You want AI features built in today, not on a roadmap',
  'You need a local partner who can support you in Arabic and understands the Lebanese market',
]

const sapWins = [
  'You are a large enterprise (500+ employees) with highly complex, non-standard processes',
  'Your industry has specific SAP certifications required (e.g., certain manufacturing sectors)',
  'You need to integrate with a parent company that already runs SAP at group level',
]

export default function BusinessCentralVsSAP() {
  return (
    <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className='relative container flex flex-col gap-16 max-w-[1366px] mx-auto w-full'>

        {/* Header */}
        <div className='flex flex-col gap-1 items-center text-center justify-center'>
          <div className='flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl'>
            <div className='hidden xl:block glow-line-left w-72'></div>
            <h1>Business Central vs SAP</h1>
            <div className='hidden xl:block glow-line-right w-72'></div>
          </div>
          <div className='w-full xl:hidden glow-line'></div>
          <p className='font-[interItalic] text-fg mt-2'>An honest ERP comparison for Lebanese and regional businesses</p>
        </div>

        <div className='flex flex-col gap-16 w-full max-w-[960] mx-auto text-white'>

          <p className='font-[inter] text-lg'>
            SAP has been the benchmark for enterprise ERP for decades. So when Lebanese businesses evaluate their options, the question often comes up: <strong>should we go with Business Central or SAP?</strong> The honest answer depends entirely on your size, budget, and how much complexity you actually need. This page gives you a direct comparison — no marketing fluff.
          </p>

          {/* Comparison Table */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl font-[newake]'>Side-by-Side Comparison</h2>
            <div className='w-full overflow-x-auto'>
              <table className='w-full border-collapse font-[inter]'>
                <thead>
                  <tr>
                    <th className='text-left p-4 border border-border-color bg-secondary text-fg font-bold w-[200]'></th>
                    <th className='text-left p-4 border border-border-color bg-primary/10 text-primary font-bold'>Business Central</th>
                    <th className='text-left p-4 border border-border-color bg-secondary text-fg font-bold'>SAP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ category, bc, sap }, i) => (
                    <tr key={category} className={i % 2 === 0 ? 'bg-mainbg' : 'bg-secondary/30'}>
                      <td className='p-4 border border-border-color text-fg font-bold text-sm'>{category}</td>
                      <td className='p-4 border border-border-color text-fg text-sm'>{bc}</td>
                      <td className='p-4 border border-border-color text-fg/70 text-sm'>{sap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* When BC Wins */}
          <div className='flex flex-col gap-6'>
            <h2 className='text-4xl font-[newake]'>When Business Central is the Right Choice</h2>
            <p className='font-[inter]'>For the vast majority of Lebanese SMBs and mid-market companies, Business Central is the better fit:</p>
            <ul className='flex flex-col gap-3 list-none font-[inter]'>
              {bcWins.map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <span className='text-primary mt-1 font-bold'>✓</span>
                  <span className='text-fg'>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* When SAP Wins */}
          <div className='flex flex-col gap-6'>
            <h2 className='text-4xl font-[newake]'>When SAP Might Be the Better Fit</h2>
            <p className='font-[inter]'>There are specific scenarios where SAP is genuinely the right answer:</p>
            <ul className='flex flex-col gap-3 list-none font-[inter]'>
              {sapWins.map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <span className='text-fg/40 mt-1'>→</span>
                  <span className='text-fg'>{item}</span>
                </li>
              ))}
            </ul>
            <p className='font-[inter] text-fg/70 text-sm'>
              If none of those three apply to your business, Business Central almost certainly delivers more value at a fraction of the cost.
            </p>
          </div>

          {/* Cost Comparison Callout */}
          <div className='relative rounded-lg border-2 border-border-color bg-mainbg p-6 flex flex-col gap-3'>
            <h3 className='font-[newake] text-fg text-2xl'>The Real Cost Difference</h3>
            <p className='font-[inter] text-fg'>
              A 20-user Business Central Standard implementation typically costs <strong className='text-primary'>$15,000 – $25,000 total</strong> (licence + implementation for year one). A comparable SAP Business One implementation for 20 users typically runs <strong>$60,000 – $120,000</strong> — and that is before factoring in higher annual licence fees and more expensive local support.
            </p>
            <p className='font-[inter] text-fg'>
              That cost gap funds years of support, training, and improvement on Business Central. For Lebanese businesses where every dollar counts, this difference matters.
            </p>
          </div>

          {/* CTA */}
          <div className='relative rounded-lg border-2 border-primary bg-mainbg p-8 flex flex-col gap-4 items-center text-center'>
            <h2 className='font-[newake] text-fg text-3xl md:text-4xl'>Ready to See What Business Central Would Cost Your Business?</h2>
            <p className='font-[inter] text-fg max-w-[600]'>
              Use our free AI estimator to get an instant, itemised cost breakdown based on your specific number of users, industry, and requirements — no sales call needed.
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
            {['Business Central', 'SAP', 'ERP Comparison', 'Lebanon', 'SMB ERP', 'Microsoft Dynamics'].map((tag) => (
              <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
