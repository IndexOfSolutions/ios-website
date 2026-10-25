import React from 'react'
import Link from 'next/link'
import { ArrowRight, Briefcase, CalendarDays, Clock, Languages, Package, Plane, Plug, Smartphone, Sparkles, Target, Users, Wallet } from 'lucide-react'
import { getSiteUrl } from '@/lib/site-url'
import {
  APP_LANGUAGES, HR_FAQS, IMPLEMENTATION_STEPS, INDEX_HR_BASE, INDEX_HR_COMPARE, INDEX_HR_PRICING,
  INTEGRATIONS, MOBILE_FEATURES, MODULE_GROUPS, PRICING_BANDS, SCREENSHOTS,
} from '@/data/indexHr'
import {
  CheckList, CtaBand, Eyebrow, FaqList, PageSection, PhoneShot, PRIMARY_BUTTON, RelatedLinks, SECONDARY_BUTTON, SectionHeading, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'
import { AR_PAGES, EN_PAGES } from '@/data/hrSeoPages'

const siteUrl = getSiteUrl()
const ICONS = { Users, Clock, CalendarDays, Wallet, Plane, Package, Briefcase, Target, Sparkles }

const description =
  'Index HR is a complete HR, time & attendance and payroll platform: geofenced clock-in, shift rosters, leave, payroll, recruitment, performance and assets, with an employee app in 8 languages and a native Business Central connector.'

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Index HR',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS, Android, Web',
  description,
  url: `${siteUrl}${INDEX_HR_BASE}`,
  publisher: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
  offers: { '@type': 'Offer', price: String(PRICING_BANDS[0].monthly), priceCurrency: 'USD', url: `${siteUrl}${INDEX_HR_PRICING}` },
}

