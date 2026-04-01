import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'

export const metadata = {
  title: 'Microsoft Dynamics 365 Business Central Support | Index of Solutions',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',

  },
  description:
    'Business Central support for Lebanese organizations: issue resolution, user guidance, performance monitoring, and BC version updates/hotfixes with reliable response SLAs.',
  alternates: {
    canonical: '/services/business-central-support',
  },
  openGraph: {
    title: 'Microsoft Dynamics 365 Business Central Support | Index of Solutions',
    description:
      'Business Central support for Lebanese organizations: issue resolution, user guidance, performance monitoring, and BC version updates/hotfixes with reliable response SLAs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Dynamics 365 Business Central Support | Index of Solutions',
    description:
      'Business Central support for Lebanese organizations: issue resolution, user guidance, performance monitoring, and BC version updates/hotfixes with reliable response SLAs.',
  },
  keywords: [
    'Microsoft Dynamics 365 Business Central support',
    'Business Central support',
    'ERP support',
    'performance monitoring',
    'BC version updates',
  ].join(', '),
};

export default function BusinessCentralSupport() {
  return (
    <ServicesLayout
        title={"Microsoft Dynamics 365 Business Central Support"}
        imageURL={"business-central-support"}
        imageAlt={"Microsoft Dynamics 365 Business Central Support"}
    >
        <p className='font-[inter] text-lg'>Your Business Central system is live — now you need a reliable partner to keep it running. Index of Solutions provides dedicated BC support for Lebanese businesses, with fast response times, local expertise, and proactive system monitoring.</p>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>What Our Support Covers</h2>
            <ul className='list-disc ml-12 font-[inter]'>
                <li>Bug fixing and issue resolution</li>
                <li>User questions and functional guidance</li>
                <li>BC version updates and hotfixes</li>
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
                    <QuestionBubbleCard question={"Do you support Business Central systems implemented by other partners?"} />
                    <AnswerBubbleCard answer={"Yes. We take over support for BC systems regardless of who implemented them."} />
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
