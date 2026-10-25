import React from 'react'
import { getSiteUrl } from '@/lib/site-url'
import { INDEX_HR_BASE, INDEX_HR_COMPARE, PRICING_BANDS } from '@/data/indexHr'
import { AR_PAGES, EN_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'
import VendorRoundup from '@/components/index-hr/VendorRoundup'

const siteUrl = getSiteUrl()
const path = EN_PAGES.bestLebanon.href
const perEmployee = PRICING_BANDS[0].monthly / PRICING_BANDS[0].max
const title = 'Best HR Systems in Lebanon (2026): Top 7 HR & Payroll Software Compared'
const description =
  'The top HR and payroll systems for Lebanese companies in 2026: Index HR, PayPoint HR, Integral, Levant HR, Magnar HCM, Azkatech (Odoo) and Zoho People, compared on NSSF, dual-currency payroll, attendance and price.'

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Index HR', href: INDEX_HR_BASE }, { label: 'Best HR systems in Lebanon' }]

const vendors = [
  {
    name: 'Index HR',
    bestFor: 'Lebanese companies with shift-based or multi-site teams, and groups operating across Lebanon and the Gulf',
    price: `From $${perEmployee}/employee/month (minimum ${PRICING_BANDS[0].max}), all modules`,
    pros: [
      'USD and LBP payroll in one run, with totals kept separate per currency',
      'Family allowances from registered dependents; tiered elements for income tax brackets',
      'Geofenced mobile clock-in plus ZKTeco punching machines, rosters and overnight shifts',
      'Employee app in Arabic, French and English (plus five more languages)',
      'Recruitment, performance, training and assets included; Business Central connector',
    ],
    cons: ['No direct NSSF portal filing; declarations are prepared from payroll reports', 'Admin console in English only', 'Newer brand with fewer public reviews'],
    href: INDEX_HR_BASE,
    linkLabel: 'Explore Index HR →',
  },
  {
    name: 'PayPoint HR',
    bestFor: 'Companies that want a long-standing Lebanese payroll and attendance package',
    price: 'Quote-based',
    pros: ['Built for Lebanon: NSSF, tax and end-of-service rules', 'Payroll, time attendance and self-service'],
    cons: ['Pricing not published', 'Confirm the current version and roadmap in a demo'],
  },
  {
    name: 'Integral',
    bestFor: 'Attendance-heavy operations that need time attendance tied to payroll',
    price: 'Quote-based',
    pros: ['Developed in Beirut', 'Time attendance, HR and payroll with NSSF, income tax and end-of-service rules', 'Integration with Microsoft Dynamics 365'],
    cons: ['Pricing not published', 'Confirm recruitment and performance coverage in a demo'],
  },
  {
    name: 'Levant HR',
    bestFor: 'Groups operating across Lebanon, Jordan, Syria and Iraq',
    price: 'Quote-based',
    pros: ['Covers four Levant countries', 'NSSF support and LBP payroll', 'GPS attendance and Arabic/English interface'],
    cons: ['Pricing not published', 'Narrower Gulf coverage'],
  },
  {
    name: 'Magnar HCM',
    bestFor: 'Companies running SAP Business One',
    price: 'Quote-based',
    pros: ['NSSF branches and end-of-service indemnity', 'Salaries agreed in USD and declared in LBP within one pay run', 'Native to SAP Business One'],
    cons: ['An SAP Business One add-on, not a standalone HR system', 'Mainly suits SAP customers'],
  },
  {
    name: 'Azkatech (Odoo HR & Payroll)',
    bestFor: 'Companies already running Odoo',
    price: 'Odoo licence plus partner implementation',
    pros: ['Lebanese payroll localisation on Odoo: NSSF, Ministry of Finance filings, multi-currency', 'One system with Odoo accounting and inventory'],
    cons: ['Tied to the Odoo platform', 'Customisations can add upgrade effort'],
  },
  {
    name: 'Zoho People',
    bestFor: 'SMEs already using Zoho apps',
    price: 'From about $1.50/user/month; payroll and recruitment separate',
    pros: ['Low entry price', 'Configurable forms and workflows', 'Local Zoho partners available'],
    cons: ['Lebanese payroll (NSSF, dual currency) needs partner setup', 'Payroll and recruitment are separate Zoho products'],
  },
]

const faqs = [
  { q: 'What is the best HR system in Lebanon?', a: 'It depends on what you already run. For shift-based or multi-site teams that want attendance, payroll and talent in one system, Index HR. For a long-standing local payroll package, PayPoint HR or Integral. For SAP Business One users, Magnar HCM. For Odoo users, Azkatech. For Levant-wide groups, Levant HR. For Zoho users, Zoho People.' },
  { q: 'What should Lebanese HR software handle?', a: 'At minimum: salaries agreed in USD and/or LBP, NSSF contributions across its branches (sickness and maternity, family allowance, end-of-service indemnity), family allowances based on dependents, progressive income tax, and attendance. Rates, caps and the exchange rate used for declarations change by official circular, so the system must let you update them without a software change.' },
  { q: 'Can HR software in Lebanon pay salaries in both USD and LBP?', a: 'Yes, the systems in this list support multi-currency payroll. Index HR keeps each currency\'s totals separate in the payroll report so amounts are never mixed.' },
  { q: 'How much does HR software cost in Lebanon?', a: `Most local vendors quote per project. Index HR publishes its price: $${perEmployee} per employee per month with a minimum ${PRICING_BANDS[0].max}-employee package, every module included.` },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${siteUrl}${path}`,
    datePublished: HR_SEO_UPDATED,
    dateModified: HR_SEO_UPDATED,
    author: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
  },
  { '@context': 'https://schema.org', '@type': 'ItemList', name: title, itemListElement: vendors.map((v, i) => ({ '@type': 'ListItem', position: i + 1, name: v.name })) },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ['best HR system in Lebanon', 'top HR system in Lebanon', 'best HR software Lebanon', 'payroll software Lebanon', 'HRMS Lebanon', 'NSSF payroll software'].join(', '),
  alternates: { canonical: path, languages: { en: path, ar: AR_PAGES.bestLebanon.href } },
  openGraph: { title, description, type: 'article', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

const labels = { caption: 'HR systems in Lebanon at a glance', platform: 'System', bestFor: 'Best for', price: 'Price', strengths: 'Strengths', tradeOffs: 'Trade-offs' }

export default function BestHrSystemsLebanonPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageSection>
        <div className='flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading as='h1' align='left' eyebrow='Lebanon · 2026' title={title} subtitle='Seven HR and payroll systems used by Lebanese companies, compared on what matters locally: NSSF, dual-currency payroll, attendance and support.' />
          <Callout title='Disclosure'>
            We are Index of Solutions, a Beirut-based company, and we make Index HR, which is included in this list. Every system, including ours, has a &quot;best for&quot; and honest trade-offs. Competitor details come from public vendor pages, checked {HR_SEO_UPDATED}.
          </Callout>
          <VendorRoundup vendors={vendors} labels={labels} />
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='max-w-4xl flex flex-col gap-12'>
          <Prose>
            <h2 id='requirements'>What Lebanese HR software must handle</h2>
            <ul>
              <li><strong>Dual-currency salaries.</strong> Many employers agree salaries in US dollars while NSSF contributions and income tax are declared in Lebanese pounds at an officially set rate.</li>
              <li><strong>NSSF.</strong> Contributions run across three branches: sickness and maternity, family allowances, and end-of-service indemnity, each with its own rate and cap.</li>
              <li><strong>Family allowances</strong> based on each employee&apos;s registered spouse and children.</li>
              <li><strong>Progressive income tax</strong> on salaries.</li>
              <li><strong>Frequent changes.</strong> Rates, caps and allowances change by circular, so they must be settings, not code.</li>
            </ul>
            <p>Rates and caps differ between published sources and change often; always confirm them against the latest NSSF and Ministry of Finance circulars before configuring payroll.</p>

            <h2 id='how-to-choose'>How to choose</h2>
            <ol>
              <li><strong>Start from your ERP.</strong> SAP Business One points to Magnar; Odoo to Azkatech; Business Central or no ERP leaves the field open.</li>
              <li><strong>Look at who clocks in.</strong> Shift-based and multi-site teams need geofenced attendance, rosters and punching-machine sync.</li>
              <li><strong>Ask for a sample payslip</strong> showing USD salary, LBP declaration, NSSF branches and family allowance.</li>
              <li><strong>Count the modules you will pay for.</strong> Recruitment and performance are often extra.</li>
              <li><strong>Check local support</strong> in Arabic, French and English.</li>
            </ol>
          </Prose>

          <div className='flex flex-col gap-6'>
            <h2 className='font-[newake] text-fg text-3xl'>FAQ</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='Related' links={[EN_PAGES.lebanon, EN_PAGES.bestMiddleEast, AR_PAGES.bestLebanon, { href: INDEX_HR_COMPARE, label: 'Index HR feature comparison', text: 'Side by side with six platforms.' }]} />
        </div>
      </PageSection>

      <CtaBand
        title='See Index HR with your Lebanese payroll'
        text='Bring a sample month with USD salaries, NSSF and family allowances, and we will run it with you.'
        primary={{ href: '/contact', label: 'Book a demo' }}
        secondary={{ href: EN_PAGES.lebanon.href, label: 'Index HR in Lebanon' }}
      />
    </>
  )
}
