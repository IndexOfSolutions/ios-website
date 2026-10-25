// Shared content for the Index HR product, pricing and comparison pages.
// Keep feature claims in step with the product guide (api/help/index-hr-guide.md
// in the Index HR repo) and prices in step with "HRMS Business module.xlsx".

export const INDEX_HR_BASE = '/services/full-stack-hr-platform'
export const INDEX_HR_PRICING = '/services/full-stack-hr-platform/pricing'
export const INDEX_HR_COMPARE = '/compare/index-hr-vs-hr-software'

export const APP_LANGUAGES = ['English', 'العربية', 'Français', 'हिन्दी', 'বাংলা', 'اردو', 'മലയാളം', 'தமிழ்']

export const SCREENSHOTS = {
  home: { src: '/assets/images/index-hr/index-hr-app-home.jpg', alt: 'Index HR mobile app home screen with clock-in, timesheet, leave balance, payslips and assets' },
  clockIn: { src: '/assets/images/index-hr/index-hr-app-clock-in.jpg', alt: 'Index HR geofenced clock-in screen showing the employee is inside the allowed zone' },
  timesheet: { src: '/assets/images/index-hr/index-hr-app-timesheet.jpg', alt: 'Index HR weekly timesheet entry on mobile' },
  leaveBalance: { src: '/assets/images/index-hr/index-hr-app-leave-balance.jpg', alt: 'Index HR leave balance screen with allocated, used and remaining days' },
  schedule: { src: '/assets/images/index-hr/index-hr-app-schedule.jpg', alt: 'Index HR weekly shift schedule with shift swap requests' },
  myTeam: { src: '/assets/images/index-hr/index-hr-app-my-team.jpg', alt: 'Index HR manager view with team approvals, overtime and missions' },
  arabicTablet: { src: '/assets/images/index-hr/index-hr-app-arabic-tablet.jpg', alt: 'Index HR tablet app in Arabic with a right-to-left layout' },
}

// icon = lucide-react component name, resolved in the page
export const MODULE_GROUPS = [
  {
    id: 'core-hr',
    icon: 'Users',
    title: 'Core HR',
    summary: 'One record per employee, from hire to exit, across every company you run.',
    features: [
      'Employee records with personal, employment, contract, probation, dependents, documents and full audit history',
      'Multi-company organisations with company transfers and per-company settings',
      'Org structure (divisions, departments, sections) and a printable org chart',
      'Onboarding and offboarding checklists with exit interviews and asset clearance',
      'Expiry tracking for contracts, probation, residency, IDs, passports and insurance',
      'Announcements, shared policy documents and document requests (e.g. salary certificates)',
    ],
  },
  {
    id: 'time-attendance',
    icon: 'Clock',
    title: 'Time & Attendance',
    summary: 'Every punch, shift and hour of overtime, captured where the work happens.',
    features: [
      'Geofenced mobile clock-in across multiple check-in locations, with a cost centre on every punch',
      'Punching-machine sync (ZKTeco and compatible devices) alongside mobile punches',
      'Shift roster with draft and publish, rotating patterns, shift requests and swaps',
      'Overnight shifts handled correctly: a morning punch belongs to the night before',
      'Automatic missed clock-in and clock-out push reminders',
      'Timesheets with cost centres, plus a daily attendance overview',
    ],
  },
  {
    id: 'leave',
    icon: 'CalendarDays',
    title: 'Leave Management',
    summary: 'Balances employees can trust, because every day is a ledger entry.',
    features: [
      'Multiple leave types per profile with accrual, seniority brackets and carry-over',
      'Ledger-based balances: every grant, request and adjustment is traceable',
      'Public holidays per profile, skipped automatically when counting leave days',
      'Multi-stage approval paths scoped by profile, org unit or individual employee',
    ],
  },
  {
    id: 'payroll',
    icon: 'Wallet',
    title: 'Payroll',
    summary: 'Pay calculated straight from attendance, with no re-keying between systems.',
    features: [
      'Payroll calculated from punches, shifts, leave, holidays, overtime and missions',
      'Flexible payroll elements: fixed, daily rate, dependent-based and tiered brackets',
      'Overtime and lateness paid and deducted as separate lines, never silently netted',
      'Overtime approval: approvers can confirm fewer hours than measured',
      'Employee loans with repayment schedules, postponement and automatic deduction',
      'Multi-currency payroll with totals kept separate per currency',
      'Saudi pack: GOSI and end-of-service calculations and a WPS salary file',
    ],
  },
  {
    id: 'missions',
    icon: 'Plane',
    title: 'Missions & Field Work',
    summary: 'Deliveries, special projects and extra shifts, approved and paid properly.',
    features: [
      'Mission types with multiple benefit lines and hour brackets',
      'Direct-manager approval, instant when a manager assigns their own team',
      'A mission day is never counted as an absence',
    ],
  },
  {
    id: 'assets',
    icon: 'Package',
    title: 'Asset Management',
    summary: 'Know who holds every laptop, phone and vehicle, and get it back on exit.',
    features: [
      'Asset types with custom fields, a tagged catalogue and printable QR labels',
      'Assignment handover with e-signature in the mobile app',
      'Returns, repairs, losses and employee asset requests',
      'Asset clearance built into offboarding',
    ],
  },
  {
    id: 'recruitment',
    icon: 'Briefcase',
    title: 'Recruitment (ATS)',
    summary: 'From job post to signed offer, without leaving the HR system.',
    features: [
      'Branded careers portal and one-click LinkedIn job posting',
      'Board and list views by pipeline stage, with CV preview',
      'Interviews, scorecards, offer letter templates and convert-to-employee',
      'Hiring leads rate applicants 1–5 stars from the mobile app',
      'Searchable talent database and recruitment reports',
    ],
  },
  {
    id: 'performance',
    icon: 'Target',
    title: 'Performance & Training',
    summary: 'Goals, reviews and growth plans that connect to real decisions.',
    features: [
      'Goals and OKRs, review cycles, competencies and templates',
      'Calibration, performance improvement plans (PIP) and check-ins',
      'Recognition and badges, feedback requests and team reviews',
      'Training programmes, sessions, learning plans and certifications with expiry tracking',
    ],
  },
  {
    id: 'ai',
    icon: 'Sparkles',
    title: 'AI Assistance',
    summary: 'Practical AI where it saves HR time, with costs you control.',
    features: [
      'AI CV matching and fit scores for every applicant',
      'Job descriptions, scorecards and interview kits drafted in seconds',
      'Ask the talent database questions in plain language',
      'In-console AI support assistant that knows the product',
      'Use our managed AI with a monthly budget, or connect your own key',
    ],
  },
]

