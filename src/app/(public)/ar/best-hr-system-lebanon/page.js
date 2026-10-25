import React from 'react'
import { getSiteUrl } from '@/lib/site-url'
import { PRICING_BANDS } from '@/data/indexHr'
import { AR_PAGES, EN_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'
import VendorRoundup from '@/components/index-hr/VendorRoundup'

const siteUrl = getSiteUrl()
const path = AR_PAGES.bestLebanon.href
const perEmployee = PRICING_BANDS[0].monthly / PRICING_BANDS[0].max
const title = 'أفضل نظام موارد بشرية في لبنان 2026: مقارنة أفضل 7 أنظمة رواتب وموارد بشرية'
const description =
  'أفضل أنظمة الموارد البشرية والرواتب للشركات في لبنان لعام 2026: Index HR وPayPoint HR وIntegral وLevant HR وMagnar HCM وAzkatech وZoho People، مقارنة في الضمان الاجتماعي والرواتب بالدولار والليرة والحضور والسعر.'

const crumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'نظام الموارد البشرية', href: AR_PAGES.hrSystem.href },
  { label: 'أفضل نظام موارد بشرية في لبنان' },
]

const vendors = [
  {
    name: 'Index HR',
    bestFor: 'الشركات اللبنانية ذات الورديات أو الفروع المتعددة، والمجموعات العاملة في لبنان والخليج',
    price: `من ${perEmployee} دولارات للموظف شهرياً (باقة لا تقل عن ${PRICING_BANDS[0].max} موظفاً)، جميع الوحدات`,
    pros: [
      'رواتب بالدولار والليرة في مسير واحد مع مجاميع منفصلة لكل عملة',
      'تعويضات عائلية من بيانات المرافقين، وشرائح متدرجة لضريبة الدخل',
      'حضور بالموقع الجغرافي من الجوال وأجهزة بصمة ZKTeco، مع ورديات وورديات ليلية',
      'تطبيق للموظفين بالعربية والفرنسية والإنجليزية وخمس لغات أخرى',
      'التوظيف والأداء والتدريب والعهد مشمولة، مع تكامل Business Central',
    ],
    cons: ['لا يرفع تصاريح الضمان الاجتماعي مباشرة؛ تُعد من تقارير الرواتب', 'لوحة الإدارة بالإنجليزية فقط', 'علامة أحدث بمراجعات عامة أقل'],
    href: AR_PAGES.hrSystem.href,
    linkLabel: 'تعرّف على Index HR ←',
  },
  {
    name: 'PayPoint HR',
    bestFor: 'الشركات التي تريد حزمة رواتب وحضور لبنانية قائمة منذ سنوات',
    price: 'حسب العرض',
    pros: ['مصمم للبنان: الضمان الاجتماعي والضريبة وتعويض نهاية الخدمة', 'رواتب وحضور وخدمة ذاتية'],
    cons: ['الأسعار غير منشورة', 'تحقق من الإصدار الحالي وخطة التطوير في عرض تجريبي'],
  },
  {
    name: 'Integral',
    bestFor: 'العمليات التي تعتمد على الحضور وربطه بالرواتب',
    price: 'حسب العرض',
    pros: ['مطوّر في بيروت', 'حضور وموارد بشرية ورواتب مع الضمان والضريبة وتعويض نهاية الخدمة', 'تكامل مع Microsoft Dynamics 365'],
    cons: ['الأسعار غير منشورة', 'تحقق من وحدات التوظيف والأداء في عرض تجريبي'],
  },
  {
    name: 'Levant HR',
    bestFor: 'المجموعات العاملة في لبنان والأردن وسوريا والعراق',
    price: 'حسب العرض',
    pros: ['يغطي أربع دول في بلاد الشام', 'دعم الضمان الاجتماعي والرواتب بالليرة', 'حضور بنظام GPS وواجهة عربية وإنجليزية'],
    cons: ['الأسعار غير منشورة', 'تغطية أقل لدول الخليج'],
  },
  {
    name: 'Magnar HCM',
    bestFor: 'الشركات التي تستخدم SAP Business One',
    price: 'حسب العرض',
    pros: ['فروع الضمان الاجتماعي وتعويض نهاية الخدمة', 'رواتب متفق عليها بالدولار ومصرّح عنها بالليرة في مسير واحد', 'مدمج في SAP Business One'],
    cons: ['إضافة على SAP Business One وليس نظاماً مستقلاً', 'يناسب عملاء SAP أساساً'],
  },
  {
    name: 'Azkatech (Odoo HR & Payroll)',
    bestFor: 'الشركات التي تستخدم Odoo',
    price: 'ترخيص Odoo مع تطبيق الشريك',
    pros: ['توطين الرواتب اللبنانية على Odoo: الضمان ووزارة المالية وتعدد العملات', 'نظام واحد مع محاسبة ومخزون Odoo'],
    cons: ['مرتبط بمنصة Odoo', 'التخصيصات قد تزيد جهد الترقيات'],
  },
  {
    name: 'Zoho People',
    bestFor: 'الشركات الصغيرة والمتوسطة التي تستخدم تطبيقات Zoho',
    price: 'من نحو 1.50 دولار للمستخدم شهرياً؛ الرواتب والتوظيف منفصلان',
    pros: ['سعر بداية منخفض', 'نماذج ومسارات قابلة للتخصيص', 'شركاء Zoho محليون'],
    cons: ['الرواتب اللبنانية (الضمان والعملتان) تحتاج إعداداً من شريك', 'الرواتب والتوظيف منتجان منفصلان'],
  },
]

