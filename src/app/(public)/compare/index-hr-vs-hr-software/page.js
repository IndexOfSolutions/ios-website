import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getSiteUrl } from '@/lib/site-url'
import {
  COMPARE_CHECKED, COMPARISON_ROWS, COMPETITOR_SUMMARIES, COMPETITORS, INDEX_HR_BASE, INDEX_HR_COMPARE, INDEX_HR_PRICING,
} from '@/data/indexHr'
import { CtaBand, Eyebrow, PageSection, SECONDARY_BUTTON, SectionHeading, StatusCell } from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()

const description =
  'Index HR compared with Zoho People, BambooHR, Rippling, Jisr, MenaITech and ZenHR: pricing, payroll, geofenced attendance, mobile app languages, AI, Business Central integration and Saudi payroll.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Index HR vs Zoho People, BambooHR, Rippling, Jisr, MenaITech and ZenHR',
  description,
  url: `${siteUrl}${INDEX_HR_COMPARE}`,
  provider: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
}

export const metadata = {
  title: { absolute: 'Index HR vs Zoho People, BambooHR, Rippling, Jisr, MenaITech & ZenHR' },
  description,
  keywords: [
    'Zoho People alternative', 'BambooHR alternative', 'Rippling alternative', 'Jisr alternative', 'ZenHR alternative',
    'MenaITech alternative', 'HR software comparison', 'best HR software Middle East', 'HRMS comparison Saudi Arabia',
  ].join(', '),
  alternates: { canonical: INDEX_HR_COMPARE },
  openGraph: { title: 'Index HR vs other HR software', description, type: 'article' },
  twitter: { card: 'summary_large_image', title: 'Index HR vs other HR software', description },
}

const reasons = [
  { title: 'Every module, one price', text: 'Recruitment, performance and training are in the plan, priced by headcount band rather than per user and per module.' },
  { title: 'Made for operational teams', text: 'Rosters with swaps, overnight shifts, geofenced punches, missions and approved overtime, all feeding payroll.' },
  { title: 'An app the whole workforce reads', text: 'Eight languages including Hindi, Bengali, Urdu, Malayalam and Tamil, with right-to-left Arabic and Urdu.' },
  { title: 'Native Business Central posting', text: 'Employees and payroll journals flow into Dynamics 365 Business Central, mapped to your dimensions.' },
]

export default function IndexHrComparePage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageSection>
        <div className='flex flex-col gap-14'>
          <SectionHeading
            as='h1'
            eyebrow='Compare HR software'
            title='Index HR vs Zoho People, BambooHR, Rippling, Jisr, MenaITech & ZenHR'
            subtitle='A side-by-side look at the HR platforms teams in the Middle East evaluate most, so you can choose the one that fits how your workforce actually works.'
          />

          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {reasons.map(({ title, text }) => (
              <div key={title} className='rounded-2xl border border-border-color bg-secondary/30 p-6 flex flex-col gap-2'>
                <h2 className='font-[inter] font-semibold text-fg'>{title}</h2>
                <p className='font-[inter] text-sm text-fg/65 leading-relaxed'>{text}</p>
              </div>
            ))}
          </div>

          {/* Matrix */}
          <div className='flex flex-col gap-4'>
            <h2 className='font-[newake] text-fg text-4xl'>Feature comparison</h2>
            <div className='w-full overflow-x-auto rounded-2xl border border-border-color'>
              <table className='w-full min-w-[1100px] border-collapse font-[inter] text-sm'>
                <caption className='sr-only'>Index HR compared with six HR platforms</caption>
                <thead>
                  <tr className='bg-secondary'>
                    <th scope='col' className='sticky left-0 z-10 bg-secondary text-left p-4 text-fg font-semibold w-[200px]'>Feature</th>
                    <th scope='col' className='text-left p-4 bg-primary/15 text-primary font-semibold border-x border-primary/40 min-w-[220px]'>Index HR</th>
                    {COMPETITORS.map(({ id, name }) => (
                      <th key={id} scope='col' className='text-left p-4 text-fg font-semibold'>
                        <a href={`#${id}`} className='hover:text-primary'>{name}</a>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.feature} className={`border-t border-border-color ${i % 2 ? 'bg-secondary/20' : 'bg-mainbg'}`}>
                      <th scope='row' className={`sticky left-0 z-10 text-left p-4 text-fg font-semibold align-top ${i % 2 ? 'bg-[#1d1d21]' : 'bg-mainbg'}`}>{row.feature}</th>
                      <td className='p-4 align-top bg-primary/5 border-x border-primary/40'><StatusCell cell={row.indexHr} /></td>
                      {COMPETITORS.map(({ id }) => (
                        <td key={id} className='p-4 align-top'><StatusCell cell={row[id]} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='font-[inter] text-xs text-fg/45 leading-relaxed'>
              Competitor information comes from public vendor websites and independent review sites, checked {COMPARE_CHECKED}. &quot;Not advertised&quot; means we could not find the feature in public material. Plans, prices and features change, so confirm details with each vendor. Product names are trademarks of their respective owners.
            </p>
          </div>
        </div>
      </PageSection>

      {/* One-to-one summaries */}
      <PageSection className='!pt-0'>
        <div className='flex flex-col gap-12'>
          <SectionHeading eyebrow='Head to head' title='How Index HR compares, one by one' />
          <div className='grid gap-6 lg:grid-cols-2'>
            {COMPETITOR_SUMMARIES.map(({ id, name, them, us, fit }) => (
              <article key={id} id={id} className='scroll-mt-28 rounded-2xl border border-border-color bg-secondary/30 p-7 flex flex-col gap-5'>
                <h3 className='font-[newake] text-3xl text-fg'>Index HR vs {name}</h3>
                <div className='flex flex-col gap-1'>
                  <span className='font-[jetBrainsMono] text-xs uppercase tracking-widest text-fg/45'>{name}</span>
                  <p className='font-[inter] text-fg/70 leading-relaxed'>{them}</p>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='font-[jetBrainsMono] text-xs uppercase tracking-widest text-primary'>Index HR</span>
                  <p className='font-[inter] text-fg/90 leading-relaxed'>{us}</p>
                </div>
                <p className='font-[inter] text-sm text-fg/55 border-t border-border-color pt-4'>
                  <span className='text-fg/75 font-semibold'>{name} may suit you better if: </span>{fit.charAt(0).toLowerCase() + fit.slice(1)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='rounded-2xl border border-border-color bg-secondary/30 p-8 md:p-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center'>
          <div className='flex flex-col gap-3'>
            <Eyebrow>Next step</Eyebrow>
            <h2 className='font-[newake] text-3xl text-fg'>Compare on your own data</h2>
            <p className='font-[inter] text-fg/65'>Bring your shift patterns, leave policy and a sample payroll. We will show you exactly how Index HR handles them.</p>
          </div>
          <div className='flex flex-wrap gap-4'>
            <Link href={INDEX_HR_BASE} className={SECONDARY_BUTTON}>All features</Link>
            <Link href={INDEX_HR_PRICING} className={SECONDARY_BUTTON}>Pricing <ArrowRight className='size-4' aria-hidden='true' /></Link>
          </div>
        </div>
      </PageSection>

      <CtaBand
        title='See Index HR next to your current system'
        text='Book a demo and get a side-by-side walkthrough against the system you use today.'
        primary={{ href: '/contact', label: 'Book a demo' }}
        secondary={{ href: INDEX_HR_PRICING, label: 'See pricing' }}
      />
    </>
  )
}
