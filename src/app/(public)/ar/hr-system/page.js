import React from 'react'
import Link from 'next/link'
import { ArrowRight, Briefcase, CalendarDays, Clock, Package, Plane, Sparkles, Target, Users, Wallet } from 'lucide-react'
import { getSiteUrl } from '@/lib/site-url'
import { INDEX_HR_BASE, INDEX_HR_PRICING, PRICING_BANDS, SCREENSHOTS } from '@/data/indexHr'
import { AR_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, CheckList, CtaBand, Eyebrow, FaqList, PageSection, PhoneShot, PRIMARY_BUTTON, RelatedLinks, SECONDARY_BUTTON,
  SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = AR_PAGES.hrSystem.href
const perEmployee = PRICING_BANDS[0].monthly / PRICING_BANDS[0].max
const title = 'نظام الموارد البشرية Index HR: الحضور والرواتب والإجازات في منصة واحدة'
const description =
  'Index HR نظام موارد بشرية سحابي للشركات في السعودية والخليج: حضور وانصراف بالموقع الجغرافي، مسير رواتب من الحضور، إجازات، توظيف، تقييم أداء، وتطبيق للموظفين بالعربية و7 لغات أخرى.'

const crumbs = [{ label: 'الرئيسية', href: '/' }, { label: 'نظام الموارد البشرية' }]

const modules = [
  { Icon: Users, title: 'شؤون الموظفين', text: 'ملف كامل لكل موظف: البيانات الشخصية والعقد وفترة التجربة والمرافقين والمستندات وسجل التعديلات، مع هيكل تنظيمي ومخطط إداري.' },
  { Icon: Clock, title: 'الحضور والانصراف', text: 'تسجيل الحضور من الجوال داخل نطاق جغرافي محدد أو من أجهزة البصمة ZKTeco، مع جداول ورديات وتبديل الورديات والورديات الليلية.' },
  { Icon: CalendarDays, title: 'الإجازات', text: 'أنواع إجازات متعددة واستحقاق وترحيل وأرصدة دقيقة لكل حركة، مع مسارات اعتماد متعددة المراحل.' },
  { Icon: Wallet, title: 'مسير الرواتب', text: 'رواتب محسوبة من الحضور والإجازات والعمل الإضافي والسلف، مع عناصر رواتب مرنة ودعم عدة عملات.' },
  { Icon: Plane, title: 'الانتدابات والمهام', text: 'أنواع انتداب ببنود بدلات متعددة وشرائح ساعات، يعتمدها المدير المباشر، ولا يُحتسب يوم الانتداب غياباً.' },
  { Icon: Package, title: 'العُهد والأصول', text: 'سجل العهد بملصقات QR، وتسليم بتوقيع إلكتروني من التطبيق، وإخلاء طرف العهد عند انتهاء الخدمة.' },
  { Icon: Briefcase, title: 'التوظيف', text: 'بوابة وظائف باسم شركتك، ونشر على LinkedIn، ومراحل المتقدمين والمقابلات وخطابات العرض.' },
  { Icon: Target, title: 'الأداء والتدريب', text: 'الأهداف ودورات التقييم والكفاءات وخطط تحسين الأداء، مع برامج التدريب والشهادات وتواريخ انتهائها.' },
  { Icon: Sparkles, title: 'الذكاء الاصطناعي', text: 'مطابقة السير الذاتية مع الوظائف، وإعداد الأوصاف الوظيفية وأسئلة المقابلات، والبحث في قاعدة المرشحين بلغة طبيعية.' },
]

const faqs = [
  { q: 'هل يدعم Index HR اللغة العربية؟', a: 'نعم. تطبيق الموظفين والمديرين متاح بالعربية بواجهة من اليمين إلى اليسار، إضافة إلى الإنجليزية والفرنسية والهندية والبنغالية والأردية والمالايالامية والتاميلية، ويختار كل موظف لغته.' },
  { q: 'هل يحسب النظام مكافأة نهاية الخدمة والتأمينات الاجتماعية؟', a: 'للشركات التي تفعّل حزمة الالتزام السعودي، يحسب Index HR اشتراكات التأمينات الاجتماعية ومكافأة نهاية الخدمة وفق المواد 84–87، ويُصدر ملف رواتب لنظام حماية الأجور.' },
  { q: 'هل يعمل مع أجهزة البصمة؟', a: 'نعم، يتكامل مع أجهزة ZKTeco والأجهزة المتوافقة، وتُعالج حركات الجهاز مع تسجيلات الحضور من الجوال في الحساب نفسه.' },
  { q: 'كم سعر نظام Index HR؟', a: `يبدأ من ${perEmployee} دولارات للموظف شهرياً ضمن باقة لا تقل عن ${PRICING_BANDS[0].max} موظفاً، وتشمل الباقة جميع الوحدات، مع خصم 20% عند الدفع السنوي.` },
  { q: 'هل يتكامل مع Microsoft Dynamics 365 Business Central؟', a: 'نعم، يرسل Index HR بيانات الموظفين ويرحّل مسير الرواتب كقيد يومية إلى Business Central مع ربطه بالحسابات والأبعاد المحاسبية.' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Index HR',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android, Web',
    inLanguage: ['ar', 'en'],
    description,
    url: `${siteUrl}${path}`,
    publisher: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
    offers: { '@type': 'Offer', price: String(perEmployee), priceCurrency: 'USD', url: `${siteUrl}${INDEX_HR_PRICING}` },
    dateModified: HR_SEO_UPDATED,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ['نظام الموارد البشرية', 'برنامج موارد بشرية', 'تطبيق الموارد البشرية', 'حلول الموارد البشرية', 'نظام حضور وانصراف', 'برنامج الرواتب'].join(', '),
  alternates: { canonical: path, languages: { en: INDEX_HR_BASE, ar: path } },
  openGraph: { title, description, locale: 'ar_SA', type: 'website', url: path, images: [{ url: SCREENSHOTS.arabicTablet.src, alt: SCREENSHOTS.arabicTablet.alt }] },
  twitter: { card: 'summary_large_image', title, description },
}

export default function ArabicHrSystemPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageSection className='overflow-hidden'>
        <div className='pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[900px] max-w-full rounded-full bg-primary/20 blur-[120px]' aria-hidden='true' />
        <div className='relative flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <div className='grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
            <div className='flex flex-col gap-6 items-start'>
              <Eyebrow>نظام الموارد البشرية Index HR</Eyebrow>
              <h1 className='text-fg text-4xl md:text-6xl'>كل إجراءات الموارد البشرية <span className='text-primary'>في منصة واحدة</span></h1>
              <p className='text-fg/75 text-lg md:text-xl leading-relaxed max-w-xl'>
                من أول إعلان وظيفي إلى آخر قسيمة راتب: الحضور والورديات والإجازات والرواتب والتوظيف والأداء والعُهد، مع تطبيق جوال يستخدمه كل موظف بلغته.
              </p>
              <div className='flex flex-wrap gap-4'>
                <Link href='/contact' className={PRIMARY_BUTTON}>اطلب عرضاً تجريبياً <ArrowRight className='size-4 rtl:-scale-x-100' aria-hidden='true' /></Link>
                <Link href={INDEX_HR_PRICING} className={SECONDARY_BUTTON}>الأسعار</Link>
              </div>
              <p className='text-sm text-fg/55'>يبدأ من {perEmployee} دولارات للموظف شهرياً · جميع الوحدات مشمولة</p>
            </div>
            <div className='rounded-2xl border-[6px] border-[#2a2a30] overflow-hidden shadow-[0_30px_80px_-20px_rgba(59,130,246,0.45)]'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SCREENSHOTS.arabicTablet.src} alt='تطبيق Index HR باللغة العربية على الجهاز اللوحي' width={1400} height={1050} className='block w-full h-auto' />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='flex flex-col gap-12'>
          <SectionHeading eyebrow='الوحدات' title='كل ما يحتاجه فريق الموارد البشرية' subtitle='تسع وحدات تتشارك ملف الموظف نفسه ومسارات الاعتماد نفسها ومسير الرواتب نفسه.' />
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {modules.map(({ Icon, title: t, text }) => (
              <article key={t} className='rounded-2xl border border-border-color bg-secondary/30 p-7 flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <div className='size-11 shrink-0 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center'>
                    <Icon className='size-5 text-primary' aria-hidden='true' />
                  </div>
                  <h3 className='text-2xl text-fg'>{t}</h3>
                </div>
                <p className='text-fg/70 leading-relaxed'>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className='bg-secondary/20 border-y border-border-color'>
        <div className='grid gap-14 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-6'>
            <SectionHeading align='right' eyebrow='للشركات في السعودية' title='مصمم لبيئة العمل السعودية' subtitle='حزمة الالتزام السعودي تعمل على مستوى كل شركة في حسابك.' />
            <CheckList items={[
              'حساب اشتراكات التأمينات الاجتماعية (GOSI) حسب نوع الموظف',
              'مكافأة نهاية الخدمة وفق المواد 84–87 مع نسب الاستقالة',
              'ملف رواتب لنظام حماية الأجور (WPS)',
              'تنبيهات انتهاء الإقامة والهوية والجواز والعقود',
              'عمل إضافي يُعتمد قبل صرفه، وتأخير يُخصم في بند مستقل',
              'تطبيق بالعربية والأردية والهندية والبنغالية والمالايالامية والتاميلية لفرق العمل متعددة الجنسيات',
            ]} />
          </div>
          <div className='mx-auto grid w-full max-w-lg grid-cols-2 gap-5'>
            <PhoneShot shot={SCREENSHOTS.clockIn} />
            <PhoneShot shot={SCREENSHOTS.leaveBalance} className='translate-y-10' />
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className='max-w-3xl mx-auto flex flex-col gap-10'>
          <SectionHeading eyebrow='أسئلة شائعة' title='أسئلة عن نظام Index HR' />
          <FaqList items={faqs} />
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <RelatedLinks title='أدوات وأدلة مجانية' links={[AR_PAGES.eosCalculator, AR_PAGES.overtimeCalculator, AR_PAGES.payroll, AR_PAGES.wps, AR_PAGES.probation, AR_PAGES.jisr]} />
      </PageSection>

      <CtaBand
        title='جاهز لتبسيط الموارد البشرية في شركتك؟'
        text='شاهد Index HR على ورديات شركتك وسياساتها ورواتبها في عرض تجريبي.'
        primary={{ href: '/contact', label: 'اطلب عرضاً تجريبياً' }}
        secondary={{ href: INDEX_HR_BASE, label: 'English version' }}
      />
    </>
  )
}
