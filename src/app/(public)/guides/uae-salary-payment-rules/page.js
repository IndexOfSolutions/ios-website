import React from 'react'
import Link from 'next/link'
import { getSiteUrl } from '@/lib/site-url'
import { INDEX_HR_BASE } from '@/data/indexHr'
import { EN_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = EN_PAGES.uaeSalaryRules.href
const title = 'UAE Salary Payment Rules 2026: The New WPS Deadline Explained'
const description =
  'The UAE salary payment rule from June 2026: private-sector wages due on the 1st of each month, the 85% compliance threshold, staged WPS penalties, and how employers can prepare payroll in time.'

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Index HR', href: INDEX_HR_BASE }, { label: 'UAE salary payment rules 2026' }]

const faqs = [
  { q: 'What is the new UAE salary payment rule?', a: 'Under Ministerial Resolution No. 340 of 2026, private-sector salaries registered in the Wage Protection System are due on the 1st of each month, starting 1 June 2026. The previous grace window no longer applies.' },
  { q: 'What counts as paying on time?', a: 'Reported guidance says a company is compliant when it transfers at least 85% of total wages on time, and an employee is not treated as unpaid if they receive at least 85% of their pay with the rest made up of documented, lawful deductions.' },
  { q: 'What happens if salaries are late?', a: 'Enforcement is staged: notifications first, then restrictions such as suspension of new work permits, then fines per affected employee and reclassification for repeat violations, and eventually labour cases. Published timelines differ, so check MOHRE for the current schedule.' },
  { q: 'Does this apply to free zone companies?', a: 'The rule applies to establishments registered with MOHRE and the WPS. Free zones such as DIFC and ADGM have their own employment regimes, so confirm with your free zone authority.' },
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
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ['uae new salary payment rule', 'uae salary payment law', 'dubai salary payment law', 'wps uae 2026', 'mohre salary deadline', 'payroll process in uae'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url: path, locale: 'en_AE' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function UaeSalaryRulesPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageSection>
        <div className='max-w-3xl flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading as='h1' align='left' eyebrow='Guide' title={title} subtitle='What changed in June 2026, what "on time" means, and a practical checklist to get payroll out by the 1st.' />
          <p className='font-[inter] text-sm text-fg/45'>Last updated {HR_SEO_UPDATED}. This guide summarises public reporting and is not legal advice.</p>

          <Prose>
            <h2 id='summary'>The rule in one paragraph</h2>
            <p>From <strong>1 June 2026</strong>, UAE private-sector employers registered with MOHRE must pay salaries through the Wage Protection System (WPS) on the <strong>1st of each month</strong>. The rule comes from Ministerial Resolution No. 340 of 2026 and replaces the grace period employers previously relied on. Late payment is flagged automatically and penalties escalate the longer it continues.</p>

            <h2 id='before-after'>Before and after</h2>
            <table>
              <thead><tr><th></th><th>Before June 2026</th><th>From June 2026</th></tr></thead>
              <tbody>
                <tr><td>Due date</td><td>Due date plus a grace window</td><td>1st of each month</td></tr>
                <tr><td>Compliance test</td><td>Varied in practice</td><td>At least 85% of total wages paid on time</td></tr>
                <tr><td>Enforcement</td><td>Mostly after the grace period</td><td>Staged, starting days after the due date</td></tr>
              </tbody>
            </table>

            <h2 id='threshold'>The 85% threshold</h2>
            <p>As reported, a company counts as compliant when it transfers at least 85% of its total wage bill on time. At employee level, a worker is not treated as unpaid if they receive at least 85% of their salary and the rest is explained by documented, lawful deductions such as loan repayments.</p>

            <h2 id='penalties'>Staged penalties</h2>
            <p>Published guides describe an escalating sequence: notifications to the employer in the first days, then suspension of new work permits, then fines per affected employee and reclassification for repeat violations, and eventually labour cases and legal action for persistent non-payment. Sources disagree on the exact day each stage starts, so treat MOHRE as the authority.</p>

            <h2 id='checklist'>Payroll checklist for the 1st</h2>
            <ol>
              <li>Close attendance and approve overtime before the last week of the month.</li>
              <li>Chase missing punches daily, not on payroll day.</li>
              <li>Post loan instalments and deductions with documentation.</li>
              <li>Reconcile new joiners and leavers against the WPS register.</li>
              <li>Send the payroll file to your WPS agent with enough time for the transfer to land by the 1st.</li>
            </ol>
          </Prose>

          <Callout title='How Index HR helps'>
            Index HR calculates payroll from attendance as the month runs, sends missed-punch reminders to employees, routes overtime for approval during the month, and keeps loan deductions documented, so the payroll file can go to your WPS agent days before the 1st. See <Link className='text-primary' href={EN_PAGES.uae.href}>Index HR for UAE companies</Link>.
          </Callout>

          <div className='flex flex-col gap-6'>
            <h2 className='font-[newake] text-fg text-3xl'>FAQ</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='Related' links={[EN_PAGES.uae, EN_PAGES.bestMiddleEast, EN_PAGES.lebanon]} />
        </div>
      </PageSection>

      <CtaBand
        title='Make the 1st-of-month deadline routine'
        text='Attendance, approvals and payroll in one system, ready before payday.'
        primary={{ href: '/contact', label: 'Book a demo' }}
        secondary={{ href: EN_PAGES.uae.href, label: 'Index HR in the UAE' }}
      />
    </>
  )
}