export const metadata = {
  title: { absolute: 'Index HR — HR, Attendance & Payroll Software | Index of Solutions' },
  description,
  keywords: [
    'Index HR', 'HR software', 'HRMS', 'HR software Lebanon', 'HR software Saudi Arabia', 'attendance software',
    'geofenced clock-in', 'payroll software', 'shift scheduling', 'Business Central HR integration',
  ].join(', '),
  alternates: { canonical: INDEX_HR_BASE, languages: { en: INDEX_HR_BASE, ar: AR_PAGES.hrSystem.href } },
  openGraph: {
    title: 'Index HR — Every HR process, one platform',
    description,
    images: [{ url: SCREENSHOTS.arabicTablet.src, alt: 'Index HR app' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Index HR — HR, Attendance & Payroll Software',
    description,
  },
}

const stats = [
  { value: '9', label: 'Integrated modules' },
  { value: '8', label: 'App languages' },
  { value: '3', label: 'Platforms: iOS, Android & web' },
  { value: `$${PRICING_BANDS[0].monthly}`, label: 'Per month, all modules' },
]

const pillars = [
  { Icon: Clock, title: 'Built for shift-based teams', text: 'Rosters, overnight shifts, geofenced punches, missions and overtime approval that real operations need.' },
  { Icon: Languages, title: 'Every employee, their language', text: 'Arabic, English, French, Hindi, Bengali, Urdu, Malayalam and Tamil, so the whole workforce actually uses it.' },
  { Icon: Plug, title: 'Connected to your finance', text: 'Payroll posts to Dynamics 365 Business Central as a journal, mapped to your accounts and dimensions.' },
]

export default function IndexHrPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(HR_FAQS)) }} />

      {/* Hero */}
      <PageSection className='overflow-hidden'>
        <div className='pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[900px] max-w-full rounded-full bg-primary/20 blur-[120px]' aria-hidden='true' />
        <div className='relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
          <div className='flex flex-col gap-6 items-start'>
            <Eyebrow>Index HR · HR, Attendance & Payroll</Eyebrow>
            <h1 className='font-[newake] text-fg text-5xl md:text-7xl leading-[1.05]'>
              Every HR process.<br /><span className='text-primary'>One platform.</span>
            </h1>
            <p className='font-[inter] text-fg/75 text-lg md:text-xl leading-relaxed max-w-xl'>
              From the first job post to the last payslip: attendance, shifts, leave, payroll, recruitment, performance and assets in one system, with a mobile app your whole workforce can use in their own language.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link href='/contact' className={PRIMARY_BUTTON}>Book a demo <ArrowRight className='size-4' aria-hidden='true' /></Link>
              <Link href={INDEX_HR_PRICING} className={SECONDARY_BUTTON}>See pricing</Link>
            </div>
            <ul className='flex flex-wrap gap-x-6 gap-y-2 font-[inter] text-sm text-fg/60'>
              <li className='flex items-center gap-2'><Smartphone className='size-4 text-primary' aria-hidden='true' />iOS, Android & web</li>
              <li className='flex items-center gap-2'><Languages className='size-4 text-primary' aria-hidden='true' />8 app languages</li>
              <li className='flex items-center gap-2'><Plug className='size-4 text-primary' aria-hidden='true' />Business Central connector</li>
            </ul>
          </div>
          <div className='relative mx-auto flex w-full max-w-md items-end justify-center gap-4'>
            <PhoneShot shot={SCREENSHOTS.clockIn} className='w-1/2 translate-y-8 hidden sm:block' />
            <PhoneShot shot={SCREENSHOTS.home} className='w-2/3 sm:w-1/2' priority />
          </div>
        </div>
      </PageSection>

      {/* Stats */}
      <div className='px-4 md:px-8'>
        <div className='max-w-[1366px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border-color bg-border-color'>
          {stats.map(({ value, label }) => (
            <div key={label} className='bg-[#1f1f23] p-6 text-center'>
              <div className='font-[newake] text-3xl md:text-4xl text-primary'>{value}</div>
              <div className='font-[inter] text-sm text-fg/60 mt-1'>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Index HR */}
      <PageSection>
        <div className='grid gap-6 md:grid-cols-3'>
          {pillars.map(({ Icon, title, text }) => (
            <div key={title} className='rounded-2xl border border-border-color bg-secondary/30 p-8 flex flex-col gap-4'>
              <div className='size-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center'>
                <Icon className='size-6 text-primary' aria-hidden='true' />
              </div>
              <h3 className='font-[newake] text-2xl text-fg'>{title}</h3>
              <p className='font-[inter] text-fg/70 leading-relaxed'>{text}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Modules */}
      <PageSection id='modules' className='!pt-0'>
        <div className='flex flex-col gap-14'>
          <SectionHeading
            eyebrow='Platform modules'
            title='Everything your HR team needs'
            subtitle='Nine modules that share one employee record, one approval engine and one payroll. Every module is included in every plan.'
          />
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {MODULE_GROUPS.map(({ id, icon, title, summary, features }) => {
              const Icon = ICONS[icon]
              return (
                <article key={id} id={id} className='group rounded-2xl border border-border-color bg-secondary/30 p-7 flex flex-col gap-5 transition-colors hover:border-primary/50 hover:bg-secondary/50'>
                  <div className='flex items-center gap-4'>
                    <div className='size-11 shrink-0 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center'>
                      <Icon className='size-5 text-primary' aria-hidden='true' />
                    </div>
                    <h3 className='font-[newake] text-2xl text-fg'>{title}</h3>
                  </div>
                  <p className='font-[inter] text-fg/80'>{summary}</p>
                  <ul className='flex flex-col gap-2 font-[inter] text-sm text-fg/65'>
                    {features.map((f) => (
                      <li key={f} className='flex gap-2'><span className='text-primary' aria-hidden='true'>›</span><span>{f}</span></li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </PageSection>

      {/* Attendance spotlight */}
      <PageSection className='bg-secondary/20 border-y border-border-color'>
        <div className='grid gap-14 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-6'>
            <SectionHeading
              align='left'
              eyebrow='Time & attendance'
              title='Clock in where the work happens'
              subtitle='Employees punch from their phone inside approved locations or on your biometric devices. Index HR turns every punch into hours, lateness, overtime and pay automatically.'
            />
            <CheckList items={[
              'Geofenced check-in locations, each linked to a cost centre',
              'Rosters with patterns, publish, shift requests and swaps',
              'Overnight shifts attributed to the right working day',
              'Push reminders when someone forgets to clock in or out',
              'Overtime raised from punches, paid only once approved',
            ]} />
          </div>
          <div className='mx-auto grid w-full max-w-lg grid-cols-2 gap-5'>
            <PhoneShot shot={SCREENSHOTS.schedule} />
            <PhoneShot shot={SCREENSHOTS.timesheet} className='translate-y-10' />
          </div>
        </div>
      </PageSection>

      {/* Payroll spotlight */}
      <PageSection>
        <div className='grid gap-14 lg:grid-cols-2 lg:items-center'>
          <div className='order-2 lg:order-1 rounded-2xl border border-border-color bg-secondary/40 p-6 md:p-8 font-[inter]'>
            <div className='flex items-center justify-between border-b border-border-color pb-4 mb-4'>
              <span className='font-semibold text-fg'>Payroll run · October 2026</span>
              <span className='font-[jetBrainsMono] text-xs rounded-full bg-emerald-500/15 text-emerald-400 px-3 py-1'>Ready to post</span>
            </div>
            {[
              ['Basic salary', '1,800.00'],
              ['Housing allowance', '450.00'],
              ['Overtime (approved 6.5 h)', '97.50'],
              ['Mission benefit', '60.00'],
              ['Late / undertime', '−22.50'],
              ['Loan installment', '−150.00'],
            ].map(([label, amount]) => (
              <div key={label} className='flex justify-between py-2 text-sm'>
                <span className='text-fg/70'>{label}</span>
                <span className={`tabular-nums ${amount.startsWith('−') ? 'text-rose-400' : 'text-fg'}`}>{amount}</span>
              </div>
            ))}
            <div className='flex justify-between border-t border-border-color pt-4 mt-2'>
              <span className='font-semibold text-fg'>Net pay (USD)</span>
              <span className='font-semibold text-primary tabular-nums'>2,235.00</span>
            </div>
            <p className='mt-4 text-xs text-fg/45'>Illustrative example.</p>
          </div>
          <div className='order-1 lg:order-2 flex flex-col gap-6'>
            <SectionHeading
              align='left'
              eyebrow='Payroll'
              title='Payroll straight from attendance'
              subtitle='No exporting timesheets into spreadsheets. Pay is calculated from punches, shifts, leave, holidays, overtime, missions and loans, then posted to your general ledger.'
            />
            <CheckList items={[
              'Payroll elements: fixed, daily rate, dependent-based and tiered brackets',
              'Overtime and lateness shown as separate lines, never netted',
              'Loans with schedules, postponement and automatic deduction',
              'Multi-currency runs with totals kept per currency',
              'Saudi pack: GOSI, end of service and WPS salary file',
              'One-click posting to Business Central as a general journal',
            ]} />
          </div>
        </div>
      </PageSection>

      {/* Mobile app */}
      <PageSection className='bg-secondary/20 border-y border-border-color'>
        <div className='flex flex-col gap-14'>
          <SectionHeading
            eyebrow='Employee & manager app'
            title='HR in every pocket, in every language'
            subtitle='A native app for iPhone, Android and iPad, plus mobile web. Employees serve themselves; managers approve their team in seconds.'
          />
          <div className='flex flex-wrap justify-center gap-3'>
            {APP_LANGUAGES.map((l) => (
              <span key={l} className='rounded-full border border-border-color bg-mainbg px-4 py-2 font-[inter] text-fg/85'>{l}</span>
            ))}
          </div>
          <div className='grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center'>
            <div className='rounded-2xl border-[6px] border-[#2a2a30] overflow-hidden shadow-[0_30px_80px_-20px_rgba(59,130,246,0.35)]'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SCREENSHOTS.arabicTablet.src} alt={SCREENSHOTS.arabicTablet.alt} width={1400} height={1050} loading='lazy' className='block w-full h-auto' />
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='font-[newake] text-3xl text-fg'>What employees can do</h3>
              <CheckList items={MOBILE_FEATURES} />
            </div>
          </div>
          <div className='mx-auto grid w-full max-w-3xl grid-cols-3 gap-4 md:gap-8'>
            <PhoneShot shot={SCREENSHOTS.leaveBalance} />
            <PhoneShot shot={SCREENSHOTS.myTeam} className='-translate-y-6' />
            <PhoneShot shot={SCREENSHOTS.clockIn} />
          </div>
        </div>
      </PageSection>

      {/* Integrations */}
      <PageSection>
        <div className='flex flex-col gap-14'>
          <SectionHeading
            eyebrow='Integrations'
            title='Connects to the systems you already run'
            subtitle='Built by a Microsoft Business Central partner, Index HR fits into your finance, identity and hardware landscape.'
          />
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {INTEGRATIONS.map(({ name, detail }, i) => (
              <div key={name} className={`rounded-2xl border p-6 flex flex-col gap-2 ${i === 0 ? 'border-primary/50 bg-primary/5' : 'border-border-color bg-secondary/30'}`}>
                <h3 className='font-[inter] font-semibold text-fg'>{name}</h3>
                <p className='font-[inter] text-sm text-fg/65 leading-relaxed'>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Implementation */}
      <PageSection className='!pt-0'>
        <div className='flex flex-col gap-14'>
          <SectionHeading
            eyebrow='Implementation'
            title='Live with a team that knows HR and finance'
            subtitle='Index of Solutions implements Index HR end to end, with the same team that supports you afterwards.'
          />
          <ol className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {IMPLEMENTATION_STEPS.map(({ title, text }, i) => (
              <li key={title} className='rounded-2xl border border-border-color bg-secondary/30 p-6 flex flex-col gap-3'>
                <span className='font-[jetBrainsMono] text-sm text-primary'>0{i + 1}</span>
                <h3 className='font-[newake] text-2xl text-fg'>{title}</h3>
                <p className='font-[inter] text-sm text-fg/65 leading-relaxed'>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </PageSection>

      {/* Pricing + comparison teasers */}
      <PageSection className='!pt-0'>
        <div className='grid gap-6 md:grid-cols-2'>
          <Link href={INDEX_HR_PRICING} className='group rounded-2xl border border-border-color bg-secondary/30 p-8 flex flex-col gap-3 hover:border-primary/60 transition-colors'>
            <Eyebrow>Pricing</Eyebrow>
            <h3 className='font-[newake] text-3xl text-fg'>From ${PRICING_BANDS[0].monthly} a month, every module included</h3>
            <p className='font-[inter] text-fg/65'>One flat price per headcount band, and 20% off with yearly billing.</p>
            <span className='font-[inter] text-primary flex items-center gap-2'>View pricing <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' aria-hidden='true' /></span>
          </Link>
          <Link href={INDEX_HR_COMPARE} className='group rounded-2xl border border-border-color bg-secondary/30 p-8 flex flex-col gap-3 hover:border-primary/60 transition-colors'>
            <Eyebrow>Compare</Eyebrow>
            <h3 className='font-[newake] text-3xl text-fg'>Index HR vs Zoho People, BambooHR, Rippling, Jisr, MenaITech & ZenHR</h3>
            <p className='font-[inter] text-fg/65'>See how Index HR compares, feature by feature.</p>
            <span className='font-[inter] text-primary flex items-center gap-2'>Read the comparison <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' aria-hidden='true' /></span>
          </Link>
        </div>
      </PageSection>

      {/* Resources */}
      <PageSection className='!pt-0'>
        <RelatedLinks
          title='Guides, tools and regional pages'
          links={[EN_PAGES.bestMiddleEast, EN_PAGES.uae, EN_PAGES.lebanon, EN_PAGES.uaeSalaryRules, AR_PAGES.hrSystem, AR_PAGES.eosCalculator]}
        />
      </PageSection>

      {/* FAQ */}
      <PageSection className='!pt-0'>
        <div className='flex flex-col gap-10'>
          <SectionHeading eyebrow='FAQ' title='Questions about Index HR' />
          <FaqList items={HR_FAQS} />
        </div>
      </PageSection>

      <CtaBand
        title='Ready to simplify your HR operations?'
        text='See Index HR with your own shifts, policies and pay rules. Book a demo and we will walk you through it.'
        primary={{ href: '/contact', label: 'Book a demo' }}
        secondary={{ href: INDEX_HR_PRICING, label: 'See pricing' }}
      />
    </>
  )
}
