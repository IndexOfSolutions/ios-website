import React from 'react'
import Link from 'next/link'

import { PRIVACY_POLICIES } from '@/constants/privacyPolicies'
import { ContactSection } from '@/components/PolicyDocument'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata = {
    // The (public) layout appends "| Index of Solutions" via title.template.
    title: 'Privacy Policy',
    description: 'Privacy policy for Index of Solutions. Learn how we collect, use, and protect your data on our website, and find the privacy policy for each of our apps and Microsoft Dynamics 365 Business Central extensions.',
    keywords: 'privacy policy, data protection, Index of Solutions, GDPR, data handling',
    alternates: { canonical: `${siteUrl}/privacy-policy` },
    openGraph: {
        url: `${siteUrl}/privacy-policy`,
        title: 'Privacy Policy | Index of Solutions',
        description: 'Learn how Index of Solutions collects, uses, and protects your data.',
    },
    twitter: {
        card: 'summary',
        title: 'Privacy Policy | Index of Solutions',
        description: 'Learn how Index of Solutions collects, uses, and protects your data.',
    },
};

export default async function Page() {

    const lastUpdated = "August 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 py-32 font-sans text-fg leading-relaxed">
      {/* Header Section */}
      <header className="border-b-2 border-primary pb-8 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-fg italic">
          Last updated: <time dateTime="2026-08">{lastUpdated}</time>
        </p>
      </header>

      <div className="space-y-10">
        {/* App-specific policies — kept near the top so visitors arriving from an
            app listing find the right document immediately. */}
        <section className="border-l-4 border-primary p-6">
          <h2 className="text-xl font-bold text-primary mb-4">Policies for our apps and products</h2>
          <p className="mb-6">
            Each Index of Solutions app, extension and product has its own privacy policy describing
            exactly what that product does with data. The policy below covers this website only.
          </p>
          <ul className="space-y-4">
            {PRIVACY_POLICIES.map((policy) => (
              <li key={policy.slug}>
                <Link
                  href={`/privacy-policy/${policy.slug}`}
                  className="text-primary font-semibold hover:underline"
                >
                  {policy.name}
                </Link>
                <p className="text-sm mt-1">{policy.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 1. Introduction */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">1.</span> Introduction
          </h2>
          <p>
            This Privacy Policy explains how <strong>Index of Solutions</strong> collects, uses and
            protects information when you visit <strong>www.indexofsolutions.com</strong>, contact us,
            or use the tools available on this website. We are committed to protecting your privacy
            and to being transparent about how your data is handled.
          </p>
        </section>

        {/* 2. Scope */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">2.</span> Scope
          </h2>
          <p>
            This policy applies to this website and the enquiries you send us through it. Our apps,
            extensions and products are each covered by their own policy, linked above. It does not
            cover third-party websites we link to, which are governed by their own privacy terms.
          </p>
        </section>

        {/* 3. Information We Collect */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">3.</span> Information We Collect
          </h2>
          <p className="mb-4 font-medium">We only collect information you choose to give us, plus basic usage data:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>
              <strong>Contact form:</strong> your name, company name, type of business, the service
              you are interested in, phone number and email address.
            </li>
            <li>
              <strong>Price estimator:</strong> the answers you give about your business (number of
              users, modules, stores, and similar), and the contact details you provide if you ask
              for the estimate by email.
            </li>
            <li>
              <strong>Usage data:</strong> pages viewed, referring source, approximate location,
              browser and device type, collected through our analytics.
            </li>
          </ul>
          <p>
            We do not ask for payment card details, national ID numbers, or any special category of
            personal data on this website.
          </p>
        </section>

        {/* 4. How We Use It */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">4.</span> How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To answer your enquiry and prepare a proposal or estimate for you</li>
            <li>To follow up on a request you started, such as an unfinished price estimate</li>
            <li>To improve the content and performance of this website</li>
            <li>To meet our legal and accounting obligations</li>
          </ul>
        </section>

        {/* 5. Price Estimator */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">5.</span> The AI Price Estimator
          </h2>
          <p className="mb-4">
            Our price estimator is powered by the Anthropic Claude API. The messages you type are sent
            to Anthropic solely to generate your response, and are not used to train any AI model.
            Please do not enter confidential business information, personal data about other people,
            or credentials into the chat.
          </p>
          <p>
            The estimate it produces is indicative only and is not a binding quotation. If you ask for
            the estimate by email, your contact details and your answers are sent to our team so we can
            follow up.
          </p>
        </section>

        {/* 6. Third-Party Services */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">6.</span> Third-Party Services We Use
          </h2>
          <p className="mb-4">
            We rely on a small number of trusted providers to run this website. Each processes data
            only as needed to deliver its service:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="p-4 border border-border-color rounded-lg shadow-sm text-sm">
              <strong>Resend:</strong> delivers contact form and estimate emails to our team.
            </li>
            <li className="p-4 border border-border-color rounded-lg shadow-sm text-sm">
              <strong>Anthropic:</strong> powers the AI price estimator.
            </li>
            <li className="p-4 border border-border-color rounded-lg shadow-sm text-sm">
              <strong>Opinly:</strong> website analytics and content delivery.
            </li>
          </ul>
        </section>

        {/* 7. Cookies and Analytics */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">7.</span> Cookies and Analytics
          </h2>
          <p>
            We use analytics to understand how visitors find and use the site — which pages are read,
            which links are clicked, and which forms are submitted. This uses cookies or similar
            browser storage to recognise a returning visitor. You can block or delete these at any time
            through your browser settings; the site will continue to work normally. We do not run
            advertising trackers on this website.
          </p>
        </section>

        {/* 8. Data Retention and Security */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">8.</span> Data Retention and Security
          </h2>
          <p className="mb-4">
            Enquiries are kept for as long as needed to serve you and to keep a record of our business
            dealings, then deleted. The site is served over HTTPS, and access to enquiry data is limited
            to the members of our team who need it.
          </p>
          <p>
            We do not sell, rent or trade your information, and we do not share it with third parties
            except the service providers listed above or where the law requires it.
          </p>
        </section>

        {/* 9. Your Rights */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">9.</span> Your Rights
          </h2>
          <p>
            You may ask us at any time to tell you what information we hold about you, to correct it,
            or to delete it, and you may ask us to stop contacting you. Write to the address below and
            we will action your request.
          </p>
        </section>

        {/* 10. Contact */}
        <ContactSection number={10} />

        {/* 11. Updates */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="mr-2">11.</span> Updates to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically to reflect legal, technical, or operational
            changes. The updated version will always be available on our website.
          </p>
        </section>
      </div>
    </div>
  )
}
