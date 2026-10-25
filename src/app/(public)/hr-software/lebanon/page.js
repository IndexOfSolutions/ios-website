import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getSiteUrl } from '@/lib/site-url'
import { INDEX_HR_BASE, INDEX_HR_PRICING, PRICING_BANDS, SCREENSHOTS } from '@/data/indexHr'
import { EN_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, CheckList, CtaBand, FaqList, PageSection, PhoneShot, PRIMARY_BUTTON, Prose, RelatedLinks, SECONDARY_BUTTON,
  SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = EN_PAGES.lebanon.href
const perEmployee = PRICING_BANDS[0].monthly / PRICING_BANDS[0].max
const title = 'HR & Payroll Software in Lebanon | Index HR by Index of Solutions'
const description =
  'HR and payroll software built in Beirut for Lebanese companies: dual-currency USD/LBP payroll, family allowances from dependents, tiered income tax, NSSF data, punching machines and an app in Arabic, French and English.'

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Index HR', href: INDEX_HR_BASE }, { label: 'HR software in Lebanon' }]

const faqs = [
  { q: 'Can Index HR run payroll in both USD and LBP?', a: 'Yes. Each employee can hold payroll elements in different currencies, and the payroll report keeps totals separate per currency so amounts are never mixed.' },
  { q: 'Does it handle family allowances and income tax?', a: 'Yes. Dependent-based elements calculate allowances from the employee\'s registered family members, and percentage-tiered elements apply progressive brackets such as income tax. You configure the rates, so changes in regulations do not need a software update.' },
  { q: 'Where is support based?', a: 'Index of Solutions is based in Beirut. Implementation, training and support are delivered by our own team in Arabic, French and English.' },
  { q: 'How much does it cost?', a: `From $${perEmployee} per employee per month with a minimum ${PRICING_BANDS[0].max}-employee package, every module included.` },
]

const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: `${siteUrl}${path}`, dateModified: HR_SEO_UPDATED, about: { '@type': 'SoftwareApplication', name: 'Index HR' } },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ['HR software Lebanon', 'payroll software Lebanon', 'HRMS Lebanon', 'attendance system Lebanon', 'HR system Beirut'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, type: 'website', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function LebanonHrSoftwarePage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageSection className='overflow-hidden'>
        <div className='pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[900px] max-w-full rounded-full bg-primary/20 blur-[120px]' aria-hidden='true' />
        <div className='relative flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <div className='grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
            <div className='flex flex-col gap-6 items-start'>
              <SectionHeading
                as='h1'
                align='left'
                eyebrow='Lebanon'
                title='HR & payroll software made in Beirut, for Lebanese payroll'
                subtitle='Dual-currency payroll, family allowances, tiered tax and attendance in one system, implemented and supported by a local team.'
              />
              <div className='flex flex-wrap gap-4'>
                <Link href='/contact' className={PRIMARY_BUTTON}>Book a demo <ArrowRight className='size-4' aria-hidden='true' /></Link>
                <Link href={INDEX_HR_PRICING} className={SECONDARY_BUTTON}>From ${perEmployee}/employee/month</Link>
              </div>
            </div>
            <div className='mx-auto grid w-full max-w-sm grid-cols-2 gap-4'>
              <PhoneShot shot={SCREENSHOTS.home} priority />
              <PhoneShot shot={SCREENSHOTS.leaveBalance} className='translate-y-8' />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='max-w-3xl flex flex-col gap-12'>
          <Prose>
            <h2 id='challenges'>Why Lebanese payroll is hard</h2>
            <p>Lebanese companies often pay part of salaries in US dollars and part in Lebanese pounds, adjust allowances as regulations change, calculate family allowances from each employee&apos;s dependents, and apply progressive income tax brackets. Spreadsheets break under that much change. Index HR models each of these as configurable payroll elements, so a new rate is a setting, not a rebuild.</p>
            <h2 id='features'>Built for Lebanese companies</h2>
          </Prose>
          <CheckList items={[
            'Multi-currency payroll with USD and LBP totals kept separate',
            'Dependent-based family allowances from registered spouses and children',
            'Percentage-tiered elements for progressive income tax brackets',
            'NSSF number and full employment record on every employee',
            'Attendance from ZKTeco punching machines and geofenced mobile clock-in',
            'Leave ledger, approvals and public holidays per profile',
            'Employee app in Arabic, French and English (plus five more languages)',
            'Business Central connector for companies already on Dynamics 365',
          ]} />
          <Prose>
            <h2 id='local'>Local implementation and support</h2>
            <p>Index of Solutions is a Microsoft Business Central partner based in Beirut. The same team that builds Index HR implements it, migrates your employee data, runs a parallel payroll with you and supports you afterwards in Arabic, French or English.</p>
          </Prose>

          <div className='flex flex-col gap-6'>
            <h2 className='font-[newake] text-fg text-3xl'>FAQ</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='Related' links={[EN_PAGES.bestLebanon, EN_PAGES.bestMiddleEast, { href: INDEX_HR_PRICING, label: 'Index HR pricing', text: 'Every module, one plan.' }]} />
        </div>
      </PageSection>

      <CtaBand
        title='Run your next payroll in Index HR'
        text='We will set it up with your currencies, allowances and tax brackets, and run it in parallel with your current process.'
        primary={{ href: '/contact', label: 'Book a demo' }}
        secondary={{ href: INDEX_HR_BASE, label: 'Explore Index HR' }}
      />
    </>
  )
}
