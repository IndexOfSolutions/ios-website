import IndustriesLayout from '@/components/layouts/Industries'
import React from 'react'

const getSiteUrl = () => {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (fromEnv) {
    return fromEnv.startsWith('http') ? fromEnv : `https://${fromEnv}`;
  }

  return 'https://www.indexofsolutions.com';
};

const siteUrl = getSiteUrl();

export const metadata = {
  title: 'Business Central for Wholesale & Distribution | ERP for Supply Chain',
  description:
    'Microsoft Dynamics 365 Business Central for wholesale, distribution, and supply chain businesses: multi-warehouse inventory, purchase order management, delivery scheduling, and logistics integration.',
  keywords: [
    'Business Central for distribution',
    'distribution ERP',
    'wholesale ERP',
    'supply chain ERP',
    'multi-warehouse inventory',
    'purchase order management',
    'Business Central distribution',
    'logistics integration Business Central',
  ].join(', '),
  alternates: {
    canonical: `${siteUrl}/industries/distribution-erp`,
  },
  openGraph: {
    url: `${siteUrl}/industries/distribution-erp`,
    title: 'Business Central for Wholesale & Distribution | Supply Chain ERP',
    description:
      'Business Central ERP for distribution and wholesale businesses: multi-warehouse management, purchase orders, delivery scheduling, and supply chain visibility.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Central for Distribution | Supply Chain ERP',
    description:
      'Manage multi-warehouse inventory, purchase orders, and supply chain with Business Central for distribution.',
  },
};

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
