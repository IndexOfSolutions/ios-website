import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import Image from 'next/image'
import React from 'react'

export default async function MicrosoftDynamics365BCLebanon() {
    return (
        <ServicesLayout
            title={"Microsoft Dynamics 365 Business Central Partner in Lebanon"}
            imageURL={"microsoft-dynamics-365-business-central-lebanon"}
            imageAlt={"microsoft-dynamics-365-business-central-lebanon"}
        >
            <p className='font-[inter] text-lg'>
                Index of Solutions is a Microsoft Certified partner based in Beirut, Lebanon, specializing in Microsoft Dynamics 365 Business Central implementations for small and medium-sized businesses. With over 12 years of experience and 50+ completed projects across Lebanon and the MENA region, we help businesses replace outdated systems with a modern, connected ERP.
            </p>
            <div className="flex flex-col gap-4">
                <h2 className='text-4xl font-[newake]'>What Is Microsoft Dynamics 365 Business Central?</h2>
                <p className='font-[inter]'>
                    Microsoft Dynamics 365 Business Central is an all-in-one ERP solution designed for SMBs. It connects your finance, inventory, sales, purchasing, and operations into one platform — replacing scattered spreadsheets and disconnected software. It runs on the Microsoft Azure cloud, integrates natively with Microsoft 365, Outlook, Teams, and Power BI, and can be customized to fit your specific industry needs.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className='text-4xl font-[newake]'>Why Lebanese Businesses Choose Business Central?</h2>
                <p className='font-[inter]'>
                    Running a business in Lebanon comes with unique challenges — currency volatility, multi-currency transactions, complex supply chains, and the need for real-time financial visibility. Business Central addresses all of these directly:
                </p>
                <ul className='list-disc ml-12 font-[inter]'>
                    <li>Full multi-currency support including USD/LBP management</li>
                    <li>Real-time financial reporting and cash flow tracking</li>
                    <li>Cloud-based access from anywhere — no on-site servers required</li>
                    <li>Scalable as your business grows regionally</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className='text-4xl font-[newake]'>Our Business Central Services in Lebanon.</h2>
                <p className='font-[inter]'>
                    We offer end-to-end Business Central services:
                </p>
                <ul className='list-disc ml-12 font-[inter]'>
                    <li>Implementation — full project delivery from scoping to go-live</li>
                    <li>Consultancy — strategy and system design before you commit</li>
                    <li>NAV to BC Upgrade — migrate from legacy Dynamics NAV</li>
                    <li>Training — get your team certified and productive</li>
                    <li>Support — ongoing post-go-live support and maintenance</li>
                    <li>Power BI & Analytics — turn your BC data into dashboards</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className='text-4xl font-[newake]'>Industries We Serve in Lebanon.</h2>
                <p className='font-[inter]'>
                    We&apos;ve delivered Business Central projects for Lebanese businesses in retail, pharmaceutical distribution, cinema and entertainment, sports and consumer goods, and multi-company holding groups.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className='text-4xl font-[newake]'>Frequently Asked Questions.</h2>
                <div className="flex flex-col gap-8">
                    <div className="qa flex flex-col gap-8">
                        <QuestionBubbleCard question={"How long does a Business Central implementation take in Lebanon?"} />
                        <AnswerBubbleCard answer={"Typically 1 to 4 months depending on complexity, number of users, and required customizations. Simple implementations can go live in 6 weeks."} />
                    </div>
                    <div className="qa flex flex-col gap-8">
                        <QuestionBubbleCard question={"How much does Business Central cost in Lebanon?"} />
                        <AnswerBubbleCard answer={"Typically 1 to 4 months depending on complexity, number of users, and required customizations. Simple implementations can go live in 6 weeks."} />
                    </div>
                    <div className="qa flex flex-col gap-8">
                        <QuestionBubbleCard question={"Can Business Central handle LBP and USD accounting?"} />
                        <AnswerBubbleCard answer={"Yes. Business Central supports full multi-currency accounting, which is essential for Lebanese businesses managing transactions in both LBP and USD."} />
                    </div>
                    <div className="qa flex flex-col gap-8">
                        <QuestionBubbleCard question={"Do you provide support after go-live?"} />
                        <AnswerBubbleCard answer={"Yes. We offer dedicated post-implementation support packages with guaranteed response times."} />
                    </div>
                </div>
            </div>
        </ServicesLayout>
    )
}
