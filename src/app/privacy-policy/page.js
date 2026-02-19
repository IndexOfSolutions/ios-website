import React from 'react'

export default async function Page() {

    const lastUpdated = "October 2025";

  return (
    <div className="max-w-4xl mx-auto px-4 py-32 font-sans text-fg leading-relaxed">
      {/* Header Section */}
      <header className="border-b-2 border-primary pb-8 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Privacy Policy – KSA ZATCA Integration with Flick for E-Invoicing
        </h1>
        <p className="text-sm text-fg italic">
          Last updated: <time dateTime="2025-10">{lastUpdated}</time> 
        </p>
      </header>

      <div className="space-y-10">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">1.</span> Introduction
          </h2>
          <p>
            This Privacy Policy explains how <strong>Index of Solutions</strong> handles data when you use our extension 
            “KSA ZATCA Integration with Flick for E-Invoicing” for Microsoft Dynamics 365 Business Central. 
            We are committed to protecting your privacy and ensuring transparency regarding how data is processed and stored. 
          </p>
        </section>

        {/* 2. Scope */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">2.</span> Scope
          </h2>
          <p>
            This policy applies only to the KSA ZATCA Integration with Flick for E-Invoicing extension and related support services 
            provided by Index of Solutions.  It does not cover any other third-party systems, integrations, or websites 
            that you may use alongside this extension. 
          </p>
        </section>

        {/* 3. Data Collection */}
        <section className="rounded-xl">
          <h2 className="text-xl font-bold text-primary mb-4">3. Data Collection and Usage</h2>
          <p className="mb-4 font-medium">
            Our extension <strong>does not collect, store, or transmit any personal data</strong> to external systems other 
            than the authorized systems configured by the customer, such as: 
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Microsoft Dynamics 365 Business Central </li>
            <li>Flick E-Invoicing Platform </li>
            <li>KSA ZATCA e-Invoicing (FATOORA) portal </li>
          </ul>
          <p className="mb-4">
            All data exchange occurs securely within your Business Central environment or through authorized APIs 
            using credentials provided by the customer. 
          </p>
          <p className="font-semibold text-primary mb-2">Transactional data processed locally: </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Invoice and credit note details </li>
            <li>Tax registration and invoice metadata required by ZATCA </li>
            <li>Digital signature and QR code information </li>
          </ul>
        </section>

        {/* 4. Data Ownership */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4">4. Data Ownership</h2>
          <p>
            All data processed through the extension remains the property of your organization.  
            We do not retain, copy, or share any data processed by the extension.  
            You have full control over where your Business Central and Flick data is stored. 
          </p>
        </section>

        {/* 5. Data Security */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4">5. Data Security</h2>
          <p className="mb-4">
            The extension relies on Microsoft’s and Flick’s secure environments. 
            We follow industry best practices: 
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="p-4 border rounded-lg shadow-sm text-sm">
              <strong>Encryption:</strong> HTTPS / OAuth 2.0 protocols. 
            </li>
            <li className="p-4 border rounded-lg shadow-sm text-sm">
              <strong>Access:</strong> Role-based control in Business Central. 
            </li>
            <li className="p-4 border rounded-lg shadow-sm text-sm">
              <strong>Storage:</strong> No external or local sensitive data storage. 
            </li>
          </ul>
        </section>

        {/* 6. Disclosure */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4">6. Disclosure to Third Parties</h2>
          <p>
            We do not share, sell, or distribute any information to third parties.  
            Any communication with ZATCA or Flick occurs strictly as part of your configured integration to meet statutory e-invoicing requirements. 
          </p>
        </section>

        {/* 7. User Responsibilities */}
        <section className="rounded-xl">
          <h2 className="text-xl font-bold text-primary mb-4">7. User Responsibilities</h2>
          <p className="mb-4 font-medium">
          Users are responsible for ensuring that their Business Central and Flick configurations comply with: 
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>KSA ZATCA e-Invoicing regulations   </li>
            <li>Microsoft Dynamics 365 security and privacy policies</li>
            <li>Their organization’s internal data protection policies</li>
          </ul>
        </section>

        {/* 8. Contact (Moved up for UX) */}
        <section className=" border-l-4 border-primary p-6">
          <h2 className="text-xl font-bold text-primary mb-4">8. Support and Contact</h2>
          <div className="space-y-2 italic">
            <p><strong>Email:</strong> <a href="mailto:y.nasser@indexofsolutions.com" className="text-primary hover:underline">y.nasser@indexofsolutions.com</a> </p>
            <p><strong>Website:</strong> <a href="https://www.indexofsolutions.com:453/site/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.indexofsolutions.com</a></p>
            <p><strong>Address:</strong> Beirut, Lebanon</p>
          </div>
        </section>

        {/* 6. Disclosure */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4">9. Updates to This Policy</h2>
          <p>
          We may update this Privacy Policy periodically to reflect legal, technical, or operational changes.
The updated version will always be available on our website. 
          </p>
        </section>
      </div>
    </div>
  )
}
