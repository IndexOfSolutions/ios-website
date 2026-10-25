import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getSiteUrl } from '@/lib/site-url'
import {
  ENTERPRISE_RATE, INDEX_HR_BASE, INDEX_HR_COMPARE, INDEX_HR_PRICING, PLAN_INCLUDES, PRICING_ADD_ONS, PRICING_BANDS, PRICING_FAQS,
} from '@/data/indexHr'
import {
  CheckList, CtaBand, Eyebrow, FaqList, PageSection, PRIMARY_BUTTON, SECONDARY_BUTTON, SectionHeading, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'
import PricingCalculator from '@/components/index-hr/PricingCalculator'

const siteUrl = getSiteUrl()
const fmt = (n) => n.toLocaleString('en-US')

const description = `Index HR pricing: one Professional plan with every module, from $${PRICING_BANDS[0].monthly} a month for up to ${PRICING_BANDS[0].max} employees. Flat price per headcount band, 20% off with yearly billing.`

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Index HR — Professional',
  description,
  brand: { '@type': 'Brand', name: 'Index HR' },
  url: `${siteUrl}${INDEX_HR_PRICING}`,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: String(PRICING_BANDS[0].monthly),
    highPrice: String(PRICING_BANDS[PRICING_BANDS.length - 1].monthly),
    offerCount: String(PRICING_BANDS.length),
  },
}

export const metadata = {
  title: { absolute: 'Index HR Pricing — HR & Payroll Software Plans | Index of Solutions' },
  description,
  keywords: ['Index HR pricing', 'HR software pricing', 'HRMS price', 'payroll software cost', 'attendance software price'].join(', '),
  alternates: { canonical: INDEX_HR_PRICING },
  openGraph: { title: 'Index HR Pricing', description },
  twitter: { card: 'summary_large_image', title: 'Index HR Pricing', description },
}

export default function IndexHrPricingPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(PRICING_FAQS)) }} />

      <PageSection className='overflow-hidden'>
        <div className='pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[900px] max-w-full rounded-full bg-primary/20 blur-[120px]' aria-hidden='true' />
        <div className='relative flex flex-col gap-14'>
          <SectionHeading
            as='h1'
            eyebrow='Index HR pricing'
            title='Simple pricing. Every module included.'
            subtitle='One Professional plan with recruitment, training and performance built in. You pay a flat monthly price for your headcount band, not per user or per module.'
          />

          <div className='grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start'>
            {/* Plan card */}
            <div className='rounded-3xl border border-primary/50 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.22),transparent_70%)] bg-secondary/40 p-8 md:p-10 flex flex-col gap-6'>
              <div className='flex items-center justify-between gap-4'>
                <h2 className='font-[newake] text-4xl text-fg'>Professional</h2>
                <span className='font-[jetBrainsMono] text-xs uppercase tracking-widest rounded-full bg-primary/15 text-primary px-3 py-1'>All modules</span>
              </div>
              <p className='font-[inter] text-fg/70'>Core HR, attendance, payroll, recruitment, performance and training, all in one plan.</p>
              <p className='font-[newake] text-6xl text-fg'>
                ${PRICING_BANDS[0].monthly / PRICING_BANDS[0].max}<span className='font-[inter] text-lg text-fg/60'> / employee / month</span>
              </p>
              <p className='font-[inter] text-sm text-fg/55 -mt-4'>
                Minimum {PRICING_BANDS[0].max}-employee package (${PRICING_BANDS[0].monthly}/month). Prices in USD.
              </p>
              <Link href='/contact' className={PRIMARY_BUTTON}>Book a demo <ArrowRight className='size-4' aria-hidden='true' /></Link>
              <div className='border-t border-border-color pt-6'>
                <h3 className='font-[inter] font-semibold text-fg mb-4'>Everything included</h3>
                <CheckList items={PLAN_INCLUDES} className='text-sm' />
              </div>
            </div>

            <div className='flex flex-col gap-8'>
              <PricingCalculator />

              {/* Band table */}
              <div className='rounded-3xl border border-border-color overflow-hidden'>
                <table className='w-full font-[inter] text-sm'>
                  <caption className='sr-only'>Index HR Professional plan prices by number of employees</caption>
                  <thead className='bg-secondary text-fg'>
                    <tr>
                      <th scope='col' className='text-left p-4 font-semibold'>Employees</th>
                      <th scope='col' className='text-right p-4 font-semibold'>Monthly</th>
                      <th scope='col' className='text-right p-4 font-semibold'>Yearly <span className='text-emerald-400 font-normal'>(−20%)</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_BANDS.map(({ min, max, monthly, yearly }, i) => (
                      <tr key={min} className={`border-t border-border-color ${i % 2 ? 'bg-secondary/20' : 'bg-mainbg'}`}>
                        <th scope='row' className='text-left p-4 font-normal text-fg/85'>{fmt(min)}–{fmt(max)}</th>
                        <td className='text-right p-4 text-fg tabular-nums'>${fmt(monthly)}</td>
                        <td className='text-right p-4 text-fg tabular-nums'>${fmt(yearly)}</td>
                      </tr>
                    ))}
                    <tr className='border-t border-border-color bg-primary/5'>
                      <th scope='row' className='text-left p-4 font-normal text-fg/85'>1,000+</th>
                      <td colSpan={2} className='text-right p-4 text-fg'>${ENTERPRISE_RATE} per employee / month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Add-ons */}
      <PageSection className='!pt-0'>
        <div className='flex flex-col gap-12'>
          <SectionHeading
            eyebrow='Services & add-ons'
            title='Quoted for your project'
            subtitle='The subscription covers the platform. These are scoped with you and quoted separately.'
          />
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {PRICING_ADD_ONS.map(({ name, detail }) => (
              <div key={name} className='rounded-2xl border border-border-color bg-secondary/30 p-6 flex flex-col gap-2'>
                <h3 className='font-[inter] font-semibold text-fg'>{name}</h3>
                <p className='font-[inter] text-sm text-fg/65 leading-relaxed'>{detail}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href={INDEX_HR_BASE} className={SECONDARY_BUTTON}>Explore all features</Link>
            <Link href={INDEX_HR_COMPARE} className={SECONDARY_BUTTON}>Compare with other HR software</Link>
          </div>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col items-center gap-4'>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className='font-[newake] text-fg text-4xl md:text-5xl text-center'>Pricing questions</h2>
          </div>
          <FaqList items={PRICING_FAQS} />
        </div>
      </PageSection>

      <CtaBand
        title='Get a quote for your team'
        text='Tell us your headcount, companies and countries, and we will send a quote including implementation.'
        primary={{ href: '/contact', label: 'Request a quote' }}
        secondary={{ href: INDEX_HR_BASE, label: 'Explore Index HR' }}
      />
    </>
  )
}