const faqs = [
  { q: 'ما هو أفضل نظام موارد بشرية في لبنان؟', a: 'يعتمد على ما تستخدمه حالياً. للفرق ذات الورديات والفروع التي تريد الحضور والرواتب والتوظيف في نظام واحد: Index HR. لحزمة رواتب محلية قائمة منذ سنوات: PayPoint HR أو Integral. لمستخدمي SAP Business One: Magnar HCM. لمستخدمي Odoo: Azkatech. للمجموعات العاملة في بلاد الشام: Levant HR. لمستخدمي Zoho: Zoho People.' },
  { q: 'ما الذي يجب أن يدعمه نظام الموارد البشرية في لبنان؟', a: 'الرواتب بالدولار و/أو الليرة، واشتراكات الضمان الاجتماعي بفروعها (المرض والأمومة، التعويضات العائلية، تعويض نهاية الخدمة)، والتعويضات العائلية حسب المرافقين، وضريبة الدخل التصاعدية، والحضور. وتتغير النسب والسقوف وسعر الصرف المعتمد للتصريح بتعاميم رسمية، لذا يجب أن تكون إعدادات قابلة للتعديل.' },
  { q: 'هل يمكن دفع الرواتب بالدولار والليرة في النظام نفسه؟', a: 'نعم، تدعم الأنظمة في هذه القائمة الرواتب بعدة عملات. ويُبقي Index HR مجاميع كل عملة منفصلة في تقرير الرواتب.' },
  { q: 'كم تكلفة نظام الموارد البشرية في لبنان؟', a: `يسعّر معظم المزودين المحليين حسب المشروع. أما Index HR فسعره منشور: ${perEmployee} دولارات للموظف شهرياً ضمن باقة لا تقل عن ${PRICING_BANDS[0].max} موظفاً، وتشمل جميع الوحدات.` },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'ar',
    url: `${siteUrl}${path}`,
    datePublished: HR_SEO_UPDATED,
    dateModified: HR_SEO_UPDATED,
    author: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
  },
  { '@context': 'https://schema.org', '@type': 'ItemList', name: title, itemListElement: vendors.map((v, i) => ({ '@type': 'ListItem', position: i + 1, name: v.name })) },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ['أفضل نظام موارد بشرية في لبنان', 'نظام موارد بشرية لبنان', 'برنامج رواتب لبنان', 'نظام الضمان الاجتماعي رواتب', 'أفضل برنامج موارد بشرية'].join(', '),
  alternates: { canonical: path, languages: { ar: path, en: EN_PAGES.bestLebanon.href } },
  openGraph: { title, description, type: 'article', url: path, locale: 'ar_LB' },
  twitter: { card: 'summary_large_image', title, description },
}

