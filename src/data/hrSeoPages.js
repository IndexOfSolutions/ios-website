// Every Index HR SEO page, in one place: used by the sitemap and for internal links.
// Keyword volumes behind each page are from Opinly (October 2026).

export const HR_SEO_UPDATED = '2026-10-25'

export const AR_PAGES = {
  hrSystem: { href: '/ar/hr-system', label: 'نظام الموارد البشرية Index HR', text: 'الحضور والرواتب والإجازات والتوظيف في نظام واحد.' },
  eosCalculator: { href: '/ar/tools/end-of-service-calculator', label: 'حاسبة مكافأة نهاية الخدمة', text: 'احسب المكافأة وبدل الإجازات وفق نظام العمل السعودي.' },
  overtimeCalculator: { href: '/ar/tools/overtime-calculator', label: 'حاسبة العمل الإضافي', text: 'أجر الساعة الإضافية وفق المادة 107، وساعات رمضان.' },
  payroll: { href: '/ar/payroll-software', label: 'برنامج الرواتب وحماية الأجور', text: 'مسير رواتب محسوب من الحضور مع ملف حماية الأجور.' },
  wps: { href: '/ar/guides/wage-protection-system', label: 'دليل نظام حماية الأجور', text: 'كيف يعمل نظام حماية الأجور ومنصة مدد ومتى تُرفع الملفات.' },
  probation: { href: '/ar/guides/probation-period', label: 'فترة التجربة في نظام العمل السعودي', text: 'مدة التجربة بعد تعديلات 2025 وحقوق الطرفين.' },
  mission: { href: '/ar/guides/mission-allowance', label: 'حساب بدل الانتداب في القطاع الخاص', text: 'كيف تحدد الشركات بدل الانتداب وتصرفه.' },
  jisr: { href: '/ar/compare/jisr-alternative', label: 'بديل جسر للموارد البشرية', text: 'مقارنة منصفة بين Index HR وجسر.' },
  bestLebanon: { href: '/ar/best-hr-system-lebanon', label: 'أفضل نظام موارد بشرية في لبنان', text: 'مقارنة سبعة أنظمة موارد بشرية ورواتب في لبنان.' },
}

export const EN_PAGES = {
  uae: { href: '/hr-software/uae', label: 'HR & payroll software in the UAE', text: 'Attendance, payroll and self-service for UAE teams.' },
  uaeSalaryRules: { href: '/guides/uae-salary-payment-rules', label: 'UAE salary payment rules 2026', text: 'The 1st-of-month payday, the 85% rule and WPS penalties.' },
  lebanon: { href: '/hr-software/lebanon', label: 'HR & payroll software in Lebanon', text: 'Dual-currency payroll, NSSF data and local support.' },
  bestMiddleEast: { href: '/best-hr-software/middle-east', label: 'Best HR software in the Middle East (2026)', text: 'An honest roundup of eight HR platforms.' },
  bestLebanon: { href: '/best-hr-software/lebanon', label: 'Best HR systems in Lebanon (2026)', text: 'Seven HR and payroll systems for Lebanese companies compared.' },
}

export const HR_SEO_PATHS = [...Object.values(AR_PAGES), ...Object.values(EN_PAGES)].map((p) => p.href)
