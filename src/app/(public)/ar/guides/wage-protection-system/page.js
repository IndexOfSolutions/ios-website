import React from 'react'
import { getSiteUrl } from '@/lib/site-url'
import { AR_PAGES, HR_SEO_UPDATED } from '@/data/hrSeoPages'
import {
  Breadcrumbs, Callout, CtaBand, FaqList, PageSection, Prose, RelatedLinks, SectionHeading, breadcrumbJsonLd, faqJsonLd,
} from '@/components/index-hr/IndexHrUi'

const siteUrl = getSiteUrl()
const path = AR_PAGES.wps.href
const title = 'نظام حماية الأجور في السعودية: دليل المنشآت 2026'
const description =
  'دليل مبسط لنظام حماية الأجور ومنصة مدد: من يشمله، ومتى تُرفع ملفات الرواتب، وما المخالفات التي يرصدها النظام، وكيف تجهز ملف الرواتب دون أخطاء.'

const crumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'نظام الموارد البشرية', href: AR_PAGES.hrSystem.href },
  { label: 'دليل نظام حماية الأجور' },
]

const faqs = [
  { q: 'ما هو نظام حماية الأجور؟', a: 'نظام تشرف عليه وزارة الموارد البشرية والتنمية الاجتماعية لمتابعة صرف أجور العاملين في القطاع الخاص، وتلتزم فيه المنشآت برفع بيانات الرواتب المدفوعة شهرياً للتحقق من صرفها في موعدها وبالقيمة المتفق عليها.' },
  { q: 'ما علاقة منصة مدد بنظام حماية الأجور؟', a: 'مدد منصة معتمدة تتيح للمنشآت إدارة الرواتب ورفع ملفات حماية الأجور وصرفها، وترتبط بالجهات الحكومية لمتابعة الالتزام.' },
  { q: 'ماذا يحدث عند التأخر في رفع ملف الأجور؟', a: 'تُرسل تنبيهات للمنشأة عند استحقاق الأجور ثم تذكيرات لاحقة، وقد يترتب على التأخر زيارات تفتيشية وإيقاف بعض خدمات الوزارة بحسب مدة التأخير. راجع منصة مدد ووزارة الموارد البشرية للاطلاع على الإجراءات والغرامات المعمول بها.' },
  { q: 'ما البيانات المطلوبة لكل موظف في ملف الرواتب؟', a: 'عادة: رقم الهوية أو الإقامة، والآيبان البنكي، والراتب الأساسي، وبدل السكن، والبدلات الأخرى، والخصومات، وصافي الأجر المدفوع.' },
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
  keywords: ['نظام حماية الاجور', 'برنامج حماية الاجور', 'منصة مدد', 'ملف حماية الأجور', 'WPS السعودية'].join(', '),
  alternates: { canonical: path },
  openGraph: { title, description, locale: 'ar_SA', type: 'article', url: path },
  twitter: { card: 'summary_large_image', title, description },
}

export default function WageProtectionGuidePage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageSection>
        <div className='max-w-3xl flex flex-col gap-10'>
          <Breadcrumbs items={crumbs} />
          <SectionHeading as='h1' align='right' eyebrow='دليل' title={title} subtitle='كل ما تحتاج منشأتك معرفته عن رفع ملفات الأجور الشهرية وتجنب المخالفات.' />
          <p className='text-sm text-fg/45'>آخر تحديث: {HR_SEO_UPDATED}</p>

          <Prose>
            <h2 id='what'>ما هو نظام حماية الأجور؟</h2>
            <p>نظام حماية الأجور (WPS) هو آلية لمتابعة صرف أجور العاملين في منشآت القطاع الخاص. تلتزم المنشأة برفع ملف شهري يتضمن الأجور المدفوعة لكل عامل، فتتحقق الجهات المختصة من أن الأجر صُرف في موعده وبالقيمة المسجلة في العقد.</p>

            <h2 id='mudad'>دور منصة مدد</h2>
            <p>منصة مدد هي القناة التي تستخدمها أغلب المنشآت لإدارة الرواتب ورفع ملفات حماية الأجور وصرفها عبر البنوك، وترتبط ببيانات العقود والتأمينات الاجتماعية. لذلك يجب أن تتطابق بيانات الأجر في ملف الرواتب مع بيانات العقد والتأمينات.</p>

            <h2 id='timeline'>المواعيد والتنبيهات</h2>
            <p>بحسب ما أعلنته الوزارة في تحديثات 2025، يُرسل النظام تنبيهاً عند استحقاق الأجور، ثم تذكيراً بعد 10 أيام وإنذاراً نهائياً في اليوم الخامس عشر، وقد يؤدي التأخر أكثر من 20 يوماً إلى زيارة تفتيشية. ويتصاعد الأثر مع استمرار عدم صرف الأجور حتى إيقاف خدمات المنشأة. تتغير هذه الإجراءات من وقت لآخر، فتحقق دائماً من الإصدار الحالي على منصة مدد.</p>

            <h2 id='violations'>ما الذي يرصده النظام؟</h2>
            <ul>
              <li>التأخر في صرف الأجور أو في رفع ملفها.</li>
              <li>أجور تختلف اختلافاً كبيراً عن المستويات المعتادة أو عن العقد.</li>
              <li>خصومات تتجاوز 50% من الأجر.</li>
              <li>عدم تسجيل الأجر الأساسي لفترة طويلة.</li>
            </ul>

            <h2 id='checklist'>قائمة تحقق قبل رفع الملف</h2>
            <ol>
              <li>تأكد من رقم الهوية أو الإقامة لكل عامل.</li>
              <li>تحقق من صحة الآيبان (رقم الحساب الدولي) قبل الصرف.</li>
              <li>طابق الراتب الأساسي وبدل السكن مع العقد الموثق.</li>
              <li>وثّق كل خصم ونوعه حتى لا يُرصد كمخالفة.</li>
              <li>اصرف الأجور وارفع الملف قبل انتهاء المهلة.</li>
            </ol>
          </Prose>

          <Callout title='كيف يساعدك Index HR'>
            يحسب Index HR الرواتب من الحضور، ويتحقق من الآيبان ورقم الإقامة والأجر الأساسي قبل إصدار ملف الرواتب، فتكتشف الأخطاء قبل الرفع لا بعده. اطلع على <a className='text-primary' href={AR_PAGES.payroll.href}>برنامج الرواتب</a>.
          </Callout>

          <div className='flex flex-col gap-6'>
            <h2 className='text-fg text-3xl'>أسئلة شائعة</h2>
            <FaqList items={faqs} />
          </div>

          <RelatedLinks title='أدوات وأدلة ذات صلة' links={[AR_PAGES.payroll, AR_PAGES.eosCalculator, AR_PAGES.probation]} />
        </div>
      </PageSection>

      <CtaBand
        title='رواتب جاهزة لنظام حماية الأجور كل شهر'
        text='من الحضور إلى ملف الرواتب في نظام واحد.'
        primary={{ href: '/contact', label: 'اطلب عرضاً تجريبياً' }}
        secondary={{ href: AR_PAGES.hrSystem.href, label: 'نظام Index HR' }}
      />
    </>
  )
}
