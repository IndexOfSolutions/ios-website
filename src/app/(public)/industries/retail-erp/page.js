import IndustriesLayout from '@/components/layouts/Industries'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'

export default function RetailERP() {
  return (
    <IndustriesLayout
        title={"Business Central For Retail"}
        imageURL={"business-central-for-retail"}
        imageAlt={"business-central-for-retail"}
    >
        <p className='font-[inter] text-lg'>Retail businesses face specific challenges — multi-branch operations, seasonal inventory swings, point-of-sale integration, and managing both LBP and USD transactions. Business Central handles all of this in one connected system.</p>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>What BC Does for Retail</h2>
            <ul className='list-disc ml-12 font-[inter]'>
                <li>Centralized inventory across all branches and warehouses</li>
                <li>POS integration — sales post directly to your general ledger</li>
                <li>Automated replenishment based on stock levels and sales velocity</li>
                <li>Customer loyalty and pricing management</li>
                <li>Real-time sales reporting by branch, category, or SKU</li>
                <li>Multi-currency support for USD and LBP transactions</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Our Retail Experience</h2>
            <p className='font-[inter]'>
            We&apos;ve implemented Business Central for Sports Experts, one of Lebanon&apos;s leading sports retail chains. The implementation covered inventory management, sales tracking, and full team training — resulting in a smooth transition and improved stock visibility across locations.
            </p>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Frequently Asked Questions.</h2>
            <div className="flex flex-col gap-8">
                <div className="qa flex flex-col gap-8">
                    <QuestionBubbleCard question={"Does Business Central integrate with our existing POS system?"} />
                    <AnswerBubbleCard answer={"In most cases yes. BC has APIs that integrate with major POS platforms. For retail-specific requirements, we also implement LS Central — a full POS and ERP solution built on top of Business Central."} />
                </div>
            </div>
        </div>
    </IndustriesLayout>
  )
}
