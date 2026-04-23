import React from 'react'

const getSiteUrl = () => {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (fromEnv) return fromEnv.startsWith('http') ? fromEnv : `https://${fromEnv}`;
  return 'https://indexofsolutions.com';
};

export const metadata = {
  title: 'Terms & Conditions | Index of Solutions',
  description:
    'Terms and Conditions for Index of Solutions. Learn about our services, proposals, payment terms (after proposal/contract approval), and legal disclaimers for visitors in Lebanon.',
  alternates: { canonical: '/terms-and-conditions' },
  openGraph: {
    url: `${getSiteUrl()}/terms-and-conditions`,
    title: 'Terms & Conditions | Index of Solutions',
    description:
      'Terms and Conditions for Index of Solutions. Learn about our services, proposals, payment terms (after proposal/contract approval), and legal disclaimers.',
  },
};

export default async function Page() {
  const lastUpdated = 'March 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 py-32 font-sans text-fg leading-relaxed">
      {/* Header Section */}
      <header className="border-b-2 border-primary pb-8 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-fg italic">
          Last updated:{' '}
          <time dateTime="2026-03">
            {lastUpdated}
          </time>
        </p>
      </header>

      <div className="space-y-10">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">1.</span> Introduction
          </h2>
          <p>
            These Terms &amp; Conditions (“Terms”) govern your access to and use of the
            website of <strong>Index of Solutions</strong> (the “Company”).
            By using this website, you agree to these Terms.
          </p>
        </section>

        {/* 2. Services & No Contract from Browsing */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">2.</span> Services &amp; No Contract from Browsing
          </h2>
          <p>
            The content on this website is for general information about the Company’s
            services. It does not create a contractual obligation to provide services.
            Any engagement (including ERP implementation, consultancy, support, and training)
            is subject to a separate proposal, scope of work, and/or contract agreed between you
            and the Company.
          </p>
        </section>

        {/* 3. Proposals, Scope, and Payment Terms */}
        <section className="rounded-xl">
          <h2 className="text-xl font-bold text-primary mb-4">
            3. Proposals, Scope, and Payment Terms
          </h2>
          <p className="mb-4 font-medium">
            Payment is taken after proposal/contract approval.
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>
              The Company may provide a proposal based on your requirements and scope.
            </li>
            <li>
              Project fees (including any deposits or milestone payments) will be specified in
              the approved proposal and/or contract.
            </li>
            <li>
              Unless otherwise stated in the proposal/contract, no payment is due before you
              approve the proposal and/or sign the agreement.
            </li>
            <li>
              If the scope changes, timing and pricing may be updated by mutual agreement.
            </li>
          </ul>
          <p>
            All amounts are subject to applicable taxes and/or withholdings required by law.
          </p>
        </section>

        {/* 4. User Responsibilities */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">4.</span> User Responsibilities
          </h2>
          <p className="mb-4">
            You agree to use the website lawfully and not to interfere with its security or
            availability. You are responsible for any information you submit to the Company.
          </p>
        </section>

        {/* 5. Intellectual Property */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">5.</span> Intellectual Property
          </h2>
          <p>
            The website’s design, text, branding, images, and other materials are owned by the
            Company or used under license. You may not copy, reproduce, distribute, or
            create derivative works without prior written permission.
          </p>
        </section>

        {/* 6. Third-Party Links */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">6.</span> Third-Party Links
          </h2>
          <p>
            This website may contain links to third-party sites. The Company does not control
            those sites and is not responsible for their content or practices.
          </p>
        </section>

        {/* 7. Disclaimers */}
        <section className="rounded-xl">
          <h2 className="text-xl font-bold text-primary mb-4">
            7. Disclaimers
          </h2>
          <p className="mb-4">
            The website and its content are provided on an “as is” and “as available” basis.
            The Company does not guarantee that the website will be uninterrupted or error-free.
          </p>
          <p>
            Service descriptions are meant as guidance and may change based on your confirmed
            requirements and the final agreed scope.
          </p>
        </section>

        {/* 8. Limitation of Liability */}
        <section className="rounded-xl">
          <h2 className="text-xl font-bold text-primary mb-4">
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, the Company is not liable for
            indirect, incidental, special, consequential, or exemplary damages arising from your
            use of the website or the services described on it.
          </p>
        </section>

        {/* 9. Privacy */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">9.</span> Privacy
          </h2>
          <p>
            Any personal data you provide is handled according to our{' '}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* 10. Changes */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">10.</span> Changes to These Terms
          </h2>
          <p>
            The Company may update these Terms from time to time. Continued use of the website
            after changes are posted means you accept the updated Terms.
          </p>
        </section>

        {/* 11. Governing Law */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">11.</span> Governing Law (Lebanon)
          </h2>
          <p>
            These Terms are governed by the laws of Lebanon. Any dispute will be subject to
            the competent courts of Beirut, Lebanon, unless the applicable law requires otherwise.
          </p>
        </section>

        {/* 12. Contact */}
        <section className=" border-l-4 border-primary p-6">
          <h2 className="text-xl font-bold text-primary mb-4">12. Support &amp; Contact</h2>
          <div className="space-y-2 italic">
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:y.nasser@indexofsolutions.com"
                className="text-primary hover:underline"
              >
                y.nasser@indexofsolutions.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> Beirut, Lebanon
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