const labels = { caption: 'أنظمة الموارد البشرية في لبنان باختصار', platform: 'النظام', bestFor: 'الأنسب لـ', price: 'السعر', strengths: 'نقاط القوة', tradeOffs: 'ما يجب مراعاته' }

export default function BestHrSystemLebanonArabicPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageSection>
        <div className='flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading as='h1' align='right' eyebrow='لبنان · 2026' title={title} subtitle='سبعة أنظمة موارد بشرية ورواتب تستخدمها الشركات اللبنانية، مقارنة فيما يهم محلياً: الضمان الاجتماعي، الرواتب بعملتين، الحضور، والدعم.' />
          <Callout title='إفصاح'>
            نحن Index of Solutions، شركة مقرها بيروت، ونطوّر Index HR المدرج في هذه القائمة. لكل نظام، بما فيه نظامنا، فئة يناسبها ونقاط يجب مراعاتها. معلومات الأنظمة الأخرى من صفحاتها العامة، مراجعة في {HR_SEO_UPDATED}.
          </Callout>
          <VendorRoundup vendors={vendors} labels={labels} />
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='max-w-4xl flex flex-col gap-12'>
          <Prose>
            <h2 id='requirements'>ما الذي يجب أن يدعمه نظام الموارد البشرية في لبنان؟</h2>
            <ul>
              <li><strong>رواتب بعملتين:</strong> كثير من الشركات تتفق على الرواتب بالدولار بينما يُصرّح عن الضمان وضريبة الدخل بالليرة وفق سعر رسمي.</li>
              <li><strong>الضمان الاجتماعي:</strong> اشتراكات موزعة على ثلاثة فروع: المرض والأمومة، التعويضات العائلية، وتعويض نهاية الخدمة، لكل منها نسبة وسقف.</li>
              <li><strong>التعويضات العائلية</strong> حسب الزوج والأولاد المسجلين لكل موظف.</li>
              <li><strong>ضريبة الدخل التصاعدية</strong> على الرواتب.</li>
              <li><strong>تغييرات متكررة:</strong> تتغير النسب والسقوف والتعويضات بتعاميم، لذا يجب أن تكون إعدادات لا تعديلات برمجية.</li>
            </ul>
            <p>تختلف النسب والسقوف بين المصادر المنشورة وتتغير باستمرار، فتحقق دائماً من آخر تعاميم الضمان الاجتماعي ووزارة المالية قبل إعداد الرواتب.</p>

            <h2 id='how-to-choose'>كيف تختار؟</h2>
            <ol>
              <li><strong>ابدأ من نظامك المحاسبي:</strong> SAP Business One يقود إلى Magnar، وOdoo إلى Azkatech، وBusiness Central أو عدم وجود نظام يترك الخيارات مفتوحة.</li>
              <li><strong>انظر إلى من يسجل الحضور:</strong> فرق الورديات والفروع تحتاج حضوراً بالموقع وجداول ورديات وربطاً بأجهزة البصمة.</li>
              <li><strong>اطلب قسيمة راتب نموذجية</strong> تُظهر الراتب بالدولار والتصريح بالليرة وفروع الضمان والتعويض العائلي.</li>
              <li><strong>احسب الوحدات التي ستدفع ثمنها:</strong> التوظيف والأداء غالباً إضافيان.</li>
              <li><strong>تحقق من الدعم المحلي</strong> بالعربية والفرنسية والإنجليزية.</li>
            </ol>
          </Prose>

          <div className='flex flex-col gap-6'>
            <h2 className='text-fg text-3xl'>أسئلة شائعة</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='صفحات ذات صلة' links={[AR_PAGES.hrSystem, AR_PAGES.payroll, EN_PAGES.bestLebanon]} />
        </div>
      </PageSection>

      <CtaBand
        title='جرّب Index HR على رواتب شركتك في لبنان'
        text='أحضر عينة شهر برواتب بالدولار والضمان والتعويضات العائلية، وسنشغّلها معك.'
        primary={{ href: '/contact', label: 'اطلب عرضاً تجريبياً' }}
        secondary={{ href: AR_PAGES.hrSystem.href, label: 'نظام Index HR' }}
      />
    </>
  )
}
