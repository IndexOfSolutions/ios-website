import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata = {
  title: 'Microsoft Dynamics NAV Support | Index of Solutions',
  description:
    'Dynamics Nav support for Lebanese organizations: issue resolution, user guidance, performance monitoring, and Nav version updates/hotfixes with reliable response SLAs.',
  alternates: {
    canonical: '/services/dynamics-nav-support',
  },
  openGraph: {
    title: 'Microsoft Dynamics 365 Dynamics Nav Support | Index of Solutions',
    description:
      'Dynamics Nav support for Lebanese organizations: issue resolution, user guidance, performance monitoring, and Nav version updates/hotfixes with reliable response SLAs.',
    images: [{ url: '/assets/images/pages/dynamics-nav-support.webp', alt: 'Dynamics NAV Support — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Dynamics 365 Dynamics Nav Support | Index of Solutions',
    description:
      'Dynamics Nav support for Lebanese organizations: issue resolution, user guidance, performance monitoring, and Nav version updates/hotfixes with reliable response SLAs.',
  },
  keywords: [
    'Microsoft Dynamics 365 Dynamics Nav support',
    'Dynamics Nav support',
    'ERP support',
    'performance monitoring',
    'Nav version updates',
  ].join(', '),
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Microsoft Dynamics NAV Support',
  'description': 'Dynamics NAV support for Lebanese organizations: issue resolution, user guidance, performance monitoring, and NAV version updates with reliable response SLAs.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/services/dynamics-nav-support`,
}

export default function DynamicsNavSupport() {
  return (
    <ServicesLayout
        jsonLd={serviceJsonLd}
        title={"Microsoft Dynamics 365 Dynamics Nav Support"}
        imageURL={"dynamics-nav-support"}
        imageAlt={"Microsoft Dynamics 365 Dynamics Nav Support"}
    >
        <p className='font-[inter] text-lg'>Your Dynamics Nav system is live — now you need a reliable partner to keep it running. Index of Solutions provides dedicated Nav support for Lebanese businesses, with fast response times, local expertise, and proactive system monitoring.</p>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>What Our Support Covers</h2>
            <ul className='list-disc ml-12 font-[inter]'>
                <li>Bug fixing and issue resolution</li>
                <li>User questions and functional guidance</li>
                <li>Nav version updates and hotfixes</li>
                <li>Performance monitoring and optimization</li>
                <li>Minor configuration changes and additions</li>
                <li>Emergency support for critical issues</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Support Packages</h2>
            <p className='font-[inter]'>
            We offer monthly support retainers with guaranteed response SLAs. Packages are scoped to your team size and usage volume. Contact us for pricing.
            </p>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Frequently Asked Questions.</h2>
            <div className="flex flex-col gap-8">
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"Do you support Dynamics Nav systems implemented by other partners?"} />
                    <AnswerBubbleCard answer={"Yes. We take over support for Nav systems regardless of who implemented them."} />
                </div>
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"What are your support hours?"} />
                    <AnswerBubbleCard answer={"Monday to Friday, 9 AM to 5 PM Lebanese time. Emergency support available outside hours for critical issues."} />
                </div>
            </div>
        </div>
    </ServicesLayout>
  )
}