export const MOBILE_FEATURES = [
  'Clock in and out inside approved locations',
  'Weekly schedule, shift requests and swaps',
  'Leave requests and live balances',
  'Payslips, timesheets and missions',
  'Assets with e-signature handover',
  'Document requests and shared policies',
  'Announcements with push notifications',
  'Team area for managers to approve on the go',
]

export const INTEGRATIONS = [
  { name: 'Microsoft Dynamics 365 Business Central', detail: 'Push employees and post payroll journals to your general ledger, mapped to your dimensions.' },
  { name: 'Microsoft Entra ID', detail: 'Single sign-on for console users with your Microsoft accounts.' },
  { name: 'Punching machines', detail: 'Sync ZKTeco and compatible biometric devices with secure machine keys.' },
  { name: 'LinkedIn', detail: 'Publish open positions to LinkedIn straight from Recruitment.' },
  { name: 'REST API & webhooks', detail: 'API keys, signed webhooks, employee write-back and payroll read for your other systems.' },
  { name: 'Excel', detail: 'Import and export employees, dimensions, payroll elements and dependents as real Excel tables.' },
]

export const IMPLEMENTATION_STEPS = [
  { title: 'Discovery', text: 'We map your companies, policies, shifts and pay rules in a working session with your HR and finance teams.' },
  { title: 'Configuration', text: 'We set up leave and payroll profiles, approval workflows, locations and the mobile app with your branding.' },
  { title: 'Data migration', text: 'Employees, balances, dependents and payroll elements are imported from your existing files.' },
  { title: 'Parallel run & go-live', text: 'We run payroll side by side with your current process, train your team, then switch over.' },
]

// ─── Pricing ────────────────────────────────────────────────────────────────
// Source: HRMS Business module.xlsx, sheet "Pricing" (Professional plan).
// Monthly = flat price for the band. Yearly = 12 months less 20%, rounded as in the sheet.
export const YEARLY_DISCOUNT = 0.2

export const PRICING_BANDS = [
  { min: 1, max: 15, monthly: 45, yearly: 430 },
  { min: 16, max: 50, monthly: 150, yearly: 1440 },
  { min: 51, max: 100, monthly: 250, yearly: 2400 },
  { min: 101, max: 200, monthly: 400, yearly: 3840 },
  { min: 201, max: 300, monthly: 510, yearly: 4900 },
  { min: 301, max: 400, monthly: 640, yearly: 6150 },
  { min: 401, max: 500, monthly: 750, yearly: 7200 },
  { min: 501, max: 1000, monthly: 1200, yearly: 11500 },
]

