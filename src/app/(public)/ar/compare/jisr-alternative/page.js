import React from 'react'
import { getSiteUrl } from '@/lib/site-url'
import { INDEX_HR_COMPARE, INDEX_HR_PRICING, PRICING_BANDS } from '@/data/indexHr'
import { AR_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = AR_PAGES.jisr.href
const perEmployee = PRICING_BANDS[0].monthly / PRICING_BANDS[0].max
const title = 'بديل جسر للموارد البشرية: مقارنة بين Index HR وجسر'
const description =
  'مقارنة منصفة بين Index HR وجسر للموارد البشرية: الأسعار، الحضور والورديات، لغات التطبيق، التكامل الحكومي، التكامل مع Business Central، ومتى يكون كل نظام الخيار الأنسب.'

const crumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'نظام الموارد البشرية', href: AR_PAGES.hrSystem.href },
  { label: 'بديل جسر' },
]

const rows = [
  ['التسعير', `من ${perEmployee} دولارات للموظف شهرياً، جميع الوحدات مشمولة`, 'نحو 17 ريالاً للموظف شهرياً بحسب المنشور'],
  ['لغات تطبيق الموظفين', 'العربية والإنجليزية والفرنسية والهندية والبنغالية والأردية والمالايالامية والتاميلية', 'العربية والإنجليزية'],
  ['الحضور بالموقع الجغرافي', 'نعم، مواقع متعددة ومركز تكلفة لكل حركة', 'نعم'],
  ['الورديات وتبديلها والورديات الليلية', 'نعم، مع مسودة ونشر وأنماط دورية', 'متوفر بحسب المنشور'],
  ['الانتدابات ببنود بدلات وشرائح ساعات', 'نعم', 'غير معلن'],
  ['العهد بتوقيع إلكتروني وإخلاء طرف', 'نعم', 'غير معلن'],
  ['الذكاء الاصطناعي في التوظيف', 'مطابقة السير الذاتية وأسئلة المقابلات', 'مساعدة في إنشاء الإعلانات الوظيفية'],
  ['التكامل مع Microsoft Business Central', 'موصل أصلي للموظفين وقيود الرواتب', 'غير معلن (NetSuite وXero مذكوران)'],
  ['التكامل الحكومي (مدد، قوى، مقيم)', 'حساب التأمينات ومكافأة نهاية الخدمة وملف حماية الأجور', 'تكامل مباشر مع مدد والتأمينات وقوى ومقيم'],
]

const faqs = [
  { q: 'هل Index HR بديل مناسب لجسر؟', a: 'Index HR مناسب للشركات التي لديها فرق عمل بالورديات ومتعددة الجنسيات، أو تستخدم Microsoft Business Central، أو تعمل في أكثر من دولة. أما الشركات العاملة في السعودية فقط وتحتاج تكاملاً مباشراً مع قوى ومقيم من اليوم الأول فقد يناسبها جسر أكثر.' },
  { q: 'هل يمكن نقل بياناتنا من نظام آخر إلى Index HR؟', a: 'نعم، يُستورد الموظفون والأرصدة والمرافقون وعناصر الرواتب من ملفات Excel، ونشغّل الرواتب بالتوازي قبل الانتقال.' },
  { q: 'ما مصدر معلومات جسر في هذه المقارنة؟', a: `من المواقع الرسمية ومواقع المراجعات المستقلة المتاحة للعموم، وقد تمت مراجعتها في ${HR_SEO_UPDATED}. قد تتغير الأسعار والميزات، فتحقق منها لدى الشركة.` },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    inLanguage: 'ar',
    url: `${siteUrl}${path}`,
    dateModified: HR_SEO_UPDATED,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ['بديل جسر', 'جسر للموارد البشرية', 'مقارنة أنظمة الموارد البشرية', 'Jisr alternative'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, locale: 'ar_SA', type: 'article', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function JisrAlternativePage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageSection>
        <div className='flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading as='h1' align='right' eyebrow='مقارنة' title={title} subtitle='جسر نظام سعودي قوي في التكامل الحكومي. Index HR يتميز في العمليات اليومية لفرق العمل متعددة الجنسيات والتكامل مع Business Central. إليك المقارنة بإنصاف.' />

          <div className='w-full overflow-x-auto rounded-2xl border border-border-color'>
            <table className='w-full min-w-[720px] border-collapse text-sm'>
              <caption className='sr-only'>مقارنة بين Index HR وجسر</caption>
              <thead>
                <tr className='bg-secondary'>
                  <th scope='col' className='text-start p-4 text-fg'>الميزة</th>
                  <th scope='col' className='text-start p-4 text-primary bg-primary/15'>Index HR</th>
                  <th scope='col' className='text-start p-4 text-fg'>جسر</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([feature, us, them], i) => (
                  <tr key={feature} className={`border-t border-border-color ${i % 2 ? 'bg-secondary/20' : 'bg-mainbg'}`}>
                    <th scope='row' className='text-start p-4 text-fg font-semibold align-top'>{feature}</th>
                    <td className='p-4 text-fg/85 align-top bg-primary/5'>{us}</td>
                    <td className='p-4 text-fg/65 align-top'>{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='text-xs text-fg/45'>معلومات جسر من مصادر عامة، مراجعة في {HR_SEO_UPDATED}. الأسماء التجارية مملوكة لأصحابها.</p>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='max-w-3xl flex flex-col gap-12'>
          <Prose>
            <h2 id='index-hr-fit'>متى يكون Index HR الخيار الأنسب؟</h2>
            <ul>
              <li>فرق عمل بالورديات في المواقع والمستودعات والفروع، تحتاج حضوراً بالموقع وورديات ليلية وتبديل ورديات.</li>
              <li>عمالة متعددة الجنسيات تحتاج تطبيقاً بالأردية أو الهندية أو البنغالية أو المالايالامية أو التاميلية.</li>
              <li>شركات تستخدم Microsoft Dynamics 365 Business Central وتريد ترحيل الرواتب إليه مباشرة.</li>
              <li>مجموعات تعمل في أكثر من دولة وبأكثر من عملة.</li>
              <li>تفضيل باقة واحدة تشمل التوظيف والأداء والتدريب دون رسوم وحدات إضافية.</li>
            </ul>
            <h2 id='jisr-fit'>متى قد يكون جسر الخيار الأنسب؟</h2>
            <ul>
              <li>منشأة تعمل في السعودية فقط وتحتاج تكاملاً مباشراً مع قوى ومقيم ومدد من اليوم الأول.</li>
              <li>الأولوية لاستضافة البيانات داخل المملكة في الباقة الأساسية.</li>
            </ul>
            <p>للمقارنة مع أنظمة أخرى مثل Zoho People وBambooHR وZenHR، اطلع على <a href={INDEX_HR_COMPARE}>صفحة المقارنة الشاملة</a> و<a href={INDEX_HR_PRICING}>الأسعار</a>.</p>
          </Prose>

          <div className='flex flex-col gap-6'>
            <h2 className='text-fg text-3xl'>أسئلة شائعة</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='صفحات ذات صلة' links={[AR_PAGES.hrSystem, AR_PAGES.payroll, AR_PAGES.eosCalculator]} />
        </div>
      </PageSection>

      <CtaBand
        title='قارن بنفسك على بيانات شركتك'
        text='أحضر جداول الورديات وسياسة الإجازات وعينة من الرواتب، وسنريك كيف يتعامل معها Index HR.'
        primary={{ href: '/contact', label: 'اطلب عرضاً تجريبياً' }}
        secondary={{ href: AR_PAGES.hrSystem.href, label: 'نظام Index HR' }}
      />
    </>
  )
}
