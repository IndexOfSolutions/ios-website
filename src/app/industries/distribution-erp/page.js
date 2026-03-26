import IndustriesLayout from '@/components/layouts/Industries'
import React from 'react'

export default function DistributionERP() {
  return (
    <IndustriesLayout
        title={"Microsoft Dynamics 365 Business Central for Wholesale and Distribution in Lebanon"}
        imageURL={"business-central-for-distribution"}
        imageAlt={"Microsoft Dynamics 365 Business Central for Wholesale and Distribution in Lebanon"}
    >
        <p className='font-[inter] text-lg'>Distribution companies in Lebanon need tight control over purchasing, warehousing, and delivery — especially when operating across multiple locations or serving regional markets. Business Central gives wholesale and distribution businesses a single system to manage the full supply chain.</p>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>What BC Does for Distribution</h2>
            <ul className='list-disc ml-12 font-[inter]'>
                <li>Purchase order management and vendor tracking</li>
                <li>Multi-warehouse inventory with transfer orders between locations</li>
                <li>Sales order processing and delivery scheduling</li>
                <li>Customer pricing tiers and discount structures</li>
                <li>Real-time inventory availability for sales teams</li>
                <li>Integration with shipping and logistics platforms</li>
            </ul>
        </div>
    </IndustriesLayout>
  )
}
