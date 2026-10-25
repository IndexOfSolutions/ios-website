import IndustriesLayout from '@/components/layouts/Industries'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import Link from 'next/link'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()
const pageUrl = `${siteUrl}/industries/education-erp-lebanon`

const features = [
  {
    icon: '🎓',
    title: 'Tuition & Fee Management',
    body: 'Bill tuition, registration, transport, and activity fees per student or family. Set up instalment plans, sibling discounts, and scholarships, and see what is still unpaid by grade, campus, or term.',
  },
  {
    icon: '💳',
    title: 'Collections & Receivables',
    body: 'Track every payment against the right student account, send automated reminders for overdue instalments, and reconcile bank transfers and cash receipts. Finance can see the cash position without chasing spreadsheets.',
  },
  {
    icon: '🏫',
    title: 'Multi-Campus Accounting',
    body: 'Run several schools, faculties, or branches as separate companies or dimensions in one system. Report on each campus on its own, or roll everything up into one set of financial statements.',
  },
  {
    icon: '📊',
    title: 'Budgeting by Department',
    body: 'Set budgets per faculty, department, or programme and track actual spend against them in real time. Heads of department see their own numbers. The board sees the whole institution.',
  },
  {
    icon: '📚',
    title: 'Procurement & Inventory',
    body: 'Manage purchasing of books, uniforms, lab supplies, and IT equipment with approval workflows. Track stock in school stores and bookshops, and keep a register of fixed assets across every building.',
  },
  {
    icon: '💱',
    title: 'Multi-Currency Fees & Payroll',
    body: 'Bill fees in USD, LBP, or both, and receive payments in mixed currencies with automatic exchange-rate handling. Faculty payroll and HR connect through our Full Stack HR Platform.',
  },
]

const institutions = [
  'Private and international schools (K-12) with one or more campuses',
  'Universities and colleges with multiple faculties and programmes',
  'Training academies and vocational institutes running paid courses',
  'Language centres and tutoring networks with branch locations',
  'Nurseries and early-learning centres managing monthly fees',
  'Educational groups operating several schools under one owner',
]

const faqs = [
  {
    question: 'Is Business Central a student information system?',
    answer: 'No, and it should not try to be. Business Central is the financial and operational backbone: fees, collections, procurement, assets, budgets, and reporting. Admissions, attendance, grades, and timetables stay in your student information system (SIS) or LMS. We integrate the two so student and enrolment data flows into Business Central for billing, and nothing is keyed in twice.',
  },
  {
    question: 'Can we bill families with several children and different instalment plans?',
    answer: 'Yes. We configure family-level accounts that group siblings, apply sibling discounts automatically, and support different instalment schedules per student. Scholarships and financial aid are recorded as discounts or separate funding sources, so you can report exactly how much aid the institution gives each year.',
  },
  {
    question: 'We run several campuses. Can each one have its own reports?',
    answer: 'Yes. Each campus can be a separate company or a dimension in one company, depending on your legal and reporting structure. Campus managers see their own fees, costs, and budgets, and head office gets consolidated reports for the whole group.',
  },
  {
    question: 'How long does an implementation take for a school or university?',
    answer: 'A single-campus school typically goes live in 8 to 12 weeks. Universities and multi-campus groups with SIS integration usually take 12 to 20 weeks. We plan go-live around the academic calendar, usually before registration opens, so the new term starts on the new system.',
  },
]

const relatedServices = [
  { href: '/services/business-central-implementation', label: 'Business Central Implementation' },
  { href: '/services/full-stack-hr-platform', label: 'Full Stack HR Platform for Faculty & Staff' },
  { href: '/services/power-bi-and-analytics', label: 'Power BI Dashboards for Enrolment & Finance' },
  { href: '/industries/ngo-erp-lebanon', label: 'ERP for NGOs & Non-Profits' },
]

const industryJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      'name': 'Business Central ERP for Schools, Universities and Academies in Lebanon',
      'serviceType': 'Education ERP implementation',
      'description': 'Microsoft Dynamics 365 Business Central for educational institutions in Lebanon: tuition and fee management, collections, multi-campus accounting, departmental budgeting, procurement, and multi-currency reporting.',
      'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
      'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
      'audience': { '@type': 'EducationalAudience', 'educationalRole': 'administrator' },
      'url': pageUrl,
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        'name': question,
        'acceptedAnswer': { '@type': 'Answer', 'text': answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${siteUrl}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Industries' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Education ERP', 'item': pageUrl },
      ],
    },
  ],
}

export const metadata = {
  title: 'School & University ERP in Lebanon',
  description:
    'Business Central ERP for schools, universities and academies in Lebanon: tuition and fee billing, collections, multi-campus accounting, budgets and procurement.',
  keywords: [
    'education ERP Lebanon',
    'school ERP Lebanon',
    'university ERP Lebanon',
    'school management software Lebanon',
    'tuition fee management system',
    'Business Central for education',
    'ERP for academies Lebanon',
    'school accounting software Beirut',
  ].join(', '),
  alternates: { canonical: pageUrl },
  openGraph: {
    url: pageUrl,
    title: 'School & University ERP in Lebanon | Business Central',
    description: 'Tuition billing, collections, multi-campus accounting and budgeting for Lebanese schools, universities and academies with Business Central.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/business-central-training.webp`, alt: 'Business Central for Schools and Universities in Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School & University ERP in Lebanon | Business Central',
    description: 'Tuition billing, collections and multi-campus accounting for schools, universities and academies in Lebanon.',
  },
}

export default function EducationERPLebanon() {
  return (
    <IndustriesLayout
      jsonLd={industryJsonLd}
      title={'Business Central ERP for Schools, Universities & Academies'}
      imageURL={'business-central-training'}
      imageAlt={'Business Central ERP for Schools and Universities in Lebanon'}
    >
      <p className='font-[inter] text-lg'>
        Schools, universities, and academies in Lebanon are run like businesses, even when they are not meant to make a profit. Fees are billed in more than one currency, families pay in instalments, campuses share costs, and boards want accurate numbers every term. Microsoft Dynamics 365 Business Central brings fee billing, collections, budgeting, and procurement into one system, so administrators spend less time reconciling spreadsheets and more time on the institution.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What Business Central Does for Educational Institutions</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>
          {features.map(({ icon, title, body }) => (
            <div key={title} className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
              <span className='text-3xl' aria-hidden='true'>{icon}</span>
              <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>{title}</h3>
              <p className='text-fg font-[inter]'>{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Why Lebanese Schools and Universities Are Moving to ERP</h2>
        <p className='font-[inter]'>
          Since 2019, educational institutions in Lebanon have had to move between LBP and USD fee structures, reprice tuition mid-year, and manage arrears from families under financial pressure. Accounting packages and spreadsheets were not built for that. The usual result is late reports, unclear receivables, and budgets that are out of date before the year starts.
        </p>
        <p className='font-[inter]'>
          Business Central gives finance teams one source of truth: every invoice, payment, and expense is posted to the right student, campus, and department as it happens. Accreditation bodies, auditors, and boards get consistent, auditable reports, and leadership can decide on fees, salaries, and investments using current figures.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Institutions We Work With</h2>
        <ul className='font-[inter] flex flex-col gap-3 list-none'>
          {institutions.map((item) => (
            <li key={item} className='flex items-start gap-3'>
              <span className='text-primary mt-1'>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Education ERP: Common Questions</h2>
        {faqs.map(({ question, answer }) => (
          <div key={question} className='flex flex-col gap-4'>
            <QuestionBubbleCard question={question} />
            <AnswerBubbleCard answer={answer} />
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Related Services</h2>
        <ul className='font-[inter] flex flex-col gap-3 list-none'>
          {relatedServices.map(({ href, label }) => (
            <li key={href} className='flex items-start gap-3'>
              <span className='text-primary mt-1'>→</span>
              <Link href={href} className='hover:text-primary underline underline-offset-4'>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['Education ERP', 'Business Central', 'School ERP', 'University ERP', 'Fee Management', 'Lebanon'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </IndustriesLayout>
  )
}
