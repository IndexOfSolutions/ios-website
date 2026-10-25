import React from 'react'
import { getSiteUrl } from '@/lib/site-url'
import { PRICING_BANDS } from '@/data/indexHr'
import { AR_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, CheckList, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = AR_PAGES.payroll.href
const title = 'برنامج الرواتب وحماية الأجور للشركات في السعودية | Index HR'
const description =
  'برنامج رواتب يحسب مسير الرواتب من الحضور والإجازات والعمل الإضافي والسلف، مع التأمينات الاجتماعية ومكافأة نهاية الخدمة وملف نظام حماية الأجور.'

const crumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'نظام الموارد البشرية', href: AR_PAGES.hrSystem.href },
  { label: 'برنامج الرواتب' },
]

const steps = [
  { title: 'الحضور', text: 'تُجمع الحركات من التطبيق والبصمة وتُطابق مع ورديات كل موظف.' },
  { title: 'الاستثناءات', text: 'الإجازات المعتمدة والعطلات والانتدابات تُطبق تلقائياً، والعمل الإضافي ينتظر الاعتماد.' },
  { title: 'الحساب', text: 'الأساسي والبدلات والعمل الإضافي والخصومات والسلف لكل موظف، ولكل عملة على حدة.' },
  { title: 'الإخراج', text: 'ملف حماية الأجور، وتقارير Excel، وترحيل قيد الرواتب إلى Business Central.' },
]

const faqs = [
  { q: 'ما الفرق بين برنامج الرواتب ونموذج مسير الرواتب في Excel؟', a: 'نموذج Excel يحتاج إدخال الحضور والإجازات والعمل الإضافي يدوياً كل شهر. أما برنامج الرواتب في Index HR فيأخذها مباشرة من الحضور والطلبات المعتمدة، فيقل الخطأ ويختصر وقت إعداد المسير.' },
  { q: 'هل يُصدر البرنامج ملف نظام حماية الأجور؟', a: 'نعم، للشركات التي تفعّل حزمة الالتزام السعودي يُجهّز Index HR بيانات الرواتب ويتحقق من رقم الآيبان ورقم الإقامة، ويُصدر ملف بيانات الرواتب (CSV) لاستخدامه في الرفع عبر قناتك البنكية أو منصة مدد.' },
  { q: 'كيف تُخصم السلف من الراتب؟', a: 'تُنشأ السلفة بجدول أقساط شهري، ويُخصم القسط تلقائياً عند حفظ مسير الشهر، ويمكن تأجيل قسط شهر فيُضاف في آخر الجدول.' },
  { q: 'هل يدعم البرنامج الرواتب بأكثر من عملة؟', a: 'نعم، يمكن أن تكون عناصر راتب الموظف بعملات مختلفة، ويعرض المسير المجاميع لكل عملة على حدة دون خلطها.' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${siteUrl}${path}`,
    inLanguage: 'ar',
    dateModified: HR_SEO_UPDATED,
    about: { '@type': 'SoftwareApplication', name: 'Index HR', applicationCategory: 'BusinessApplication' },
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd(siteUrl, crumbs),
]

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ['برنامج الرواتب', 'برنامج حماية الأجور', 'برنامج حساب الراتب', 'مسير رواتب', 'نظام رواتب'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, locale: 'ar_SA', type: 'website', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function ArabicPayrollPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageSection>
        <div className='flex flex-col gap-12'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading
            as='h1'
            align='right'
            eyebrow='برنامج الرواتب'
            title='برنامج رواتب يبدأ من الحضور وينتهي بملف حماية الأجور'
            subtitle='لا مزيد من نقل الحضور إلى جداول Excel كل شهر. Index HR يحسب مسير الرواتب من البيانات الفعلية ويُخرج الملفات التي تحتاجها.'
          />
          <ol className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {steps.map(({ title: t, text }, i) => (
              <li key={t} className='rounded-2xl border border-border-color bg-secondary/30 p-6 flex flex-col gap-2'>
                <span className='text-primary text-sm'>{String(i + 1).padStart(2, '0')}</span>
                <h2 className='text-2xl text-fg'>{t}</h2>
                <p className='text-fg/65 leading-relaxed text-sm'>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </PageSection>

      <PageSection className='!pt-0'>
        <div className='max-w-3xl flex flex-col gap-12'>
          <Prose>
            <h2 id='features'>ما الذي يحسبه برنامج الرواتب؟</h2>
          </Prose>
          <CheckList items={[
            'عناصر رواتب مرنة: مبلغ ثابت، أجر يومي، بدلات حسب المرافقين، وشرائح متدرجة',
            'العمل الإضافي المعتمد والتأخير في بندين منفصلين',
            'الإجازات والعطلات الرسمية والانتدابات من الطلبات المعتمدة',
            'السلف بجدول أقساط وتأجيل قسط',
            'التأمينات الاجتماعية ومكافأة نهاية الخدمة للشركات السعودية',
            'رواتب بعدة عملات مع مجاميع منفصلة لكل عملة',
            'ترحيل قيد الرواتب إلى Microsoft Dynamics 365 Business Central',
          ]} />
          <Prose>
            <h2 id='wps'>ملف نظام حماية الأجور</h2>
            <p>يُلزم نظام حماية الأجور منشآت القطاع الخاص في المملكة برفع بيانات الرواتب المدفوعة شهرياً عبر منصة مدد أو القنوات المعتمدة. يتحقق Index HR قبل الإصدار من اكتمال بيانات كل موظف مثل رقم الآيبان ورقم الهوية أو الإقامة، ثم يُصدر ملف بيانات الرواتب لاستخدامه في الرفع. اقرأ <a href={AR_PAGES.wps.href}>دليل نظام حماية الأجور</a> لمعرفة المواعيد والمتطلبات.</p>
            <h2 id='price'>سعر برنامج الرواتب</h2>
            <p>برنامج الرواتب جزء من نظام Index HR ولا يُباع منفصلاً: {PRICING_BANDS[0].monthly / PRICING_BANDS[0].max} دولارات للموظف شهرياً ضمن باقة لا تقل عن {PRICING_BANDS[0].max} موظفاً، وتشمل الحضور والإجازات والتوظيف والأداء أيضاً.</p>
          </Prose>

          <div className='flex flex-col gap-6'>
            <h2 className='text-fg text-3xl'>أسئلة شائعة</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='أدوات وأدلة ذات صلة' links={[AR_PAGES.wps, AR_PAGES.eosCalculator, AR_PAGES.overtimeCalculator]} />
        </div>
      </PageSection>

      <CtaBand
        title='جرّب مسير رواتب شهر واحد على بياناتك'
        text='نشغّل الرواتب بالتوازي مع طريقتك الحالية قبل الانتقال، لتتأكد من كل رقم.'
        primary={{ href: '/contact', label: 'اطلب عرضاً تجريبياً' }}
        secondary={{ href: AR_PAGES.hrSystem.href, label: 'نظام Index HR' }}
      />
    </>
  )
}
