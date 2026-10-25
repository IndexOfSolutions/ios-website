import React from 'react'
import { getSiteUrl } from '@/lib/site-url'
import { AR_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'
import OvertimeCalculator from '@/components/index-hr/OvertimeCalculator'

const siteUrl = getSiteUrl()
const path = AR_PAGES.overtimeCalculator.href
const title = 'حاسبة العمل الإضافي في السعودية وساعات العمل في رمضان'
const description =
  'احسب أجر ساعات العمل الإضافي وفق المادة 107 من نظام العمل السعودي: أجر الساعة مضافاً إليه 50% من الأجر الأساسي، مع ساعات العمل في رمضان للقطاع الخاص.'

const crumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'نظام الموارد البشرية', href: AR_PAGES.hrSystem.href },
  { label: 'حاسبة العمل الإضافي' },
]

const faqs = [
  { q: 'كيف يُحسب أجر العمل الإضافي في السعودية؟', a: 'وفق المادة 107 يدفع صاحب العمل عن كل ساعة إضافية أجر الساعة مضافاً إليه 50% من أجر الساعة الأساسي. فإذا كان الأجر الفعلي 6,750 ريالاً والأساسي 5,000 ريال، فأجر الساعة الإضافية = 6,750 ÷ 240 + (5,000 ÷ 240 × 50%) ≈ 38.54 ريالاً.' },
  { q: 'كم عدد ساعات العمل في رمضان للقطاع الخاص؟', a: 'تُخفض ساعات العمل الفعلية للعاملين المسلمين في رمضان بحيث لا تزيد على ست ساعات يومياً أو ستٍّ وثلاثين ساعة أسبوعياً (المادة 98). وما زاد على ذلك يُعد عملاً إضافياً.' },
  { q: 'هل العمل في يوم الراحة الأسبوعية أو الإجازة الرسمية عمل إضافي؟', a: 'نعم، تُعامل ساعات العمل في أيام الراحة الأسبوعية والأعياد والعطلات الرسمية معاملة ساعات العمل الإضافي.' },
  { q: 'ما الحد المعتاد لساعات العمل؟', a: 'لا يجوز تشغيل العامل أكثر من ثماني ساعات يومياً إذا اعتمد صاحب العمل المعيار اليومي، أو ثمانٍ وأربعين ساعة أسبوعياً إذا اعتمد المعيار الأسبوعي.' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    description,
    url: `${siteUrl}${path}`,
    inLanguage: 'ar',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'SAR' },
    publisher: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
    dateModified: HR_SEO_UPDATED,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: `${title} | Index HR` },
  description,
  keywords: ['حاسبة العمل الإضافي في السعودية', 'برنامج حساب ساعات العمل الإضافي', 'عدد ساعات العمل في رمضان للقطاع الخاص', 'المادة 107 نظام العمل'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, locale: 'ar_SA', type: 'website', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function OvertimeCalculatorPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageSection>
        <div className='flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading
            as='h1'
            align='right'
            eyebrow='أداة مجانية'
            title='حاسبة العمل الإضافي وفق نظام العمل السعودي'
            subtitle='أدخل الراتب الأساسي والبدلات وعدد الساعات الإضافية لتعرف أجرها المستحق وفق المادة 107.'
          />
          <OvertimeCalculator />
          <p className='font-[inter] text-sm text-fg/45'>آخر تحديث: {HR_SEO_UPDATED}</p>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='max-w-3xl flex flex-col gap-12'>
          <Prose>
            <h2 id='formula'>معادلة أجر العمل الإضافي</h2>
            <p>تنص المادة 107 على أن يدفع صاحب العمل للعامل عن ساعات العمل الإضافية <strong>أجراً إضافياً يوازي أجر الساعة مضافاً إليه 50% من أجره الأساسي</strong>. وبتطبيق ذلك على شهر من 30 يوماً و8 ساعات يومياً (240 ساعة):</p>
            <ul>
              <li>أجر الساعة = (الراتب الأساسي + البدلات الثابتة) ÷ 240</li>
              <li>علاوة العمل الإضافي = (الراتب الأساسي ÷ 240) × 50%</li>
              <li>أجر الساعة الإضافية = أجر الساعة + علاوة العمل الإضافي</li>
            </ul>
            <p>تختلف بعض الحاسبات المنشورة في احتساب البدلات ضمن أجر الساعة؛ والمعتمد في هذه الحاسبة نص المادة: أجر الساعة كاملاً مع نصف أجر الساعة الأساسي. وإذا نص عقدك على أجر أعلى فالعبرة بالعقد.</p>

            <h2 id='example'>مثال محلول</h2>
            <p>راتب أساسي 5,000 ريال وبدلات 1,750 ريالاً، و20 ساعة إضافية في الشهر:</p>
            <ul>
              <li>أجر الساعة: 6,750 ÷ 240 = 28.13 ريالاً</li>
              <li>العلاوة: 5,000 ÷ 240 × 50% = 10.42 ريالات</li>
              <li>أجر الساعة الإضافية: 38.54 ريالاً، والإجمالي <strong>770.83 ريالاً</strong></li>
            </ul>

            <h2 id='ramadan'>ساعات العمل في رمضان للقطاع الخاص</h2>
            <p>تُخفض ساعات العمل الفعلية للعاملين المسلمين في شهر رمضان بحيث <strong>لا تزيد على 6 ساعات يومياً أو 36 ساعة أسبوعياً</strong> (المادة 98)، وتعلن وزارة الموارد البشرية والتنمية الاجتماعية مواعيد الدوام سنوياً. وأي عمل يزيد على هذا الحد خلال رمضان يُحسب عملاً إضافياً.</p>

            <h2 id='holidays'>العمل في أيام الراحة والعطلات الرسمية</h2>
            <p>ساعات العمل في يوم الراحة الأسبوعية أو في الأعياد والعطلات الرسمية تُعامل معاملة العمل الإضافي، ويجوز تعويض العامل عنها بيوم راحة بديل إذا اتفق الطرفان على ذلك وفق لائحة تنظيم العمل.</p>
          </Prose>

          <Callout title='العمل الإضافي في Index HR'>
            يحسب Index HR ساعات العمل الإضافي تلقائياً من البصمة وتسجيل الحضور بالموقع الجغرافي، ويرسلها للاعتماد قبل صرفها، ويُظهر التأخير والعمل الإضافي في بندين منفصلين في مسير الرواتب دون مقاصة بينهما.
          </Callout>

          <div className='flex flex-col gap-6'>
            <h2 className='font-[newake] text-fg text-3xl'>أسئلة شائعة</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='أدوات وأدلة ذات صلة' links={[AR_PAGES.eosCalculator, AR_PAGES.payroll, AR_PAGES.mission]} />
        </div>
      </PageSection>

      <CtaBand
        title='احسب العمل الإضافي لكل فريقك تلقائياً'
        text='من البصمة إلى مسير الرواتب دون جداول Excel.'
        primary={{ href: AR_PAGES.hrSystem.href, label: 'تعرّف على Index HR' }}
        secondary={{ href: '/contact', label: 'اطلب عرضاً تجريبياً' }}
      />
    </>
  )
}
