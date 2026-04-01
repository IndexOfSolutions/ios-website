import ServicesLayout from '@/components/layouts/Services'
import React from 'react'

export const metadata = {
  title: 'Power BI & Analytics for Business Central | Index of Solutions',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',

  },
  description:
    'Build Power BI dashboards connected to your Business Central environment for real-time visibility into finance, sales, inventory, and operations—so decision-makers get answers faster.',
  alternates: {
    canonical: '/services/power-bi-and-analytics',
  },
  openGraph: {
    title: 'Power BI & Analytics for Business Central | Index of Solutions',
    description:
      'Build Power BI dashboards connected to your Business Central environment for real-time visibility into finance, sales, inventory, and operations—so decision-makers get answers faster.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Power BI & Analytics for Business Central | Index of Solutions',
    description:
      'Build Power BI dashboards connected to your Business Central environment for real-time visibility into finance, sales, inventory, and operations—so decision-makers get answers faster.',
  },
  keywords: [
    'Power BI',
    'Power BI for Business Central',
    'Business Central analytics',
    'ERP reporting',
    'real-time dashboards',
  ].join(', '),
};

export default function PowerBIAndAnalytics() {
  return (
    <ServicesLayout
        title={"Power BI & Analytics for Business Central"}
        imageURL={"power-bi-and-analytics"}
        imageAlt={"Power BI & Analytics for Business Central"}
    >
        <p className='font-[inter] text-lg'>Your Business Central ERP holds valuable data — but raw data isn&apos;t insight. We build Power BI dashboards connected directly to your Business Central environment, giving management real-time visibility into finance, sales, inventory, and operations.</p>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>What We Build</h2>
            <ul className='list-disc ml-12 font-[inter]'>
                <li>Financial dashboards — P&L, cash flow, budget vs actual</li>
                <li>Sales performance dashboards by rep, region, or product</li>
                <li>Inventory analytics — stock levels, turnover, aging</li>
                <li>Operations dashboards — purchase orders, delivery timelines</li>
                <li>Executive summary dashboards for leadership</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-[newake]'>Why Power BI + Business Central</h2>
            <p className='font-[inter]'>
            Power BI connects natively to Business Central with no middleware required. Data refreshes automatically. Reports are accessible on any device. And because it&apos;s part of the Microsoft ecosystem, your team already knows how to use it.
            </p>
        </div>
    </ServicesLayout>
  )
}
