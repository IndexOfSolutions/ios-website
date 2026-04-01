import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'

export const metadata = {
  title: 'Microsoft Dynamics 365 Business Central Training | Index of Solutions',
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
    'Business Central training for SMB teams: role-based end-user, administrator, and power-user programs delivered in Arabic or English. Practical training tailored to your system configuration.',
  alternates: {
    canonical: '/services/business-central-training',
  },
  openGraph: {
    title: 'Microsoft Dynamics 365 Business Central Training | Index of Solutions',
    description:
      'Business Central training for SMB teams: role-based end-user, administrator, and power-user programs delivered in Arabic or English. Practical training tailored to your system configuration.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Dynamics 365 Business Central Training | Index of Solutions',
    description:
      'Business Central training for SMB teams: role-based end-user, administrator, and power-user programs delivered in Arabic or English. Practical training tailored to your system configuration.',
  },
  keywords: [
    'Microsoft Dynamics 365 Business Central training',
    'Business Central training',
    'ERP training',
    'role-based training',
    'Arabic and English',
  ].join(', '),
};

export default function BusinessCentralTraining() {
  return (
    <ServicesLayout
        title={"Microsoft Dynamics 365 Business Central Training"}
        imageURL={"business-central-training"}
        imageAlt={"Microsoft Dynamics 365 Business Central Training"}
    >
        <p className='font-[inter] text-lg'>A Business Central system is only as good as the people using it. Our BC training programs are designed for  SMB teams — delivered in Arabic or English, tailored to your specific system configuration, and focused on practical day-to-day usage rather than generic feature walkthroughs.</p>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Training Programs We Offer</h2>
            <div className="flex flex-col gap-2">
                <h3 className='font-[inter] text-xl'><b>End-User Training:</b></h3>
                <p className='ml-8'>Role-based training for finance, operations, purchasing, and sales users. We train your team on the exact workflows configured in your system.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='font-[inter] text-xl'><b>Administrator Training:</b></h3>
                <p className='ml-8'>For your internal IT or system admin. Covers user management, permissions, basic configuration changes, and first-level troubleshooting.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='font-[inter] text-xl'><b>Power User Training:</b></h3>
                <p className='ml-8'>For team leads and managers who need to run reports, configure workflows, and handle more complex BC tasks independently.</p>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Training Format</h2>
            <ul className='list-disc ml-12 font-[inter]'>
                <li>On-site at your offices in Lebanon</li>
                <li>Remote sessions via Teams</li>
                <li>Recorded sessions available for onboarding future employees</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Frequently Asked Questions.</h2>
            <div className="flex flex-col gap-8">
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"Can training be done in Arabic?"} />
                    <AnswerBubbleCard answer={"Yes. We deliver training in Arabic or English based on your team's preference."} />
                </div>
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"Do you provide training materials?"} />
                    <AnswerBubbleCard answer={"Yes. Every training engagement includes documentation tailored to your BC setup."} />
                </div>
            </div>
        </div>
    </ServicesLayout>
  )
}
