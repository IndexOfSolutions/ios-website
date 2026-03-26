import IndustriesLayout from '@/components/layouts/Industries'
import React from 'react'

export default function PharmaERP() {
  return (
    <IndustriesLayout
        title={"Microsoft Dynamics 365 Business Central for Pharmaceutical Businesses"}
        imageURL={"business-central-for-pharma"}
        imageAlt={"Microsoft Dynamics 365 Business Central for Pharmaceutical Businesses"}
    >
        <p className='font-[inter] text-lg'>Pharmaceutical distribution and pharmacy management in Lebanon require precise inventory tracking, expiry date management, lot traceability, and compliance documentation. Business Central provides all of this in a configurable, cloud-based ERP platform.</p>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>What BC Does for Pharma</h2>
            <ul className='list-disc ml-12 font-[inter]'>
                <li>Lot and serial number tracking from purchase to sale</li>
                <li>Expiry date management with automated alerts</li>
                <li>Multi-warehouse inventory with bin-level tracking</li>
                <li>Supplier and purchase order management</li>
                <li>Sales and pricing management by customer class</li>
                <li>Full audit trail for compliance purposes</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Our Pharma Experience</h2>
            <p className='font-[inter]'>
            We implemented Business Central for Mazen Pharmacy, managing their pharmaceutical inventory and retail operations. The implementation streamlined their supply chain and kept operations running without interruption during the transition.
            </p>
        </div>
    </IndustriesLayout>
  )
}
