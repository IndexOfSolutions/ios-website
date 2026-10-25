import React from 'react'
import Link from 'next/link'
import { getSiteUrl } from '@/lib/site-url'
import { INDEX_HR_BASE, INDEX_HR_COMPARE, PRICING_BANDS } from '@/data/indexHr'
import { AR_PAGES, EN_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = EN_PAGES.bestMiddleEast.href
const perEmployee = PRICING_BANDS[0].monthly / PRICING_BANDS[0].max
const title = 'Best HR Software in the Middle East (2026): 8 Platforms Compared'
const description =
  'An honest 2026 roundup of HR and payroll software for the Middle East: Index HR, Jisr, ZenHR, Bayzat, MenaITech, PalmHR, Zoho People and Darwinbox, with who each one suits, pricing and trade-offs.'

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Index HR', href: INDEX_HR_BASE }, { label: 'Best HR software in the Middle East' }]

const vendors = [
  {
    name: 'Index HR',
    bestFor: 'Shift-based, multinational workforces and companies on Microsoft Business Central',
    price: `From $${perEmployee}/employee/month (minimum ${PRICING_BANDS[0].max}), all modules`,
    pros: ['Employee app in 8 languages incl. Arabic, Hindi, Urdu, Bengali, Malayalam, Tamil', 'Geofenced attendance, rosters with swaps, overnight shifts, missions', 'Native Business Central payroll posting', 'Recruitment, performance, training and assets in one plan'],
    cons: ['Saudi government integrations (Qiwa, Muqeem, direct Mudad) not yet built', 'Admin console in English only', 'Newer brand with fewer public reviews'],
    href: INDEX_HR_BASE,
  },
  {
    name: 'Jisr',
    bestFor: 'Companies operating only in Saudi Arabia',
    price: 'Around SAR 17/employee/month (reported)',
    pros: ['Direct Mudad, GOSI, Qiwa and Muqeem integrations', 'In-Kingdom hosting', 'Arabic and English'],
    cons: ['Reviewers cite limited analytics and AI', 'Saudi-focused, less suited to multi-country groups'],
    href: AR_PAGES.jisr.href,
  },
  {
    name: 'ZenHR',
    bestFor: 'Multi-country MENA payroll',
    price: 'Quote-based (reported from about $5–8/employee/month)',
    pros: ['Payroll localised in 11 MENA countries', 'Attendance with geolocation and biometric integration', 'Arabic and English'],
    cons: ['AI features described as still developing', 'Pricing not published'],
  },
  {
    name: 'Bayzat',
    bestFor: 'UAE companies that want HR plus health insurance',
    price: 'Custom quote',
    pros: ['Licensed insurance brokerage in the UAE', 'WPS payroll and GOSI support', 'Attendance with face recognition and geofencing'],
    cons: ['Pricing not published', 'In-Kingdom data residency reported on enterprise tier only'],
  },
  {
    name: 'MenaITech',
    bestFor: 'Large organisations wanting a long-established regional payroll',
    price: 'Quote-based, modular',
    pros: ['Long track record in Saudi and Jordanian payroll', 'Arabic and English cloud platform', 'Mobile self-service app'],
    cons: ['Sold as separate modules', 'Interface described as more traditional'],
  },
  {
    name: 'PalmHR',
    bestFor: 'Saudi SMEs under 100 employees',
    price: 'Around SAR 19/employee/month (reported)',
    pros: ['Arabic-first interface', 'Mudad, GOSI and Qiwa support', 'Simple to adopt'],
    cons: ['Limited multi-country support', 'Smaller ecosystem'],
  },
  {
    name: 'Zoho People',
    bestFor: 'Companies already on the Zoho suite',
    price: 'From about $1.50/user/month; payroll and recruitment separate',
    pros: ['Low entry price', 'Highly configurable', 'Integrates with other Zoho apps'],
    cons: ['Payroll (Zoho Payroll) and recruitment (Zoho Recruit) are separate products', 'Saudi compliance not native in Zoho People'],
  },
  {
    name: 'Darwinbox',
    bestFor: 'Large enterprises',
    price: 'Custom quote',
    pros: ['Broad enterprise HCM', 'Advanced analytics and AI'],
    cons: ['Regional compliance through partners', 'Heavy for companies under ~200 employees'],
  },
]

const faqs = [
  { q: 'What is the best HR software in the Middle East?', a: 'There is no single best. For Saudi-only companies needing government integrations, Jisr or PalmHR; for multi-country MENA payroll, ZenHR; for UAE health insurance, Bayzat; for shift-based multinational workforces or Business Central users, Index HR; for Zoho customers, Zoho People.' },
  { q: 'Which HR software supports Arabic?', a: 'All the regional platforms in this list (Index HR, Jisr, ZenHR, Bayzat, MenaITech, PalmHR) offer Arabic. Index HR also offers its employee app in Hindi, Urdu, Bengali, Malayalam and Tamil.' },
  { q: 'How much does HR software cost in the Middle East?', a: 'Published and reported prices range from about $1.50 per user per month for basic core HR to SAR 17–25 per employee per month for regional payroll platforms. Enterprise suites are quote-based.' },
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
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    itemListElement: vendors.map((v, i) => ({ '@type': 'ListItem', position: i + 1, name: v.name })),
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ['best hr software', 'best hr software middle east', 'best hr software in saudi arabia', 'best hr software in uae', 'hr software comparison', 'top hr system'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function BestHrSoftwareMiddleEastPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageSection>
        <div className='flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading as='h1' align='left' eyebrow='2026 roundup' title={title} subtitle='Who each platform suits, what it costs, and where it falls short, so you can shortlist in minutes.' />
          <Callout title='Disclosure'>
            We make Index HR, which is included in this list. We have tried to be fair: every platform has a &quot;best for&quot; and honest trade-offs, including our own. Competitor details come from public vendor pages and review sites, checked {HR_SEO_UPDATED}.
          </Callout>

          <div className='w-full overflow-x-auto rounded-2xl border border-border-color'>
            <table className='w-full min-w-[760px] border-collapse font-[inter] text-sm'>
              <caption className='sr-only'>HR software in the Middle East at a glance</caption>
              <thead>
                <tr className='bg-secondary text-fg'>
                  <th scope='col' className='text-left p-4'>Platform</th>
                  <th scope='col' className='text-left p-4'>Best for</th>
                  <th scope='col' className='text-left p-4'>Price</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((v, i) => (
                  <tr key={v.name} className={`border-t border-border-color ${i % 2 ? 'bg-secondary/20' : 'bg-mainbg'}`}>
                    <th scope='row' className='text-left p-4 text-fg font-semibold'><a href={`#${v.name.toLowerCase().replace(/\s+/g, '-')}`} className='hover:text-primary'>{v.name}</a></th>
                    <td className='p-4 text-fg/80'>{v.bestFor}</td>
                    <td className='p-4 text-fg/70'>{v.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='max-w-4xl flex flex-col gap-8'>
          {vendors.map((v, i) => (
            <article key={v.name} id={v.name.toLowerCase().replace(/\s+/g, '-')} className='scroll-mt-28 rounded-2xl border border-border-color bg-secondary/30 p-7 flex flex-col gap-4 font-[inter]'>
              <h2 className='font-[newake] text-3xl text-fg'>{i + 1}. {v.name}</h2>
              <p className='text-fg/80'><strong className='text-fg'>Best for:</strong> {v.bestFor}</p>
              <p className='text-fg/70'><strong className='text-fg'>Price:</strong> {v.price}</p>
              <div className='grid gap-6 md:grid-cols-2'>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-semibold text-emerald-400'>Strengths</h3>
                  <ul className='flex flex-col gap-1.5 text-fg/75 list-disc ps-5'>{v.pros.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-semibold text-amber-400'>Trade-offs</h3>
                  <ul className='flex flex-col gap-1.5 text-fg/75 list-disc ps-5'>{v.cons.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              </div>
              {v.href && <Link href={v.href} className='text-primary text-sm hover:underline self-start'>Learn more about {v.name === 'Index HR' ? 'Index HR' : `Index HR vs ${v.name}`} →</Link>}
            </article>
          ))}

          <Prose>
            <h2 id='how-to-choose'>How to choose HR software in the Middle East</h2>
            <ol>
              <li><strong>Start with your countries.</strong> Saudi-only, UAE-only and multi-country groups need different payroll localisation.</li>
              <li><strong>Look at who clocks in.</strong> Shift-based and field teams need geofenced attendance, rosters and an app in their own language.</li>
              <li><strong>Check statutory needs.</strong> GOSI, end of service, WPS, Mudad, Qiwa: list which you need on day one versus later.</li>
              <li><strong>Count the modules you will really pay for.</strong> Per-module pricing grows fast once you add recruitment and performance.</li>
              <li><strong>Check the finance link.</strong> If you run an ERP such as Business Central, payroll posting should not be a manual export.</li>
            </ol>
          </Prose>

          <div className='flex flex-col gap-6'>
            <h2 className='font-[newake] text-fg text-3xl'>FAQ</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='Related' links={[{ href: INDEX_HR_COMPARE, label: 'Index HR feature comparison', text: 'Side by side with six platforms.' }, EN_PAGES.uae, EN_PAGES.lebanon]} />
        </div>
      </PageSection>

      <CtaBand
        title='Shortlisted Index HR?'
        text='See it with your own shifts, leave policy and payroll.'
        primary={{ href: '/contact', label: 'Book a demo' }}
        secondary={{ href: INDEX_HR_BASE, label: 'Explore Index HR' }}
      />
    </>
  )
}