// Above the last band: per employee per month.
export const ENTERPRISE_RATE = 1

export const PLAN_INCLUDES = [
  'Core HR, org structure and org chart',
  'Time & attendance with geofenced mobile clock-in',
  'Shift roster, swaps and overnight shifts',
  'Leave management with ledger balances',
  'Payroll, overtime, loans and missions',
  'Recruitment, careers portal and LinkedIn posting',
  'Performance management',
  'Training and certifications',
  'Asset management with QR labels',
  'Approval workflows and notifications',
  'Employee & manager mobile app in 8 languages',
  'iOS, Android, tablet and web',
]

export const PRICING_ADD_ONS = [
  { name: 'Implementation & data migration', detail: 'One-time setup, configuration and import of your existing employee data, quoted per project.' },
  { name: 'Business Central connector', detail: 'Employee sync and payroll journal posting to Dynamics 365 Business Central.' },
  { name: 'AI features', detail: 'AI CV matching, drafting and search, on our managed AI with a budget, or on your own key.' },
  { name: 'Custom development', detail: 'Reports, rules and integrations built by our team for your processes.' },
]

export const PRICING_FAQS = [
  { q: 'Is the price per employee or per company?', a: 'Per company, by headcount band. You pay one flat monthly price for the band your active employee count falls in, not a fee per user. Above 1,000 employees the price is $1 per employee per month.' },
  { q: 'Who counts as an employee?', a: 'Your band is set by the number of active employees in Index HR.' },
  { q: 'How much do I save on yearly billing?', a: 'Paying yearly saves 20% compared with twelve monthly payments.' },
  { q: 'What happens when we grow into the next band?', a: 'Your plan moves to the next band from the following billing period. Nothing about your setup or data changes.' },
  { q: 'Are recruitment, performance and training extra?', a: 'No. The Professional plan includes recruitment, performance and training along with every core module.' },
  { q: 'Do you offer a demo?', a: 'Yes. Book a demo and we will walk through Index HR with your own policies and shifts in mind.' },
]

// ─── Comparison ─────────────────────────────────────────────────────────────
// Competitor information is from public vendor pages and review sites, checked October 2026.
export const COMPARE_CHECKED = 'October 2026'

export const COMPETITORS = [
  { id: 'zoho-people', name: 'Zoho People' },
  { id: 'bamboohr', name: 'BambooHR' },
  { id: 'rippling', name: 'Rippling' },
  { id: 'jisr', name: 'Jisr' },
  { id: 'menaitech', name: 'MenaITech' },
  { id: 'zenhr', name: 'ZenHR' },
]

