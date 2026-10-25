import React from 'react'
import { getSiteUrl } from '@/lib/site-url'
import { AR_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = AR_PAGES.probation.href
const title = 'فترة التجربة في نظام العمل السعودي بعد تعديلات 2025'
const description =
  'مدة فترة التجربة في نظام العمل السعودي بعد التعديلات النافذة في فبراير 2025: الحد الأقصى 180 يوماً، وشرط النص عليها في العقد، وحق الطرفين في الإنهاء، وما لا يُحتسب منها.'

const crumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'نظام الموارد البشرية', href: AR_PAGES.hrSystem.href },
  { label: 'فترة التجربة' },
]

const faqs = [
  { q: 'كم مدة فترة التجربة في نظام العمل السعودي؟', a: 'بعد تعديل المادة 53 النافذ منذ 19 فبراير 2025، يجوز أن تصل فترة التجربة إلى 180 يوماً كحد أقصى، بشرط النص عليها صراحة في عقد العمل.' },
  { q: 'هل يجوز تمديد فترة التجربة؟', a: 'كان النظام السابق يحدد 90 يوماً قابلة للتمديد 90 يوماً أخرى باتفاق مكتوب. أما بعد التعديل فتُحدد المدة في العقد مباشرة بما لا يتجاوز 180 يوماً.' },
  { q: 'هل يحق إنهاء العقد خلال فترة التجربة؟', a: 'نعم، لكل من الطرفين حق إنهاء العقد خلال فترة التجربة وفق ما ينص عليه العقد ونظام العمل.' },
  { q: 'هل تُحتسب الإجازات من فترة التجربة؟', a: 'كان النظام قبل التعديل يستبعد إجازتي عيد الفطر والأضحى والإجازة المرضية من فترة التجربة، وأحالت التعديلات تحديد ما يُستبعد إلى اللائحة التنفيذية، فراجع اللائحة الحالية لدى وزارة الموارد البشرية.' },
  { q: 'هل يجوز وضع العامل تحت التجربة أكثر من مرة؟', a: 'الأصل عدم جواز وضع العامل في فترة تجربة أكثر من مرة لدى صاحب العمل نفسه، إلا في حالات يحددها النظام مثل العمل في مهنة أو وظيفة مختلفة.' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'ar',
    url: `${siteUrl}${path}`,
    dateModified: HR_SEO_UPDATED,
    datePublished: HR_SEO_UPDATED,
    author: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: `${title} | Index HR` },
  description,
  keywords: ['فترة التجربة في نظام العمل السعودي', 'مدة فترة التجربة', 'المادة 53 نظام العمل', 'تعديلات نظام العمل 2025'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, locale: 'ar_SA', type: 'article', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function ProbationGuidePage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageSection>
        <div className='max-w-3xl flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading as='h1' align='right' eyebrow='دليل' title={title} subtitle='ما الذي تغير في المادة 53، وكيف تدير فترات التجربة في منشأتك دون مخالفة.' />
          <p className='text-sm text-fg/45'>آخر تحديث: {HR_SEO_UPDATED}</p>

          <Prose>
            <h2 id='duration'>مدة فترة التجربة بعد التعديل</h2>
            <p>عُدلت المادة 53 من نظام العمل ضمن التعديلات الصادرة بالمرسوم الملكي م/44 والنافذة منذ <strong>19 فبراير 2025</strong>. وبموجبها يجوز أن تصل فترة التجربة إلى <strong>180 يوماً</strong> كحد أقصى، على أن يُنص عليها صراحة في عقد العمل.</p>
            <table>
              <thead><tr><th></th><th>قبل التعديل</th><th>بعد التعديل</th></tr></thead>
              <tbody>
                <tr><td>المدة الأساسية</td><td>90 يوماً</td><td>حتى 180 يوماً</td></tr>
                <tr><td>التمديد</td><td>90 يوماً إضافية باتفاق مكتوب</td><td>تُحدد المدة كاملة في العقد</td></tr>
                <tr><td>الإنهاء خلال التجربة</td><td>بحسب العقد</td><td>حق لكل من الطرفين</td></tr>
              </tbody>
            </table>

            <h2 id='contract'>شرط النص في العقد</h2>
            <p>لا تقوم فترة التجربة إلا إذا نص عليها عقد العمل صراحة وحدد مدتها. وإذا لم يتضمن العقد فترة تجربة، يُعد العامل مثبتاً من أول يوم.</p>

            <h2 id='excluded'>ما الذي لا يُحتسب من فترة التجربة؟</h2>
            <p>كان النظام قبل التعديل يستبعد من فترة التجربة إجازتي عيد الفطر وعيد الأضحى والإجازة المرضية. وأحالت التعديلات تحديد الإجازات المستبعدة إلى اللائحة التنفيذية، لذا ننصح بمراجعة اللائحة السارية قبل حساب تاريخ انتهاء التجربة.</p>

            <h2 id='rights'>الحقوق عند الإنهاء خلال التجربة</h2>
            <ul>
              <li>يحق لكل من الطرفين إنهاء العقد خلال فترة التجربة وفق العقد.</li>
              <li>يستحق العامل أجره عن المدة التي عملها وأجر ما استحقه من إجازة.</li>
              <li>تُحسب مكافأة نهاية الخدمة بحسب الحالة ونوع الإنهاء، ويمكنك تقديرها عبر <a href={AR_PAGES.eosCalculator.href}>حاسبة مكافأة نهاية الخدمة</a>.</li>
            </ul>

            <h2 id='manage'>كيف تدير فترات التجربة عملياً؟</h2>
            <ol>
              <li>حدد مدة التجربة في نموذج العقد لكل وظيفة.</li>
              <li>سجّل تاريخ انتهاء التجربة في ملف الموظف.</li>
              <li>ذكّر المدير المباشر قبل انتهاء التجربة بوقت كافٍ لتقييم الموظف.</li>
              <li>وثّق قرار التثبيت أو الإنهاء قبل التاريخ.</li>
            </ol>
          </Prose>

          <Callout title='تنبيهات انتهاء التجربة في Index HR'>
            يحفظ Index HR مدة التجربة وتاريخ انتهائها في ملف كل موظف، ويعرض الموظفين تحت التجربة في الصفحة الرئيسية، ويرسل تنبيهاً قبل انتهاء التجربة بالمدة التي تحددها للموظف أو لمديره.
          </Callout>

          <div className='flex flex-col gap-6'>
            <h2 className='text-fg text-3xl'>أسئلة شائعة</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='أدوات وأدلة ذات صلة' links={[AR_PAGES.eosCalculator, AR_PAGES.wps, AR_PAGES.hrSystem]} />
        </div>
      </PageSection>

      <CtaBand
        title='لا تفوّت تاريخ انتهاء أي فترة تجربة'
        text='تنبيهات العقود والتجربة والإقامات في نظام واحد.'
        primary={{ href: '/contact', label: 'اطلب عرضاً تجريبياً' }}
        secondary={{ href: AR_PAGES.hrSystem.href, label: 'نظام Index HR' }}
      />
    </>
  )
}
