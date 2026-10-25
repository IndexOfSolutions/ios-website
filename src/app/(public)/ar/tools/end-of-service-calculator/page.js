import React from 'react'
import { getSiteUrl } from '@/lib/site-url'
import { AR_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'
import EndOfServiceCalculator from '@/components/index-hr/EndOfServiceCalculator'

const siteUrl = getSiteUrl()
const path = AR_PAGES.eosCalculator.href
const title = 'حاسبة مكافأة نهاية الخدمة 2026 وفق نظام العمل السعودي'
const description =
  'احسب مكافأة نهاية الخدمة في القطاع الخاص السعودي مع بدل الإجازات غير المستخدمة: حالات الاستقالة والإنهاء، والمواد 84 و85 و87، مع أمثلة محلولة.'

const crumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'نظام الموارد البشرية', href: AR_PAGES.hrSystem.href },
  { label: 'حاسبة مكافأة نهاية الخدمة' },
]

const faqs = [
  { q: 'كيف تُحسب مكافأة نهاية الخدمة في السعودية؟', a: 'أجر نصف شهر عن كل سنة من السنوات الخمس الأولى، وأجر شهر كامل عن كل سنة بعدها، وتُحسب أجزاء السنة بنسبة ما قضاه العامل منها (المادة 84). ويُعتمد الأجر الأخير الذي كان يتقاضاه العامل.' },
  { q: 'هل يستحق الموظف المكافأة إذا استقال؟', a: 'نعم بحسب مدة الخدمة (المادة 85): لا شيء لأقل من سنتين، وثلث المكافأة من سنتين إلى أقل من خمس، وثلثاها من خمس إلى أقل من عشر، والمكافأة كاملة بعد عشر سنوات.' },
  { q: 'متى تستحق المكافأة كاملة رغم الاستقالة؟', a: 'إذا ترك العامل العمل لقوة قاهرة، أو تركت العاملة العمل خلال ستة أشهر من الزواج أو ثلاثة أشهر من الوضع (المادة 87)، أو ترك العامل العمل في الحالات التي يُخل فيها صاحب العمل بالتزاماته (المادة 81).' },
  { q: 'هل يدخل بدل السكن والنقل في حساب المكافأة؟', a: 'تُحسب المكافأة على أساس الأجر الأخير، والمعتمد عملياً هو الأجر الفعلي: الراتب الأساسي مع البدلات الثابتة كالسكن والنقل. ولا يدخل العمل الإضافي والعمولات المتغيرة. راجع عقدك إذا كانت فيه شروط أفضل للعامل.' },
  { q: 'هل يُصرف بدل الإجازات غير المستخدمة مع المكافأة؟', a: 'نعم، يستحق العامل عند انتهاء العلاقة أجر أيام الإجازة السنوية المستحقة التي لم يستخدمها، ويُحسب عادة بقسمة الأجر الشهري على 30 وضرب الناتج في عدد الأيام.' },
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
  keywords: ['حاسبة مكافأة نهاية الخدمة', 'حساب نهاية الخدمة مع الإجازات', 'طريقة احتساب نهاية الخدمة', 'مكافأة نهاية الخدمة في حالة الاستقالة', 'نظام العمل السعودي'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, locale: 'ar_SA', type: 'website', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function EndOfServiceCalculatorPage() {
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
            title='حاسبة مكافأة نهاية الخدمة وفق نظام العمل السعودي'
            subtitle='أدخل تاريخ المباشرة والأجر وسبب انتهاء العلاقة، لتحصل فوراً على المكافأة المستحقة وبدل الإجازات غير المستخدمة.'
          />
          <EndOfServiceCalculator />
          <p className='font-[inter] text-sm text-fg/45'>آخر تحديث: {HR_SEO_UPDATED}</p>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='max-w-3xl flex flex-col gap-12'>
          <Prose>
            <h2 id='formula'>طريقة احتساب مكافأة نهاية الخدمة</h2>
            <p>تنص المادة 84 من نظام العمل على أن يدفع صاحب العمل للعامل عند انتهاء العلاقة العمالية مكافأة عن مدة خدمته، تُحسب على أساس <strong>أجر نصف شهر عن كل سنة من السنوات الخمس الأولى، وأجر شهر عن كل سنة من السنوات التالية</strong>، ويستحق العامل مكافأة عن أجزاء السنة بنسبة ما قضاه منها في العمل.</p>
            <table>
              <thead><tr><th>مدة الخدمة</th><th>المكافأة عن كل سنة</th></tr></thead>
              <tbody>
                <tr><td>السنوات الخمس الأولى</td><td>أجر نصف شهر</td></tr>
                <tr><td>كل سنة بعد الخامسة</td><td>أجر شهر كامل</td></tr>
              </tbody>
            </table>

            <h2 id='resignation'>مكافأة نهاية الخدمة في حالة الاستقالة</h2>
            <p>إذا كان انتهاء العلاقة بسبب استقالة العامل، فإن المادة 85 تجعل استحقاقه بحسب مدة خدمته:</p>
            <table>
              <thead><tr><th>مدة الخدمة عند الاستقالة</th><th>نسبة الاستحقاق</th></tr></thead>
              <tbody>
                <tr><td>أقل من سنتين</td><td>لا يستحق مكافأة</td></tr>
                <tr><td>من سنتين إلى أقل من 5 سنوات</td><td>ثلث المكافأة</td></tr>
                <tr><td>من 5 إلى أقل من 10 سنوات</td><td>ثلثا المكافأة</td></tr>
                <tr><td>10 سنوات فأكثر</td><td>المكافأة كاملة</td></tr>
              </tbody>
            </table>
            <p>أما إنهاء العقد من صاحب العمل أو انتهاء مدة العقد المحدد المدة، فيستحق معه العامل المكافأة كاملة أياً كانت مدة خدمته، ما لم يكن الفصل في إحدى الحالات التي يجيزها النظام دون مكافأة.</p>

            <h2 id='full-award'>حالات استحقاق المكافأة كاملة رغم ترك العمل</h2>
            <ul>
              <li>ترك العمل نتيجة قوة قاهرة خارجة عن إرادة العامل (المادة 87).</li>
              <li>إنهاء العاملة عقدها خلال ستة أشهر من تاريخ عقد زواجها أو خلال ثلاثة أشهر من تاريخ وضعها (المادة 87).</li>
              <li>ترك العامل العمل دون إشعار في الحالات التي يُخل فيها صاحب العمل بالتزاماته الجوهرية (المادة 81).</li>
            </ul>

            <h2 id='wage'>ما الأجر الذي تُحسب عليه المكافأة؟</h2>
            <p>تُحسب المكافأة على أساس <strong>الأجر الأخير</strong>. والمعتمد في الممارسة هو الأجر الفعلي: الراتب الأساسي مضافاً إليه البدلات الثابتة التي يتقاضاها العامل بانتظام مثل بدل السكن وبدل النقل. أما المبالغ المتغيرة كأجر العمل الإضافي والعمولات والمكافآت غير الدورية فلا تدخل في الحساب.</p>

            <h2 id='examples'>أمثلة محلولة</h2>
            <h3>مثال 1: إنهاء من صاحب العمل بعد 7 سنوات</h3>
            <p>أجر شهري 10,000 ريال. السنوات الخمس الأولى: 5 × نصف شهر = 25,000 ريال. السنتان التاليتان: 2 × شهر = 20,000 ريال. <strong>المكافأة: 45,000 ريال.</strong></p>
            <h3>مثال 2: استقالة بعد 4 سنوات</h3>
            <p>أجر شهري 8,000 ريال. المكافأة الكاملة: 4 × نصف شهر = 16,000 ريال. ولأن المدة بين سنتين وخمس سنوات يستحق الثلث: <strong>5,333.33 ريال.</strong></p>
            <h3>مثال 3: بدل الإجازات غير المستخدمة</h3>
            <p>رصيد 15 يوماً وأجر شهري 10,000 ريال: 10,000 ÷ 30 × 15 = <strong>5,000 ريال</strong> تُضاف إلى المكافأة.</p>
          </Prose>

          <Callout title='احسبها تلقائياً لكل موظف'>
            يحسب نظام Index HR مدة الخدمة والأجر المعتمد من البيانات الفعلية للموظف، ويطبّق نسب الاستقالة تلقائياً، مع حساب مستحقات التأمينات الاجتماعية وملف حماية الأجور للشركات السعودية.
          </Callout>

          <div className='flex flex-col gap-6'>
            <h2 className='font-[newake] text-fg text-3xl'>أسئلة شائعة</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='أدوات وأدلة ذات صلة' links={[AR_PAGES.overtimeCalculator, AR_PAGES.probation, AR_PAGES.wps]} />
        </div>
      </PageSection>

      <CtaBand
        title='نظام موارد بشرية يحسب كل هذا عنك'
        text='الحضور والرواتب ومكافأة نهاية الخدمة والإجازات في نظام واحد، مع تطبيق للموظفين باللغة العربية.'
        primary={{ href: AR_PAGES.hrSystem.href, label: 'تعرّف على Index HR' }}
        secondary={{ href: '/contact', label: 'اطلب عرضاً تجريبياً' }}
      />
    </>
  )
}
