import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'

export const metadata = {
  title: 'Microsoft Dynamics 365 Business Central Consultancy | Index of Solutions',
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
    'Business Central consultancy for Lebanese SMBs: system assessment, gap analysis, requirements definition, and a clear implementation roadmap designed to deliver real ROI.',
  alternates: {
    canonical: '/services/business-central-consultancy',
  },
  openGraph: {
    title: 'Microsoft Dynamics 365 Business Central Consultancy | Index of Solutions',
    description:
      'Business Central consultancy for Lebanese SMBs: system assessment, gap analysis, requirements definition, and a clear implementation roadmap designed to deliver real ROI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Dynamics 365 Business Central Consultancy | Index of Solutions',
    description:
      'Business Central consultancy for Lebanese SMBs: system assessment, gap analysis, requirements definition, and a clear implementation roadmap designed to deliver real ROI.',
  },
  keywords: [
    'Microsoft Dynamics 365 Business Central consultancy',
    'Business Central consultancy',
    'ERP consultancy',
    'gap analysis',
    'implementation roadmap',
  ].join(', '),
};

export default function BusinessCentralConsultation() {
  return (
    <ServicesLayout
        title={"Microsoft Dynamics 365 Business Central Consultancy"}
        imageURL={"business-central-consultancy"}
        imageAlt={"Microsoft Dynamics 365 Business Central Consultancy"}
    >
        <p className='font-[inter] text-lg'>
        Before you invest in an ERP implementation, you need a clear strategy. Our Business Central consultancy service helps Lebanese SMBs assess their current systems, define requirements, and plan a Business Central rollout that delivers real ROI — without wasted budget.
        </p>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>What Our Consultancy Covers</h2>
            <ul className='list-disc ml-12 font-[inter]'>
                <li>Current system assessment — what&apos;s working, what isn&apos;t</li>
                <li>Process mapping — documenting your workflows before automating them</li>
                <li>Gap analysis — identifying what BC covers out of the box vs. what needs customization</li>
                <li>Implementation roadmap — phased plan with timelines and milestones</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Who This Is For</h2>
            <p className='font-[inter]'>
                This service is for businesses that are still evaluating whether Business Central is right for them, or those that have already decided and need a structured plan before committing to a full implementation project.
            </p>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Frequently Asked Questions.</h2>
            <div className="flex flex-col gap-8">
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"How long does a consultancy engagement take?"} />
                    <AnswerBubbleCard answer={"Typically 2 to 4 weeks, resulting in a clear requirements document and implementation proposal."} />
                </div>
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"Can we use your consultancy even if we implement with a different partner?"} />
                    <AnswerBubbleCard answer={"Yes. Our goal is to give you the clearest possible picture of what your ERP project requires."} />
                </div>
            </div>
        </div>
    </ServicesLayout>
  )
}
