import Image from 'next/image'
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
  title: 'About Index of Solutions | Microsoft Dynamics 365 Business Central Partner in Lebanon',
  description:
    'Learn about Index of Solutions: a Microsoft Certified partner with 12+ years of Microsoft Dynamics expertise, 50+ completed Business Central implementations, and a focus on helping Lebanese and regional SMBs modernize their ERP systems.',
  keywords: [
    'Index of Solutions',
    'Microsoft Dynamics partner',
    'Business Central partner',
    'Microsoft Certified Partner',
    'ERP consultancy firm',
    'Business Central implementation company',
    'Lebanon ERP partner',
    'MENA region ERP',
  ].join(', '),
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    url: `${siteUrl}/about`,
    title: 'About Index of Solutions | Microsoft Dynamics Business Central Partner',
    description:
      'Microsoft Certified Business Central partner with 12+ years of expertise, 50+ implementations, and a team of consultants and developers based in Beirut, Lebanon.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Index of Solutions | Business Central Partner',
    description:
      'Learn about our Microsoft Certified team, track record, and expertise in Business Central implementations across Lebanon and MENA.',
  },
};

export default function About() {
    return (
        <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
            <div className="relative container flex flex-col gap-16 max-w-[1366px] mx-auto w-full">
                <div className='flex flex-col gap-1 items-center text-center justify-center'>
                    <div className="flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl">
                        <div className='hidden md:block glow-line-left w-72'></div>
                        <h1>About Index of Solutions</h1>
                        <div className='hidden md:block glow-line-right w-72'></div>
                    </div>
                    <div className="w-full md:hidden glow-line"></div>
                </div>
                <div className="flex flex-col gap-16 w-full max-w-[800] mx-auto text-white">
                    <Image src={`/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`} alt={"About Index Of Solutions Microsoft Business Solution Partner"} width={100} height={100} className='w-full' />
                    <p className='font-[inter] text-lg'>Index of Solutions (IOS) is a Microsoft Business Solution partner based in Beirut, Lebanon. Founded on 2022, we have focused exclusively on Microsoft Dynamics — first Dynamics NAV, now Dynamics 365 Business Central — helping Lebanese and regional SMBs replace outdated systems with modern, connected ERP platforms.</p>
                    <div className="flex flex-col gap-4">
                        <h2 className='text-4xl font-[newake]'>Our Team</h2>
                        <p className='font-[inter]'>
                            We are a team of 10-20 full-time Microsoft Certified consultants and developers based in Beirut. Every project is handled in-house — we don&apos;t subcontract. Our team speaks Arabic and English and is available during Lebanese business hours.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className='text-4xl font-[newake]'>Our Track Record</h2>
                        <ul className='list-disc ml-12 font-[inter]'>
                            <li>12+ years in Microsoft Dynamics</li>
                            <li>50+ completed ERP implementations</li>
                            <li>Clients in retail, pharmaceutical, distribution, entertainment, and manufacturing</li>
                            <li>Microsoft Certified Partner status maintained continuously</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className='text-4xl font-[newake]'>Why We&apos;re Different</h2>
                        <p className='font-[inter]'>
                        Most ERP partners in Lebanon offer multiple products — SAP, Odoo, Dynamics — and spread their expertise thin. We focus exclusively on Microsoft Dynamics 365 Business Central. That specialization means faster implementations, fewer issues, and better results for our clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
