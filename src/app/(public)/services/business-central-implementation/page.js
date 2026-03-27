import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'

export const metadata = {
  title: 'Microsoft Dynamics 365 Business Central Implementation | Index of Solutions',
  description:
    '12+ years implementing Microsoft Dynamics 365 Business Central for SMBs. We deliver full end-to-end implementations: discovery, configuration, data migration, user training, and post-launch support.',
  alternates: {
    canonical: '/services/business-central-implementation',
  },
  openGraph: {
    title: 'Microsoft Dynamics 365 Business Central Implementation | Index of Solutions',
    description:
      '12+ years implementing Microsoft Dynamics 365 Business Central for SMBs. We deliver full end-to-end implementations: discovery, configuration, data migration, user training, and post-launch support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Dynamics 365 Business Central Implementation | Index of Solutions',
    description:
      '12+ years implementing Microsoft Dynamics 365 Business Central for SMBs. We deliver full end-to-end implementations: discovery, configuration, data migration, user training, and post-launch support.',
  },
  keywords: [
    'Microsoft Dynamics 365 Business Central implementation',
    'Business Central implementation',
    'ERP implementation',
    'Microsoft Certified Partner',
    'data migration',
    'user training',
  ].join(', '),
};

export default function BusinessCentralImplementation() {
    return (
        <ServicesLayout
            title={"Microsoft Dynamics 365 Business Central Implementation"}
            imageURL={"business-central-implementation"}
            imageAlt={"Microsoft Dynamics 365 Business Central Implementation"}
        >
            <p className='font-[inter] text-lg'>
                We manage full Business Central implementations from discovery to go-live. Our methodology covers requirements gathering, system configuration, data migration, user training, and post-launch support all delivered by our team of Microsoft Certified consultants based in Beirut.
            </p>
            <div className="flex flex-col gap-4">
                <h2 className='text-4xl font-[newake]'>Our Implementation Process.</h2>
                <div className="flex items-center justify-evenly gap-20 flex-wrap">
                    <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                        <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Discovery & Scoping</h3>
                        <p className='mb-10 text-fg font-[inter]'>We start by mapping your current processes, identifying gaps, and defining the exact scope of your BC implementation. No surprises later.</p>
                        <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">01</span>
                    </div>
                    <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                        <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Configuration & Customization</h3>
                        <p className='mb-10 text-fg font-[inter]'>We configure BC to match your workflows — chart of accounts, approval flows, inventory setup, reporting structures. Where standard BC doesn&apos;t fit, we build custom extensions in AL code.</p>
                        <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">02</span>
                    </div>
                    <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                        <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Data Migration</h3>
                        <p className='mb-10 text-fg font-[inter]'>We migrate your existing data — customers, vendors, items, opening balances — from your current system into Business Central cleanly and accurately.</p>
                        <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">03</span>
                    </div>
                    <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                        <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Training</h3>
                        <p className='mb-10 text-fg font-[inter]'>Your team learns the system before go-live. We train finance, operations, and management users separately based on their roles.</p>
                        <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">04</span>
                    </div>
                    <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                        <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Go-Live & Hypercare</h3>
                        <p className='mb-10 text-fg font-[inter]'>We stay with you through go-live week, resolving issues in real time so operations don&apos;t stop.</p>
                        <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">05</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className='text-4xl font-[newake]'>Why Choose IOS for Your Implementation?</h2>
                <ul className='list-disc ml-12 font-[inter]'>
                    <li>12+ years exclusively focused on Microsoft Dynamics</li>
                    <li>50+ completed implementations across Lebanon and the region</li>
                    <li>Fixed-scope proposals — you know the cost before we start</li>
                    <li>Local team, available during Lebanese business hours</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className='text-4xl font-[newake]'>Frequently Asked Questions.</h2>
                <div className="flex flex-col gap-8">
                    <div className="qa flex flex-col gap-8">
                        <QuestionBubbleCard question={"What data can be migrated from our old system?"} />
                        <AnswerBubbleCard answer={"We migrate master data (customers, vendors, items), opening balances, and historical transactions where needed."} />
                    </div>
                    <div className="qa flex flex-col gap-8">
                        <QuestionBubbleCard question={"Do you implement Business Central for companies outside Lebanon?"} />
                        <AnswerBubbleCard answer={"Yes. We serve clients across the MENA region and globally, working remotely when needed."} />
                    </div>
                </div>
            </div>
        </ServicesLayout>
    )
}