// status: 'yes' | 'partial' | 'no' | 'info'
export const COMPARISON_ROWS = [
  {
    feature: 'Pricing model',
    indexHr: { status: 'info', text: 'Flat monthly price per headcount band, from $45/month' },
    'zoho-people': { status: 'info', text: 'Per user, from about $1.50/month; payroll is a separate product' },
    bamboohr: { status: 'info', text: 'Quote-based, around $10–25 per employee/month reported' },
    rippling: { status: 'info', text: 'From about $8 per employee/month, each module billed extra' },
    jisr: { status: 'info', text: 'Around SAR 17 per employee/month reported' },
    menaitech: { status: 'info', text: 'Quote-based, modular' },
    zenhr: { status: 'info', text: 'Quote-based, by headcount and bundle' },
  },
  {
    feature: 'Recruitment, performance & training in one plan',
    indexHr: { status: 'yes', text: 'All included' },
    'zoho-people': { status: 'partial', text: 'Recruitment is a separate Zoho product' },
    bamboohr: { status: 'partial', text: 'Higher tiers only' },
    rippling: { status: 'partial', text: 'Separate modules' },
    jisr: { status: 'partial', text: 'Module-based' },
    menaitech: { status: 'partial', text: 'Separate modules' },
    zenhr: { status: 'partial', text: 'Bundle-based' },
  },
  {
    feature: 'Payroll calculated from attendance',
    indexHr: { status: 'yes', text: 'Built in, multi-currency' },
    'zoho-people': { status: 'partial', text: 'Through Zoho Payroll' },
    bamboohr: { status: 'partial', text: 'Add-on, US only' },
    rippling: { status: 'yes', text: 'Built in' },
    jisr: { status: 'yes', text: 'Built in' },
    menaitech: { status: 'yes', text: 'Built in' },
    zenhr: { status: 'yes', text: 'Built in' },
  },
  {
    feature: 'Geofenced mobile clock-in',
    indexHr: { status: 'yes', text: 'Multiple locations, cost centre per punch' },
    'zoho-people': { status: 'yes', text: 'Yes' },
    bamboohr: { status: 'partial', text: 'Time-tracking add-on' },
    rippling: { status: 'yes', text: 'Yes' },
    jisr: { status: 'yes', text: 'Yes' },
    menaitech: { status: 'yes', text: 'Location-based attendance' },
    zenhr: { status: 'yes', text: 'Yes' },
  },
  {
    feature: 'Employee app in Arabic and South Asian languages',
    indexHr: { status: 'yes', text: 'EN, AR, FR, Hindi, Bengali, Urdu, Malayalam, Tamil' },
    'zoho-people': { status: 'partial', text: 'Multilingual; South Asian languages not advertised' },
    bamboohr: { status: 'no', text: 'Not advertised' },
    rippling: { status: 'no', text: 'Not advertised' },
    jisr: { status: 'partial', text: 'Arabic & English' },
    menaitech: { status: 'partial', text: 'Arabic & English' },
    zenhr: { status: 'partial', text: 'Arabic & English' },
  },
  {
    feature: 'Missions with benefit lines & hour brackets',
    indexHr: { status: 'yes', text: 'Built in, approved by direct manager' },
    'zoho-people': { status: 'no', text: 'Not advertised' },
    bamboohr: { status: 'no', text: 'Not advertised' },
    rippling: { status: 'no', text: 'Not advertised' },
    jisr: { status: 'no', text: 'Not advertised' },
    menaitech: { status: 'no', text: 'Not advertised' },
    zenhr: { status: 'no', text: 'Not advertised' },
  },
  {
    feature: 'Asset custody with e-signature handover',
    indexHr: { status: 'yes', text: 'QR labels, e-signature, exit clearance' },
    'zoho-people': { status: 'partial', text: 'Basic asset records' },
    bamboohr: { status: 'partial', text: 'Basic asset records' },
    rippling: { status: 'yes', text: 'IT device management' },
    jisr: { status: 'no', text: 'Not advertised' },
    menaitech: { status: 'no', text: 'Not advertised' },
    zenhr: { status: 'no', text: 'Not advertised' },
  },
  {
    feature: 'AI for recruiting (CV match, interview kits)',
    indexHr: { status: 'yes', text: 'Managed AI or your own key' },
    'zoho-people': { status: 'partial', text: 'Zia assistant' },
    bamboohr: { status: 'partial', text: 'Ask BambooHR assistant' },
    rippling: { status: 'partial', text: 'AI features across the suite' },
    jisr: { status: 'partial', text: 'AI-assisted job posts' },
    menaitech: { status: 'no', text: 'Not advertised' },
    zenhr: { status: 'no', text: 'Not advertised' },
  },
  {
    feature: 'Dynamics 365 Business Central connector',
    indexHr: { status: 'yes', text: 'Native: employees + payroll journal to GL' },
    'zoho-people': { status: 'no', text: 'No native connector advertised' },
    bamboohr: { status: 'no', text: 'No native connector advertised' },
    rippling: { status: 'no', text: 'No native connector advertised' },
    jisr: { status: 'no', text: 'NetSuite and Xero listed' },
    menaitech: { status: 'no', text: 'No native connector advertised' },
    zenhr: { status: 'no', text: 'No native connector advertised' },
  },
  {
    feature: 'Saudi statutory payroll (GOSI, end of service, WPS)',
    indexHr: { status: 'partial', text: 'GOSI & EOSB calculation, WPS file' },
    'zoho-people': { status: 'partial', text: 'Through Zoho Payroll' },
    bamboohr: { status: 'no', text: 'No' },
    rippling: { status: 'no', text: 'Not localised' },
    jisr: { status: 'yes', text: 'Plus Mudad, Qiwa and Muqeem' },
    menaitech: { status: 'yes', text: 'Plus Mudad and Nitaqat' },
    zenhr: { status: 'yes', text: 'Plus Mudad exports and Nitaqat' },
  },
  {
    feature: 'Custom development by the vendor',
    indexHr: { status: 'yes', text: 'Our own team builds to your process' },
    'zoho-people': { status: 'partial', text: 'Low-code customisation' },
    bamboohr: { status: 'partial', text: 'Configuration and marketplace' },
    rippling: { status: 'partial', text: 'Configuration and app shop' },
    jisr: { status: 'partial', text: 'Configuration' },
    menaitech: { status: 'partial', text: 'Configuration and partners' },
    zenhr: { status: 'partial', text: 'Configuration' },
  },
]

