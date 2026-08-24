/**
 * App / product specific privacy policies.
 *
 * Each entry renders as a static page at /privacy-policy/<slug> — there is no
 * database behind this. To add a policy for a new app, append one object here:
 * the page, its metadata, the index on /privacy-policy and the sitemap all pick
 * it up automatically.
 *
 * Every policy automatically gets a "Support and Contact" and an "Updates to
 * This Policy" section appended at the end, so do not repeat those in `sections`.
 *
 * Block types available inside a section:
 *   { type: 'p',     text }                        — paragraph
 *   { type: 'lead',  text }                        — emphasised lead-in paragraph
 *   { type: 'ul',    items: [] }                   — bulleted list
 *   { type: 'cards', items: [{ title, text }] }    — responsive card grid
 *   { type: 'label', text }                        — small primary-coloured label
 *
 * Use **double asterisks** inside any text to bold a phrase.
 */

export const PRIVACY_POLICIES = [
  {
    slug: 'ksa-zatca-flick-e-invoicing',
    name: 'KSA ZATCA Integration with Flick for E-Invoicing',
    title: 'Privacy Policy – KSA ZATCA Integration with Flick for E-Invoicing',
    summary:
      'Microsoft Dynamics 365 Business Central extension that submits invoices to the Saudi ZATCA (FATOORA) platform through Flick.',
    metaDescription:
      'Privacy policy for the KSA ZATCA Integration with Flick for E-Invoicing extension for Microsoft Dynamics 365 Business Central by Index of Solutions.',
    keywords:
      'ZATCA privacy policy, FATOORA e-invoicing, Flick integration, Business Central extension, Index of Solutions',
    lastUpdated: 'October 2025',
    lastUpdatedISO: '2025-10',
    sections: [
      {
        heading: 'Introduction',
        blocks: [
          {
            type: 'p',
            text:
              'This Privacy Policy explains how **Index of Solutions** handles data when you use our extension “KSA ZATCA Integration with Flick for E-Invoicing” for Microsoft Dynamics 365 Business Central. We are committed to protecting your privacy and ensuring transparency regarding how data is processed and stored.',
          },
        ],
      },
      {
        heading: 'Scope',
        blocks: [
          {
            type: 'p',
            text:
              'This policy applies only to the KSA ZATCA Integration with Flick for E-Invoicing extension and related support services provided by Index of Solutions. It does not cover any other third-party systems, integrations, or websites that you may use alongside this extension.',
          },
        ],
      },
      {
        heading: 'Data Collection and Usage',
        blocks: [
          {
            type: 'lead',
            text:
              'Our extension **does not collect, store, or transmit any personal data** to external systems other than the authorized systems configured by the customer, such as:',
          },
          {
            type: 'ul',
            items: [
              'Microsoft Dynamics 365 Business Central',
              'Flick E-Invoicing Platform',
              'KSA ZATCA e-Invoicing (FATOORA) portal',
            ],
          },
          {
            type: 'p',
            text:
              'All data exchange occurs securely within your Business Central environment or through authorized APIs using credentials provided by the customer.',
          },
          { type: 'label', text: 'Transactional data processed locally:' },
          {
            type: 'ul',
            items: [
              'Invoice and credit note details',
              'Tax registration and invoice metadata required by ZATCA',
              'Digital signature and QR code information',
            ],
          },
        ],
      },
      {
        heading: 'Data Ownership',
        blocks: [
          {
            type: 'p',
            text:
              'All data processed through the extension remains the property of your organization. We do not retain, copy, or share any data processed by the extension. You have full control over where your Business Central and Flick data is stored.',
          },
        ],
      },
      {
        heading: 'Data Security',
        blocks: [
          {
            type: 'p',
            text:
              'The extension relies on Microsoft’s and Flick’s secure environments. We follow industry best practices:',
          },
          {
            type: 'cards',
            items: [
              { title: 'Encryption', text: 'HTTPS / OAuth 2.0 protocols.' },
              { title: 'Access', text: 'Role-based control in Business Central.' },
              { title: 'Storage', text: 'No external or local sensitive data storage.' },
            ],
          },
        ],
      },
      {
        heading: 'Disclosure to Third Parties',
        blocks: [
          {
            type: 'p',
            text:
              'We do not share, sell, or distribute any information to third parties. Any communication with ZATCA or Flick occurs strictly as part of your configured integration to meet statutory e-invoicing requirements.',
          },
        ],
      },
      {
        heading: 'User Responsibilities',
        blocks: [
          {
            type: 'lead',
            text:
              'Users are responsible for ensuring that their Business Central and Flick configurations comply with:',
          },
          {
            type: 'ul',
            items: [
              'KSA ZATCA e-Invoicing regulations',
              'Microsoft Dynamics 365 security and privacy policies',
              'Their organization’s internal data protection policies',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'ksa-zatca-integration-phase-1-and-2',
    name: 'KSA ZATCA Integration — Phase 1 and 2',
    title: 'Privacy Policy – KSA ZATCA Integration Phase 1 and 2',
    summary:
      'Microsoft Dynamics 365 Business Central connector for ZATCA e-invoicing Phase 1 (Generation) and Phase 2 (Integration), submitting through LinkPro or Flick.',
    metaDescription:
      'Privacy policy for the Index of Solutions ZATCA E-Invoicing Integration (Phase 1 and 2) extension for Microsoft Dynamics 365 Business Central — what data it transmits, to whom, and how it is secured.',
    keywords:
      'ZATCA privacy policy, ZATCA phase 1 phase 2, FATOORA integration, LinkPro, Flick, Business Central extension, Index of Solutions',
    lastUpdated: 'August 2026',
    lastUpdatedISO: '2026-08',
    supportNote:
      'Support is provided in English and Arabic during our business hours, Sunday to Thursday, excluding Saudi public holidays. Our target first response time is one business day.',
    sections: [
      {
        heading: 'Introduction',
        blocks: [
          {
            type: 'p',
            text:
              'This Privacy Policy explains how **Index of Solutions** handles data when you use our **ZATCA E-Invoicing Integration** extension for Microsoft Dynamics 365 Business Central, covering both **Phase 1 (Generation)** and **Phase 2 (Integration)** of the Saudi e-invoicing mandate. We are committed to protecting your privacy and to being transparent about how data is processed and where it goes.',
          },
        ],
      },
      {
        heading: 'Scope',
        blocks: [
          {
            type: 'p',
            text:
              'This policy applies only to the ZATCA E-Invoicing Integration extension and the support services Index of Solutions provides around it. It does not cover the third-party e-invoicing service provider you connect it to, Microsoft Dynamics 365 Business Central itself, or any other system you may use alongside the extension — each is governed by its own privacy terms.',
          },
        ],
      },
      {
        heading: 'How the Extension Works',
        blocks: [
          {
            type: 'p',
            text:
              'The extension is a **connector**. It does not itself clear, report, stamp or sign invoices with the Saudi Zakat, Tax and Customs Authority (**ZATCA**). Submission to the ZATCA FATOORA platform is performed by a third-party e-invoicing service provider — **LinkPro** or **Flick** — with which you hold your own account and agreement.',
          },
          {
            type: 'p',
            text:
              'The extension therefore transmits sales document data from your Business Central environment to the provider endpoint **you** configure, using the credentials **you** supply. Index of Solutions is not a party to your agreement with that provider, and device registration, cryptographic stamping and certificate management remain between you and the provider.',
          },
        ],
      },
      {
        heading: 'Data Transmitted by the Extension',
        blocks: [
          {
            type: 'lead',
            text:
              'To produce a compliant e-invoice, the extension sends the following sales document data to your configured provider endpoint:',
          },
          {
            type: 'ul',
            items: [
              'Customer name, in both English and Arabic',
              'VAT registration number and Commercial Registration Number (CRN)',
              'Customer address',
              'Document numbers and dates',
              'Line descriptions, quantities, prices and discounts',
              'VAT amounts',
            ],
          },
          {
            type: 'p',
            text:
              'This data originates in your own Business Central environment and is transmitted only to the endpoint you configure. Index of Solutions does not receive a copy of your invoice data, does not store it outside your environment, and never sells, rents or shares it.',
          },
        ],
      },
      {
        heading: 'Diagnostic Telemetry',
        blocks: [
          {
            type: 'p',
            text:
              'The extension emits operational telemetry through **Microsoft Azure Application Insights**, used solely for diagnostics and product improvement. This is technical information about how the extension itself is running — such as extension version, feature usage, error messages, response codes and performance timings.',
          },
          {
            type: 'p',
            text:
              'Telemetry is not used for marketing or profiling, is not sold or shared with third parties, and is retained under the terms of the Microsoft Azure service that hosts it. Invoice content is not the purpose of this telemetry.',
          },
        ],
      },
      {
        heading: 'Data Ownership and Roles',
        blocks: [
          {
            type: 'p',
            text:
              'All data processed through the extension remains the property of your organization, and data stored in your Business Central environment stays yours — including if you later uninstall the extension.',
          },
          {
            type: 'p',
            text:
              'You are the **data controller** for the data you submit. By configuring the extension, you confirm that you have a lawful basis to transmit that data to your chosen e-invoicing provider. Index of Solutions acts only as a software provider and, where we deliver support, as a processor acting on your instructions.',
          },
        ],
      },
      {
        heading: 'Data Security',
        blocks: [
          {
            type: 'p',
            text:
              'The extension relies on the secure environments of Microsoft and your chosen provider, and follows industry best practices:',
          },
          {
            type: 'cards',
            items: [
              { title: 'Encryption', text: 'HTTPS / TLS for every call to the provider endpoint.' },
              { title: 'Access', text: 'Role-based control in Business Central; provider credentials held by you.' },
              { title: 'Storage', text: 'No invoice data stored by Index of Solutions outside your environment.' },
            ],
          },
          {
            type: 'p',
            text:
              'Keeping your provider credentials confidential is your responsibility. If you believe they have been exposed, rotate them with your provider immediately.',
          },
        ],
      },
      {
        heading: 'Disclosure to Third Parties',
        blocks: [
          {
            type: 'p',
            text:
              'We do not share, sell or distribute your information to third parties. The only outbound data flow is to the LinkPro or Flick endpoint you configure, which forwards to ZATCA strictly to meet statutory e-invoicing requirements, and the diagnostic telemetry described above. Provider availability, pricing and terms are outside our control.',
          },
        ],
      },
      {
        heading: 'Record Retention',
        blocks: [
          {
            type: 'p',
            text:
              'Retaining your invoices, signed XML documents and audit records for the period required by Saudi law is your responsibility, not ours. The extension does not act as an archive, and Index of Solutions does not keep a copy of these records on your behalf.',
          },
        ],
      },
      {
        heading: 'User Responsibilities',
        blocks: [
          {
            type: 'lead',
            text: 'As a user of the extension, you are responsible for:',
          },
          {
            type: 'ul',
            items: [
              'The accuracy and completeness of the master data and transactions you submit — VAT registration numbers, CRN, Arabic names and addresses',
              'Holding an active agreement and account with your chosen e-invoicing provider, and keeping its credentials confidential',
              'Verifying the result of each submission and retaining the resulting records as Saudi law requires',
              'Your own compliance with ZATCA regulations and the Saudi VAT Implementing Regulations',
              'Microsoft Dynamics 365 security and privacy policies, and your organization’s internal data protection policies',
            ],
          },
          {
            type: 'p',
            text:
              'The extension is software, not tax or legal advice. It does not by itself guarantee compliance with any ZATCA requirement, phase or technical specification, and those requirements change over time.',
          },
        ],
      },
    ],
  },
  {
    slug: 'full-stack-hr-platform',
    name: 'Full Stack HR Platform',
    title: 'Privacy Policy – Full Stack HR Platform',
    summary:
      'End-to-end HR and payroll platform deployed for our customers, covering employee records, attendance, leave and payroll processing.',
    metaDescription:
      'Privacy policy for the Index of Solutions Full Stack HR Platform — how employee data is processed, stored, secured and retained.',
    keywords:
      'HR platform privacy policy, payroll data protection, employee data, Index of Solutions, HRIS Lebanon',
    lastUpdated: 'August 2026',
    lastUpdatedISO: '2026-08',
    sections: [
      {
        heading: 'Introduction',
        blocks: [
          {
            type: 'p',
            text:
              'This Privacy Policy explains how **Index of Solutions** handles data in the **Full Stack HR Platform**, our human resources and payroll solution deployed for customer organizations. It covers the platform itself and the implementation and support services we provide around it.',
          },
        ],
      },
      {
        heading: 'Scope and Roles',
        blocks: [
          {
            type: 'p',
            text:
              'The employing organization that licenses the platform is the **data controller** for all employee data held in it: it decides what is recorded, who may access it, and how long it is kept. Index of Solutions acts as a **data processor**, handling that data only on the documented instructions of the customer and only to operate, support and maintain the platform.',
          },
          {
            type: 'p',
            text:
              'This policy does not cover any third-party system the customer chooses to connect to the platform — such as banking portals, biometric attendance devices, or government reporting services — which are governed by their own privacy terms.',
          },
        ],
      },
      {
        heading: 'Data Processed',
        blocks: [
          {
            type: 'lead',
            text:
              'Depending on the modules a customer enables, the platform may process the following categories of employee data:',
          },
          {
            type: 'ul',
            items: [
              'Identity and contact details — name, national ID or passport number, date of birth, address, phone number, personal and work email',
              'Employment records — job title, department, contract type, start and end dates, reporting line, salary grade',
              'Attendance and leave — clock-in and clock-out records, timesheets, leave balances and requests',
              'Payroll and compensation — salary, allowances, deductions, end-of-service benefits, bank account details for salary transfer, tax and social security identifiers',
              'Performance and training — appraisals, objectives, and training records where those modules are in use',
              'System data — user accounts, roles, and audit logs of actions taken inside the platform',
            ],
          },
          {
            type: 'p',
            text:
              'This data is entered by the customer’s HR administrators or by employees through self-service. Index of Solutions does not collect employee data independently and does not use it for any purpose of its own — it is never sold, rented, or used for marketing, profiling, or model training.',
          },
        ],
      },
      {
        heading: 'Where Data Is Stored',
        blocks: [
          {
            type: 'p',
            text:
              'The platform is deployed into the environment agreed with each customer — either the customer’s own infrastructure or a hosted environment provisioned for them. The hosting location, backup schedule and retention period are set out in the customer’s service agreement, and that agreement prevails over this page where the two differ.',
          },
          {
            type: 'p',
            text:
              'Data is retained for as long as the customer instructs and as long as local labour, tax and social security law requires records to be kept. On termination, data is returned to the customer or deleted according to the terms of the service agreement.',
          },
        ],
      },
      {
        heading: 'Access by Index of Solutions',
        blocks: [
          {
            type: 'p',
            text:
              'Our consultants and support engineers access customer environments only when needed to deliver implementation, support or maintenance work, and only to the extent required to resolve the request at hand. Access is granted by the customer, is subject to the customer’s own approval process, and can be revoked by the customer at any time. Our staff are bound by confidentiality obligations.',
          },
          {
            type: 'p',
            text:
              'Where a support request can be resolved without live data, we ask for anonymised or sample data instead.',
          },
        ],
      },
      {
        heading: 'Security',
        blocks: [
          {
            type: 'p',
            text: 'The platform is built and operated with the following controls:',
          },
          {
            type: 'cards',
            items: [
              { title: 'Encryption', text: 'HTTPS/TLS in transit; encryption at rest in the hosting environment.' },
              { title: 'Access', text: 'Role-based permissions, so users see only the records their role allows.' },
              { title: 'Auditing', text: 'Action logs for changes to sensitive records such as payroll.' },
            ],
          },
          {
            type: 'p',
            text:
              'No system is completely immune to risk. If we become aware of a breach affecting customer data, we notify the affected customer without undue delay so they can meet their own notification obligations.',
          },
        ],
      },
      {
        heading: 'Disclosure to Third Parties',
        blocks: [
          {
            type: 'p',
            text:
              'We do not share, sell or distribute employee data to third parties. Data leaves the platform only where the customer has configured an integration — for example a payroll bank file or a statutory report — or where disclosure is required by law.',
          },
        ],
      },
      {
        heading: 'Employee Rights',
        blocks: [
          {
            type: 'p',
            text:
              'If you are an employee of an organization using the platform and you want to access, correct or delete your data, please contact your own HR department: they control the data and can act on your request directly. Index of Solutions cannot act on such a request without the customer’s instruction, but will support the customer in fulfilling it.',
          },
        ],
      },
      {
        heading: 'Customer Responsibilities',
        blocks: [
          {
            type: 'lead',
            text: 'Customers using the platform are responsible for ensuring that:',
          },
          {
            type: 'ul',
            items: [
              'They have a lawful basis for collecting and processing the employee data they enter',
              'Employees are informed about how their data is used, as required by applicable labour and data protection law',
              'User accounts and roles are kept current, and access is removed promptly when staff leave',
              'Their configuration complies with their own internal data protection policies',
            ],
          },
        ],
      },
    ],
  },
];

export function getPrivacyPolicy(slug) {
  return PRIVACY_POLICIES.find((policy) => policy.slug === slug);
}
