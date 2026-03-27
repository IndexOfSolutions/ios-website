import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'

export const metadata = {
  title: 'Dynamics NAV to Business Central Upgrade | Index of Solutions',
  description:
    'Upgrade legacy Microsoft Dynamics NAV (Navision) to Dynamics 365 Business Central. We help you audit customizations, migrate data, map extensions, test in parallel, and go-live with minimal disruption.',
  alternates: {
    canonical: '/services/nav-to-business-central-upgrade',
  },
  openGraph: {
    title: 'Dynamics NAV to Business Central Upgrade | Index of Solutions',
    description:
      'Upgrade legacy Microsoft Dynamics NAV (Navision) to Dynamics 365 Business Central. We help you audit customizations, migrate data, map extensions, test in parallel, and go-live with minimal disruption.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamics NAV to Business Central Upgrade | Index of Solutions',
    description:
      'Upgrade legacy Microsoft Dynamics NAV (Navision) to Dynamics 365 Business Central. We help you audit customizations, migrate data, map extensions, test in parallel, and go-live with minimal disruption.',
  },
  keywords: [
    'Dynamics NAV to Business Central upgrade',
    'NAV to Business Central upgrade',
    'Navision to Business Central',
    'data migration',
    'BC extensions',
  ].join(', '),
};

export default function NavToBusinessCentralUpgrade() {
  return (
    <ServicesLayout
        title={"Dynamics NAV to Business Central Upgrade"}
        imageURL={"nav-to-business-central-upgrade"}
        imageAlt={"Dynamics NAV to Business Central Upgrade"}
    >
        <p className='font-[inter] text-lg'>If you&apos;re running Microsoft Dynamics NAV (any version from NAV 2009 to NAV 2018), your system is either already end-of-support or approaching it. Business Central is the direct successor to NAV — and upgrading gives you cloud access, Copilot AI features, regular automatic updates, and modern integrations that NAV simply can&apos;t deliver.</p>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Why Upgrade Now?</h2>
            <ul className='list-disc ml-12 font-[inter]'>
                <li>NAV versions are progressively losing Microsoft support</li>
                <li>Business Central receives automatic feature updates twice a year</li>
                <li>Cloud deployment eliminates server maintenance costs</li>
                <li>Microsoft Copilot AI is embedded in BC — not available in NAV</li>
                <li>Modern API integrations with e-commerce, banking, and third-party apps</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Our NAV to BC Upgrade Process</h2>
            <p className='font-[inter]'>
            We&apos;ve migrated dozens of Lebanese businesses from NAV to Business Central. Our process preserves your historical data, remaps your customizations to BC extensions, and minimizes downtime during the transition.
            </p>
            <div className="flex items-stretch justify-evenly gap-20 flex-wrap">
                <div className="relative card min-w-[210] w-full max-w-[210] h-auto inset-shadow-services-card p-6 flex flex-col gap-8 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                    <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Step 01</h3>
                    <p className='mb-10 text-fg font-[inter]'>Audit your current NAV version and customizations</p>
                </div>
                <div className="relative card min-w-[210] w-full max-w-[210] h-auto inset-shadow-services-card p-6 flex flex-col gap-8 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                    <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Step 02</h3>
                    <p className='mb-10 text-fg font-[inter]'>Map which NAV customizations to rebuild, replace, or retire in BC</p>
                </div>
                <div className="relative card min-w-[210] w-full max-w-[210] h-auto inset-shadow-services-card p-6 flex flex-col gap-8 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                    <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Step 03</h3>
                    <p className='mb-10 text-fg font-[inter]'>Migrate data and configure BC environment</p>
                </div>
                <div className="relative card min-w-[210] w-full max-w-[210] h-auto inset-shadow-services-card p-6 flex flex-col gap-8 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                    <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Step 04</h3>
                    <p className='mb-10 text-fg font-[inter]'>Parallel testing — run NAV and BC simultaneously before cutover</p>
                </div>
                <div className="relative card min-w-[210] w-full max-w-[210] h-auto inset-shadow-services-card p-6 flex flex-col gap-8 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                    <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Step 05</h3>
                    <p className='mb-10 text-fg font-[inter]'>Go-live and decommission NAV</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Frequently Asked Questions.</h2>
            <div className="flex flex-col gap-8">
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"Will we lose our historical data from NAV?"} />
                    <AnswerBubbleCard answer={"No. We migrate your full transaction history and master data into Business Central."} />
                </div>
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"How long does a NAV to BC upgrade take?"} />
                    <AnswerBubbleCard answer={"Typically 2 to 4 months depending on the number of NAV customizations you have."} />
                </div>
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"Our NAV is heavily customized — can it still be upgraded?"} />
                    <AnswerBubbleCard answer={"Yes. We assess every customization and rebuild what's needed as BC extensions."} />
                </div>
            </div>
        </div>
    </ServicesLayout>
  )
}