export const COMPETITOR_SUMMARIES = [
  {
    id: 'zoho-people',
    name: 'Zoho People',
    them: 'A low-cost, configurable HR app that fits teams already on the Zoho suite. Payroll and recruitment are separate Zoho products with their own pricing.',
    us: 'Index HR includes payroll, recruitment, performance and training in one plan, calculates pay directly from attendance, and connects natively to Business Central instead of Zoho Books.',
    fit: 'You already run Zoho One and only need core HR records and leave.',
  },
  {
    id: 'bamboohr',
    name: 'BambooHR',
    them: 'A polished core HRIS for small and mid-size US companies. Payroll and benefits are US-only add-ons, and time tracking is sold separately.',
    us: 'Index HR is built for Middle East and multi-country teams: shift-based attendance, multi-currency payroll, an Arabic and South Asian language app, and band pricing that does not grow with every user.',
    fit: 'Your workforce is mainly US-based and you want US payroll and benefits administration.',
  },
  {
    id: 'rippling',
    name: 'Rippling',
    them: 'A broad HR, IT and finance platform with global payroll and employer of record. Each module is billed separately, so a full stack costs considerably more than the entry price.',
    us: 'Index HR gives you every HR module in one predictable plan, with deeper shift, overtime and mission rules for operational workforces, and implementation by a local team.',
    fit: 'You hire in many countries without local entities and need an employer of record.',
  },
  {
    id: 'jisr',
    name: 'Jisr',
    them: 'A Saudi-focused HR and payroll platform with direct government-portal integrations (Mudad, GOSI, Qiwa, Muqeem) and local hosting.',
    us: 'Index HR adds a mobile app in eight languages for multinational crews, rosters with shift swaps, missions, asset custody, AI recruiting, and a native Business Central connector.',
    fit: 'You operate only in Saudi Arabia and need direct Qiwa and Muqeem integration from day one.',
  },
  {
    id: 'menaitech',
    name: 'MenaITech',
    them: 'A long-established MENA HR and payroll suite with Arabic and English support, sold as separate modules, strong in large Saudi and Jordanian organisations.',
    us: 'Index HR is modern, mobile-first and priced by headcount band with every module included, plus AI recruiting, a multilingual employee app and a native Business Central connector.',
    fit: 'You are a large enterprise standardised on MenaITech payroll and want to stay on one vendor.',
  },
  {
    id: 'zenhr',
    name: 'ZenHR',
    them: 'A cloud HR and payroll system localised for 11 MENA countries, with Arabic and English, attendance with geolocation and biometric integrations.',
    us: 'Index HR goes further on operations (rosters with swaps, overnight shifts, missions, assets with e-signature), offers AI recruiting, and posts payroll to Business Central natively.',
    fit: 'You need payroll localised in many MENA countries out of the box.',
  },
]

export const HR_FAQS = [
  { q: 'What is Index HR?', a: 'Index HR is a complete HR, time & attendance and payroll platform from Index of Solutions. HR teams work in a web console; employees and managers use a mobile app on iOS, Android, tablet and the web.' },
  { q: 'Which languages does the mobile app support?', a: 'English, Arabic, French, Hindi, Bengali, Urdu, Malayalam and Tamil, with full right-to-left layouts for Arabic and Urdu. Each employee picks their own language.' },
  { q: 'Can Index HR work with our punching machines?', a: 'Yes. Index HR syncs with ZKTeco and compatible biometric devices, and machine punches are processed together with mobile clock-ins.' },
  { q: 'Does Index HR integrate with Business Central?', a: 'Yes. The Business Central connector pushes employees and posts each payroll run as a general journal, mapped to your GL accounts and dimensions.' },
  { q: 'Does it support Saudi payroll?', a: 'Companies with Saudi compliance switched on get GOSI and end-of-service calculations and a WPS salary file. Ask us about the rest of the Saudi roadmap for your rollout.' },
  { q: 'How long does implementation take?', a: 'It depends on the number of companies, shifts and pay rules. We agree the plan in discovery, then configure, import your data and run payroll in parallel before switching over.' },
]
