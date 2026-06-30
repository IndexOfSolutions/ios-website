import IndustriesLayout from '@/components/layouts/Industries'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const industryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Business Central ERP for Food & Beverage',
  'description': 'Microsoft Dynamics 365 Business Central for food and beverage businesses: recipe costing, expiry management, multi-location inventory, supplier management, and real-time profitability tracking.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/industries/food-and-beverage-erp`,
}

export const metadata = {
  title: 'Business Central ERP for Food & Beverage | Restaurant & F&B ERP Lebanon',
  description:
    'Microsoft Dynamics 365 Business Central for F&B businesses in Lebanon: recipe costing, expiry tracking, multi-branch inventory, supplier management, and real-time profitability per location — all in one system.',
  keywords: [
    'food and beverage ERP Lebanon',
    'restaurant ERP Lebanon',
    'F&B ERP Business Central',
    'recipe costing ERP',
    'food distribution ERP Lebanon',
    'Business Central for restaurants',
    'hospitality ERP Lebanon',
    'catering ERP Lebanon',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/industries/food-and-beverage-erp` },
  openGraph: {
    url: `${siteUrl}/industries/food-and-beverage-erp`,
    title: 'Business Central ERP for Food & Beverage | F&B ERP Lebanon',
    description: 'ERP built for F&B: recipe costing, expiry management, multi-branch inventory, and real-time profitability tracking with Business Central.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/business-central-for-retail.webp`, alt: 'Business Central for Food & Beverage — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Central ERP for Food & Beverage | Lebanon',
    description: 'Recipe costing, expiry tracking, multi-branch inventory and profitability — Business Central for F&B businesses in Lebanon.',
  },
}

export default function FoodAndBeverageERP() {
  return (
    <IndustriesLayout
      jsonLd={industryJsonLd}
      title={'Microsoft Dynamics 365 Business Central for Food & Beverage'}
      imageURL={'business-central-for-retail'}
      imageAlt={'Business Central for Food and Beverage Lebanon'}
    >
      <p className='font-[inter] text-lg'>
        Food and beverage businesses in Lebanon operate under unique pressure: tight margins, expiry-sensitive stock, multi-location complexity, and supply chains that shift daily. A generic ERP doesn't cut it. Business Central gives F&B operators — from restaurant chains to food distributors — a single connected system that controls costs, prevents waste, and keeps every branch profitable.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What Business Central Does for F&B</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🍽️</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Recipe & Menu Costing</h3>
            <p className='text-fg font-[inter]'>
              Define recipes with exact ingredient quantities and costs. Business Central calculates the real cost of every dish automatically — so you know your margin before you set the price.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📅</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Expiry & Lot Tracking</h3>
            <p className='text-fg font-[inter]'>
              Track every item by lot number and expiry date. Business Central alerts you before stock expires, enforces FEFO (first expired, first out) picking, and provides full traceability from supplier to customer.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🏪</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Multi-Branch Inventory</h3>
            <p className='text-fg font-[inter]'>
              See stock levels across every branch, warehouse, and outlet in real time. Manage inter-branch transfers, centralise purchasing, and eliminate the over-ordering that drains cash.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🚛</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Supplier & Procurement</h3>
            <p className='text-fg font-[inter]'>
              Manage multiple suppliers per ingredient, compare prices, automate purchase orders based on reorder points, and track deliveries against orders — cutting the time your purchasing team spends on admin.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>💰</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Branch Profitability</h3>
            <p className='text-fg font-[inter]'>
              View revenue, cost of goods, and gross margin per branch, per product category, or per period. Identify which locations are profitable and which are bleeding margin.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>💱</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Multi-Currency Support</h3>
            <p className='text-fg font-[inter]'>
              Manage LBP and USD transactions simultaneously, with automatic exchange rate handling — essential for any Lebanese F&B business dealing with dual-currency pricing and supplier invoices.
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>F&B Businesses We Work With</h2>
        <p className='font-[inter]'>
          Business Central is flexible enough to work across the full spectrum of food and beverage operations — from single-location restaurants to large food distribution networks.
        </p>
        <ul className='font-[inter] flex flex-col gap-3 list-none'>
          {[
            'Restaurant chains and quick-service operators with multiple branches',
            'Food importers and distributors managing warehouse stock and deliveries',
            'Catering and events companies with project-based cost tracking',
            'Food manufacturing businesses with production planning and batch processing',
            'Franchise operators requiring consolidated reporting across franchisees',
            'Cafés and bakeries managing perishables, recipes, and daily production',
          ].map((item) => (
            <li key={item} className='flex items-start gap-3'>
              <span className='text-primary mt-1'>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Common Questions</h2>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Can Business Central replace our current POS system?' />
          <AnswerBubbleCard answer='Business Central integrates with leading POS systems rather than replacing them. If you need a fully unified POS and ERP solution, we also offer LS Central — which is built directly on top of Business Central and eliminates the need for a separate POS platform entirely.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='We run both LBP and USD. Can Business Central handle that?' />
          <AnswerBubbleCard answer='Yes. Business Central has native multi-currency support, including LBP and USD. You can price in either currency, receive supplier invoices in mixed currencies, and report in both — with automatic exchange rate adjustments. This is one of the most common requirements for Lebanese F&B businesses and Business Central handles it natively.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='How long does an F&B implementation take?' />
          <AnswerBubbleCard answer='A standard F&B implementation typically runs 8–14 weeks depending on the number of branches, complexity of recipes, and whether we are migrating data from a previous system. We run discovery, configuration, and parallel testing before go-live so your operations are never disrupted.' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['Food & Beverage', 'Business Central', 'Restaurant ERP', 'Recipe Costing', 'Lebanon', 'F&B ERP'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </IndustriesLayout>
  )
}
