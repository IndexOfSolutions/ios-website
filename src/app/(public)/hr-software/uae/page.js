import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getSiteUrl } from '@/lib/site-url'
import { INDEX_HR_BASE, INDEX_HR_COMPARE, INDEX_HR_PRICING, PRICING_BANDS, SCREENSHOTS } from '@/data/indexHr'
import { EN_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CheckList, CtaBand, FaqList, PageSection, PhoneShot, PRIMARY_BUTTON, Prose, RelatedLinks, SECONDARY_BUTTON,
  SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = EN_PAGES.uae.href
const perEmployee = PRICING_BANDS[0].monthly / PRICING_BANDS[0].max
const title = 'HR & Payroll Software in the UAE | Index HR'
const description =
  'HR and payroll software for UAE companies: geofenced attendance, shift rosters, payroll calculated from attendance, leave, recruitment and an employee app in Arabic, Hindi, Urdu, Malayalam, Tamil and more.'

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Index HR', href: INDEX_HR_BASE }, { label: 'HR software in the UAE' }]

const faqs = [
  { q: 'What is the best HR software for UAE companies?', a: 'It depends on your workforce. Companies with shift-based, multinational teams need geofenced attendance, rosters and an employee app in the languages their staff speak. Index HR is built for that, with payroll calculated straight from attendance. Office-only teams may prioritise benefits administration instead.' },
  { q: 'Does Index HR help with the UAE Wage Protection System?', a: 'Index HR calculates payroll from attendance, leave, overtime and loans, and exports a clean payroll file per employee for your WPS agent (bank or exchange house) to process. Closing attendance early helps you meet the 1st-of-month salary deadline that applies from June 2026.' },
  { q: 'Which languages does the employee app support?', a: 'English, Arabic, French, Hindi, Bengali, Urdu, Malayalam and Tamil, which covers most of the UAE private-sector workforce.' },
  { q: 'How much does Index HR cost in the UAE?', a: `From $${perEmployee} per employee per month with a minimum ${PRICING_BANDS[0].max}-employee package. Every module is included and yearly billing saves 20%.` },
]

const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: `${siteUrl}${path}`, dateModified: HR_SEO_UPDATED, about: { '@type': 'SoftwareApplication', name: 'Index HR' } },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ['hr software in uae', 'hr payroll software', 'hrms payroll software', 'payroll software uae', 'attendance system uae', 'hris payroll software'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, locale: 'en_AE', type: 'website', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function UaeHrSoftwarePage() {
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
                eyebrow='UAE'
                title='HR & payroll software for UAE teams that work in shifts'
                subtitle='Attendance from the phone or the biometric device, rosters, leave and payroll in one system, with an employee app your whole workforce can read.'
              />
              <div className='flex flex-wrap gap-4'>
                <Link href='/contact' className={PRIMARY_BUTTON}>Book a demo <ArrowRight className='size-4' aria-hidden='true' /></Link>
                <Link href={INDEX_HR_PRICING} className={SECONDARY_BUTTON}>From ${perEmployee}/employee/month</Link>
              </div>
            </div>
            <div className='mx-auto grid w-full max-w-sm grid-cols-2 gap-4'>
              <PhoneShot shot={SCREENSHOTS.clockIn} priority />
              <PhoneShot shot={SCREENSHOTS.schedule} className='translate-y-8' />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='max-w-3xl flex flex-col gap-12'>
          <Prose>
            <h2 id='why'>What UAE companies need from HR software</h2>
            <p>Most UAE private-sector employers run multinational, often shift-based teams across sites, warehouses and branches. That makes three things matter more than anything else:</p>
            <ul>
              <li><strong>Reliable attendance</strong> from wherever people work, so pay is based on real hours.</li>
              <li><strong>Payroll on time</strong>: from June 2026, private-sector salaries are due on the 1st of each month under the Wage Protection System. See our <Link href={EN_PAGES.uaeSalaryRules.href}>guide to the 2026 UAE salary payment rules</Link>.</li>
              <li><strong>An app employees actually use</strong>, in Arabic, Hindi, Urdu, Malayalam, Tamil or Bengali, not only English.</li>
            </ul>
            <h2 id='features'>What Index HR gives UAE teams</h2>
          </Prose>
          <CheckList items={[
            'Geofenced mobile clock-in across multiple sites, plus ZKTeco biometric devices',
            'Shift rosters with patterns, shift swaps and overnight shifts',
            'Payroll calculated from attendance, leave, overtime, missions and loans',
            'Overtime approved before it is paid; lateness deducted as a separate line',
            'Multi-currency payroll for groups paying in AED and other currencies',
            'Expiry alerts for visas, Emirates IDs, passports, contracts and insurance',
            'Recruitment, performance, training and asset custody included',
            'Payroll posting to Microsoft Dynamics 365 Business Central',
          ]} />
          <Callout title='Payroll in time for the 1st'>
            Index HR closes attendance as the month runs, flags missing punches with push reminders, and routes overtime for approval during the month, so payroll is ready to hand to your WPS agent before the deadline.
          </Callout>

          <div className='flex flex-col gap-6'>
            <h2 className='font-[newake] text-fg text-3xl'>FAQ</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='Related' links={[EN_PAGES.uaeSalaryRules, EN_PAGES.bestMiddleEast, { href: INDEX_HR_COMPARE, label: 'Index HR vs other HR software', text: 'Zoho People, BambooHR, Rippling, Jisr, MenaITech and ZenHR.' }]} />
        </div>
      </PageSection>

      <CtaBand
        title='See Index HR with your UAE rosters'
        text='Bring a sample month of shifts and payroll, and we will run it through Index HR with you.'
        primary={{ href: '/contact', label: 'Book a demo' }}
        secondary={{ href: INDEX_HR_PRICING, label: 'See pricing' }}
      />
    </>
  )
}
