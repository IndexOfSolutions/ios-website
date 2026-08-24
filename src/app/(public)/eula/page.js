import React from 'react'
import Link from 'next/link'

import { ContactSection } from '@/components/PolicyDocument'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata = {
  // The (public) layout appends "| Index of Solutions" via title.template.
  title: 'End User Licence Agreement',
  description:
    'End User Licence Agreement for Index of Solutions software, apps and Microsoft Dynamics 365 Business Central extensions — licence grant, restrictions, support, warranties and liability.',
  keywords: 'EULA, end user licence agreement, software licence, Business Central extension, Index of Solutions',
  alternates: { canonical: `${siteUrl}/eula` },
  openGraph: {
    url: `${siteUrl}/eula`,
    title: 'End User Licence Agreement | Index of Solutions',
    description: 'End User Licence Agreement for Index of Solutions software, apps and Business Central extensions.',
  },
  twitter: {
    card: 'summary',
    title: 'End User Licence Agreement | Index of Solutions',
    description: 'End User Licence Agreement for Index of Solutions software, apps and Business Central extensions.',
  },
}

export default async function Page() {
  const lastUpdated = 'August 2026'

  return (
    <div className="max-w-4xl mx-auto px-4 py-32 font-sans text-fg leading-relaxed">
      {/* Header Section */}
      <header className="border-b-2 border-primary pb-8 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          End User Licence Agreement
        </h1>
        <p className="text-sm text-fg italic">
          Last updated: <time dateTime="2026-08">{lastUpdated}</time>
        </p>
      </header>

      <div className="space-y-10">
        {/* Summary callout */}
        <section className="border-l-4 border-primary p-6">
          <p>
            This End User Licence Agreement (the “<strong>EULA</strong>”) governs your use of software
            published by <strong>Index of Solutions</strong> — including our apps and extensions for
            Microsoft Dynamics 365 Business Central, whether obtained through Microsoft AppSource or
            directly from us. Each product may also have offer-specific terms and its own{' '}
            <Link href="/privacy-policy" className="text-primary hover:underline">
              privacy policy
            </Link>
            .
          </p>
        </section>

        {/* 1. Acceptance */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">1.</span> Acceptance
          </h2>
          <p>
            This EULA is a binding agreement between <strong>Index of Solutions</strong> (“IOS”, “we”,
            “us”) and the organization licensing the software (“Customer”, “you”). By installing,
            accessing or using any IOS software (the “<strong>Software</strong>”), you accept this EULA.
            If you are accepting on behalf of an organization, you confirm you have authority to bind it.
            If you do not agree, do not install or use the Software.
          </p>
        </section>

        {/* 2. Definitions */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">2.</span> Definitions
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Software</strong> — any IOS application, extension, module or update licensed to you,
              together with its documentation.
            </li>
            <li>
              <strong>Offer Terms</strong> — the product-specific terms published with a given Software
              listing on Microsoft AppSource or in an order or quotation issued by IOS.
            </li>
            <li>
              <strong>Subscription</strong> — the paid, time-limited right to use the Software, as set out
              in the Offer Terms or your order.
            </li>
            <li>
              <strong>Customer Data</strong> — the data you enter into, or process through, the Software.
            </li>
          </ul>
        </section>

        {/* 3. Licence Grant */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">3.</span> Licence Grant
          </h2>
          <p>
            Subject to your compliance with this EULA and payment of the applicable fees, IOS grants you a
            <strong> non-exclusive, non-transferable, revocable</strong> licence to install and use the
            Software in your own Microsoft Dynamics 365 Business Central environments, for your own
            internal business purposes, for the duration of a valid Subscription. No rights are granted
            other than those expressly stated here.
          </p>
        </section>

        {/* 4. Restrictions */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">4.</span> Restrictions
          </h2>
          <p className="mb-4 font-medium">Without IOS’s prior written consent, you may not:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Resell, sublicense, rent, lease, or otherwise redistribute the Software</li>
            <li>Reverse-engineer, decompile or disassemble the Software, except to the extent that applicable law expressly permits it despite this restriction</li>
            <li>Use the Software to provide a service bureau, hosting or outsourcing service to third parties</li>
            <li>Remove or obscure any proprietary notice, copyright mark or licensing mechanism</li>
            <li>Circumvent any usage limit, licence key or entitlement check</li>
          </ul>
        </section>

        {/* 5. Third-Party Services */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">5.</span> Third-Party Services and Dependencies
          </h2>
          <p className="mb-4">
            Some Software is a <strong>connector</strong> and requires a separate third-party service to
            function — for example an e-invoicing service provider, a payment gateway, or a government
            portal. Where that is the case, you must hold your own active agreement and account with that
            provider. Their fees, onboarding, credentials and certificates are your responsibility and are
            governed by their own terms.
          </p>
          <p>
            IOS is not a party to those agreements and is not liable for a third party’s availability,
            pricing, changes or outages. The Software also depends on Microsoft Dynamics 365 Business
            Central, which is licensed to you by Microsoft under Microsoft’s own terms.
          </p>
        </section>

        {/* 6. Customer Data and Privacy */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">6.</span> Customer Data and Privacy
          </h2>
          <p className="mb-4">
            Customer Data remains yours. You are the data controller for it, and you are responsible for
            having a lawful basis to process it and to transmit it to any third-party service you
            configure. IOS processes personal data only as described in the applicable{' '}
            <Link href="/privacy-policy" className="text-primary hover:underline">
              privacy policy
            </Link>{' '}
            for the product concerned.
          </p>
          <p>
            The Software may emit operational telemetry for diagnostics and product improvement, as
            described in that product’s privacy policy.
          </p>
        </section>

        {/* 7. Intellectual Property */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">7.</span> Intellectual Property
          </h2>
          <p>
            The Software is licensed, not sold. IOS and its licensors retain all right, title and interest
            in and to the Software, including all intellectual property rights in it and in any updates,
            modifications or derivative works. Any feedback you give us about the Software may be used by
            IOS without restriction or obligation to you.
          </p>
        </section>

        {/* 8. Support and Updates */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">8.</span> Support and Updates
          </h2>
          <p>
            Support is provided through the channels and during the hours stated in the applicable Offer
            Terms. Updates and fixes are published through Microsoft AppSource or delivered directly by
            IOS. You are responsible for keeping your environment on a supported version of Microsoft
            Dynamics 365 Business Central; IOS is not obliged to support the Software on unsupported or
            heavily modified environments.
          </p>
        </section>

        {/* 9. No Professional Advice */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">9.</span> No Tax, Legal or Compliance Advice
          </h2>
          <p>
            The Software is software, not advice. IOS does not warrant that use of the Software, by itself,
            achieves or maintains compliance with any statutory, tax or regulatory requirement, nor that it
            will remain compliant as those requirements change. You remain responsible for your own
            compliance and should obtain independent professional advice.
          </p>
        </section>

        {/* 10. Warranty Disclaimer */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">10.</span> Warranty Disclaimer
          </h2>
          <p>
            The Software is provided <strong>“as is”</strong> and <strong>“as available”</strong>. To the
            maximum extent permitted by law, IOS disclaims all warranties, express or implied, including
            merchantability, fitness for a particular purpose, non-infringement, uninterrupted operation
            and error-free performance.
          </p>
        </section>

        {/* 11. Limitation of Liability */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">11.</span> Limitation of Liability
          </h2>
          <p className="mb-4">
            To the maximum extent permitted by law, IOS shall not be liable for any indirect, incidental,
            special, consequential or punitive damages, or for loss of profits, revenue, data or goodwill,
            or for fines, penalties or interest assessed by any tax or regulatory authority.
          </p>
          <p>
            IOS’s total aggregate liability arising out of or relating to the Software shall not exceed the
            amounts paid by you to IOS for that Software in the <strong>twelve (12) months</strong>{' '}
            preceding the event giving rise to the claim. Nothing in this EULA excludes liability that
            cannot lawfully be excluded.
          </p>
        </section>

        {/* 12. Indemnity */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">12.</span> Indemnity
          </h2>
          <p>
            You will indemnify IOS against claims, losses and costs arising from your use of the Software
            in breach of this EULA, or from Customer Data that you did not have the right to process or
            transmit.
          </p>
        </section>

        {/* 13. Confidentiality */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">13.</span> Confidentiality
          </h2>
          <p>
            Each party will keep the other’s non-public information confidential and use it only to perform
            under this EULA. This obligation does not apply to information that is public through no fault
            of the receiving party, was already lawfully known to it, or must be disclosed by law.
          </p>
        </section>

        {/* 14. Term and Termination */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">14.</span> Term and Termination
          </h2>
          <p>
            This EULA applies for as long as the Software is installed or a Subscription is active. IOS may
            suspend or terminate the licence on material breach that is not remedied within a reasonable
            period after notice. On termination or expiry, you must stop using and uninstall the Software.
            Customer Data already stored in your own Business Central environment remains yours. Sections
            on intellectual property, disclaimers, liability, confidentiality and governing law survive
            termination.
          </p>
        </section>

        {/* 15. Compliance with Law */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">15.</span> Compliance with Law
          </h2>
          <p>
            You will use the Software in compliance with all applicable laws, including export control and
            sanctions rules, and will not make it available to any party barred from receiving it under
            those rules.
          </p>
        </section>

        {/* 16. Order of Precedence */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">16.</span> Order of Precedence
          </h2>
          <p>
            Where this EULA conflicts with a product’s Offer Terms, <strong>this EULA prevails</strong>,
            except that a product’s Offer Terms govern where they specify that product’s governing law and
            jurisdiction, its support commitments, or its fees. A signed agreement between you and IOS
            prevails over both.
          </p>
        </section>

        {/* 17. Governing Law */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">17.</span> Governing Law
          </h2>
          <p>
            This EULA is governed by the laws of the <strong>Republic of Lebanon</strong>, and the competent
            courts of Beirut have exclusive jurisdiction — except where a product’s Offer Terms specify a
            different governing law and jurisdiction for that product, in which case those apply to that
            product. This is without prejudice to any mandatory consumer rights available to you under the
            law of your own country of residence.
          </p>
        </section>

        {/* 18. Contact */}
        <ContactSection number={18} />

        {/* 19. Changes */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">19.</span> Changes to This EULA
          </h2>
          <p>
            IOS may update this EULA to reflect legal, technical or operational changes. The current version
            is always published at this address and with the offer on Microsoft AppSource. Continued use of
            the Software after an update constitutes acceptance of it.
          </p>
        </section>
      </div>
    </div>
  )
}
