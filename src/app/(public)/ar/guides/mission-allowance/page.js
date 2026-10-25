import React from 'react'
import { getSiteUrl } from '@/lib/site-url'
import { AR_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = AR_PAGES.mission.href
const title = 'طريقة حساب بدل الانتداب في القطاع الخاص'
const description =
  'كيف تحدد شركات القطاع الخاص في السعودية بدل الانتداب: دور لائحة تنظيم العمل والعقد، وطرق الحساب الشائعة باليوم أو بالساعات، مع مثال محلول.'

const crumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'نظام الموارد البشرية', href: AR_PAGES.hrSystem.href },
  { label: 'بدل الانتداب' },
]

const faqs = [
  { q: 'هل يحدد نظام العمل مبلغ بدل الانتداب في القطاع الخاص؟', a: 'لا يحدد نظام العمل مبلغاً ثابتاً لبدل الانتداب في القطاع الخاص كما هو الحال في لائحة الخدمة المدنية. يُحدد البدل في عقد العمل أو لائحة تنظيم العمل الداخلية للمنشأة، مع التزام صاحب العمل بتحمل نفقات تنقل العامل لأداء العمل خارج مقره.' },
  { q: 'كيف يُحسب بدل الانتداب عادة؟', a: 'الطرق الشائعة: مبلغ يومي ثابت عن كل يوم انتداب، أو نسبة من الأجر اليومي، أو مبالغ حسب شرائح الساعات، مع بنود منفصلة للسكن والتنقل والإعاشة.' },
  { q: 'هل يُحتسب يوم الانتداب غياباً؟', a: 'لا، يوم الانتداب يوم عمل، ويجب ألا يظهر غياباً في كشف الحضور أو يُخصم من الراتب.' },
  { q: 'هل يدخل بدل الانتداب في مكافأة نهاية الخدمة؟', a: 'بدل الانتداب مبلغ مؤقت مرتبط بالمهمة وليس جزءاً ثابتاً من الأجر، لذلك لا يدخل عادة في أجر احتساب مكافأة نهاية الخدمة.' },
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
  keywords: ['طريقة حساب الانتداب للقطاع الخاص', 'بدل الانتداب', 'حساب بدل الانتداب', 'لائحة تنظيم العمل'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, locale: 'ar_SA', type: 'article', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function MissionAllowanceGuidePage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageSection>
        <div className='max-w-3xl flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading as='h1' align='right' eyebrow='دليل' title={title} subtitle='الانتداب في القطاع الخاص تحكمه سياسة المنشأة. إليك الطرق الشائعة لحسابه وتنظيمه.' />
          <p className='text-sm text-fg/45'>آخر تحديث: {HR_SEO_UPDATED}</p>

          <Prose>
            <h2 id='legal'>هل يحدد النظام بدل الانتداب؟</h2>
            <p>على خلاف القطاع الحكومي الذي تحدد لائحته مبالغ الانتداب حسب المرتبة، <strong>لا يضع نظام العمل مبلغاً محدداً لبدل الانتداب في القطاع الخاص</strong>. يُترك تحديده لعقد العمل أو <strong>لائحة تنظيم العمل</strong> الداخلية للمنشأة، ويلتزم صاحب العمل بتحمل تكاليف انتقال العامل وإقامته عند تكليفه بعمل خارج مقر عمله.</p>

            <h2 id='methods'>طرق حساب بدل الانتداب الشائعة</h2>
            <table>
              <thead><tr><th>الطريقة</th><th>كيف تعمل</th><th>مناسبة لـ</th></tr></thead>
              <tbody>
                <tr><td>مبلغ يومي ثابت</td><td>مبلغ محدد عن كل يوم انتداب حسب الدرجة الوظيفية</td><td>الانتدابات الطويلة والسفر</td></tr>
                <tr><td>نسبة من الأجر اليومي</td><td>نسبة من (الأجر الشهري ÷ 30) عن كل يوم</td><td>ربط البدل بمستوى الأجر</td></tr>
                <tr><td>شرائح بالساعات</td><td>مبلغ حسب مدة المهمة: حتى 4 ساعات، 4–8 ساعات، أكثر من 8</td><td>المهام الميدانية القصيرة والتوصيل</td></tr>
                <tr><td>بنود منفصلة</td><td>سكن وتنقل وإعاشة كل منها ببند مستقل</td><td>السفر خارج المدينة أو الدولة</td></tr>
              </tbody>
            </table>

            <h2 id='example'>مثال محلول</h2>
            <p>تنص لائحة منشأة على 300 ريال يومياً للانتداب داخل المملكة، و150 ريالاً للمهام بين 4 و8 ساعات. موظف انتُدب 3 أيام إلى مدينة أخرى ثم نفذ مهمة لمدة 6 ساعات:</p>
            <ul>
              <li>الانتداب: 3 × 300 = 900 ريال</li>
              <li>المهمة القصيرة: 150 ريالاً</li>
              <li><strong>الإجمالي: 1,050 ريالاً</strong> تُصرف مع الراتب كبند مستقل</li>
            </ul>
            <p>الأرقام هنا للتوضيح فقط؛ اعتمد المبالغ الواردة في لائحة منشأتك.</p>

            <h2 id='policy'>عناصر سياسة انتداب واضحة</h2>
            <ol>
              <li>أنواع الانتداب (داخلي، خارجي، مهمة قصيرة) وبدل كل نوع.</li>
              <li>من يعتمد الانتداب، وهل يُعتمد مسبقاً.</li>
              <li>كيف يُثبت تنفيذ المهمة ومدتها.</li>
              <li>متى يُصرف البدل: مع الراتب أو مقدماً.</li>
              <li>التأكيد على أن يوم الانتداب لا يُحتسب غياباً.</li>
            </ol>
          </Prose>

          <Callout title='الانتدابات في Index HR'>
            تُعرّف في Index HR أنواع الانتداب ببنود بدلات متعددة وشرائح ساعات، ويعتمدها المدير المباشر من التطبيق، وتُصرف تلقائياً في مسير الرواتب، ولا يظهر يوم الانتداب غياباً أبداً.
          </Callout>

          <div className='flex flex-col gap-6'>
            <h2 className='text-fg text-3xl'>أسئلة شائعة</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='أدوات وأدلة ذات صلة' links={[AR_PAGES.overtimeCalculator, AR_PAGES.payroll, AR_PAGES.hrSystem]} />
        </div>
      </PageSection>

      <CtaBand
        title='انتدابات تُعتمد وتُصرف دون أوراق'
        text='من طلب الانتداب في التطبيق إلى بند البدل في مسير الرواتب.'
        primary={{ href: '/contact', label: 'اطلب عرضاً تجريبياً' }}
        secondary={{ href: AR_PAGES.hrSystem.href, label: 'نظام Index HR' }}
      />
    </>
  )
}
