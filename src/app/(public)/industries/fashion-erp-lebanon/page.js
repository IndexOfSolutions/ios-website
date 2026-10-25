import IndustriesLayout from '@/components/layouts/Industries'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import Link from 'next/link'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()
const pageUrl = `${siteUrl}/industries/fashion-erp-lebanon`

const features = [
  {
    icon: '👗',
    title: 'Size, Colour & Style Variants',
    body: 'Manage every style as one item with its full size and colour matrix. Each variant has its own barcode, stock level, and sales history, and you avoid creating thousands of separate item cards.',
  },
  {
    icon: '🗓️',
    title: 'Seasons & Collections',
    body: 'Tag products by season, collection, and drop. Plan buying per collection, compare sell-through between seasons, and see which lines to reorder, mark down, or discontinue.',
  },
  {
    icon: '🧵',
    title: 'Production & Atelier Costing',
    body: 'For houses that design and produce, track fabric, trims, and labour on every production order. You get the true landed cost of each piece, including work done by outside workshops.',
  },
  {
    icon: '🏬',
    title: 'Boutiques, Wholesale & E-commerce',
    body: 'Run flagship boutiques, concessions, wholesale accounts, and your online store on one inventory. Stock moves to wherever the demand is, and every channel reports into the same P&L.',
  },
  {
    icon: '🏷️',
    title: 'Pricing, Markdowns & Promotions',
    body: 'Manage price lists per channel and currency, schedule end-of-season markdowns, and run promotions with clear margin visibility, so a sale does not wipe out the season\'s profit.',
  },
  {
    icon: '🌍',
    title: 'Imports & Multi-Currency',
    body: 'Buy fabric in EUR, sell in USD, and pay local costs in LBP. Business Central handles multi-currency purchasing, landed costs, and customs charges so every item carries its real cost.',
  },
]

const businesses = [
  'Haute couture and bridal houses with made-to-measure orders',
  'Ready-to-wear designer labels with boutiques and wholesale accounts',
  'Multi-brand fashion retailers and franchise operators',
  'Footwear, accessories, and jewellery brands with large variant ranges',
  'Fashion importers and distributors supplying regional retailers',
  'Direct-to-consumer brands selling online and through pop-ups',
]

const faqs = [
  {
    question: 'Can Business Central handle sizes and colours without thousands of item cards?',
    answer: 'Yes. Business Central uses item variants, so one style holds its full size and colour matrix. Each variant has its own barcode, stock, and sales history. For larger fashion retailers we add LS Central, which provides a dedicated variant matrix, replenishment by size curve, and POS built on the same database.',
  },
  {
    question: 'We design and produce our own collections. Can we track production costs?',
    answer: 'Yes. Production orders and bills of materials capture fabric, trims, embroidery, and labour for every piece, including work sent to outside workshops. Made-to-measure and bridal orders can be costed one by one, so you know the margin on each gown, not just an average across the collection.',
  },
  {
    question: 'Does it connect to our boutiques\' POS and our online store?',
    answer: 'Yes. With LS Central, boutique POS runs on the same system as your back office, with real-time stock and sales. Business Central also integrates with Shopify and other e-commerce platforms, so online orders, stock levels, and customers stay in sync across every channel.',
  },
  {
    question: 'How long does a fashion ERP implementation take?',
    answer: 'A single-brand house with a few boutiques typically goes live in 10 to 14 weeks. Multi-brand retailers with production, wholesale, and e-commerce usually take 14 to 22 weeks. We schedule go-live between seasons so the next collection launches on the new system.',
  },
]

const relatedServices = [
  { href: '/services/ls-central-transforms-business-central-into-a-complete-retail-powerhouse', label: 'LS Central for Fashion Retail & POS' },
  { href: '/industries/retail-erp', label: 'Business Central for Retail' },
  { href: '/services/warehouse-management-business-central', label: 'Warehouse Management in Business Central' },
  { href: '/services/power-bi-and-analytics', label: 'Power BI for Sell-Through & Margin Analysis' },
]

const industryJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      'name': 'Business Central ERP for Fashion Houses and Apparel Brands in Lebanon',
      'serviceType': 'Fashion ERP implementation',
      'description': 'Microsoft Dynamics 365 Business Central for fashion houses in Lebanon: size and colour variants, seasons and collections, production costing, boutique and e-commerce inventory, markdowns, and multi-currency imports.',
      'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
      'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
      'url': pageUrl,
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        'name': question,
        'acceptedAnswer': { '@type': 'Answer', 'text': answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${siteUrl}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Industries' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Fashion ERP', 'item': pageUrl },
      ],
    },
  ],
}

export const metadata = {
  title: 'Fashion ERP Lebanon | Business Central',
  description:
    'Business Central ERP for fashion houses in Lebanon: size and colour variants, seasonal collections, production costing, boutique and online stock, and markdowns.',
  keywords: [
    'fashion ERP Lebanon',
    'apparel ERP Lebanon',
    'fashion house ERP',
    'Business Central for fashion',
    'clothing retail ERP Lebanon',
    'size colour variant ERP',
    'LS Central fashion',
    'couture business software Beirut',
  ].join(', '),
  alternates: { canonical: pageUrl },
  openGraph: {
    url: pageUrl,
    title: 'Fashion ERP Lebanon | Business Central for Fashion Houses',
    description: 'Size and colour variants, collections, production costing and omnichannel inventory for Lebanese fashion houses with Business Central.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/business-central-for-retail.webp`, alt: 'Business Central for Fashion Houses in Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion ERP Lebanon | Business Central',
    description: 'Variants, collections, production costing and omnichannel inventory for fashion houses in Lebanon.',
  },
}

export default function FashionERPLebanon() {
  return (
    <IndustriesLayout
      jsonLd={industryJsonLd}
      title={'Business Central ERP for Fashion Houses in Lebanon'}
      imageURL={'business-central-for-retail'}
      imageAlt={'Business Central ERP for Fashion Houses and Apparel Brands in Lebanon'}
    >
      <p className='font-[inter] text-lg'>
        Beirut is a global name in fashion, from couture and bridal ateliers to ready-to-wear labels selling worldwide. Behind each collection is complex operational work: hundreds of size and colour variants, fabric bought in foreign currencies, made-to-measure orders, and stock spread across boutiques, wholesale partners, and online stores. Microsoft Dynamics 365 Business Central brings design-to-sale operations into one system, so you know what every piece costs, where it is, and what it earns.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What Business Central Does for Fashion Houses</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>
          {features.map(({ icon, title, body }) => (
            <div key={title} className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
              <span className='text-3xl' aria-hidden='true'>{icon}</span>
              <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>{title}</h3>
              <p className='text-fg font-[inter]'>{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>The Fashion Challenge: Margin Lives in the Details</h2>
        <p className='font-[inter]'>
          In fashion, profit is won or lost on small numbers: the sell-through of one size in one colour, the true cost of hand embroidery, or a markdown started a week too early. Spreadsheets and basic retail software cannot show these numbers reliably, especially when a house sells through boutiques, wholesale, and e-commerce at the same time.
        </p>
        <p className='font-[inter]'>
          Business Central connects buying, production, inventory, and sales at variant level. Creative directors can see which styles sell, merchandisers can replenish by size, and finance can measure the real margin on each collection, using the same live data.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Fashion Businesses We Work With</h2>
        <ul className='font-[inter] flex flex-col gap-3 list-none'>
          {businesses.map((item) => (
            <li key={item} className='flex items-start gap-3'>
              <span className='text-primary mt-1'>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Fashion ERP: Common Questions</h2>
        {faqs.map(({ question, answer }) => (
          <div key={question} className='flex flex-col gap-4'>
            <QuestionBubbleCard question={question} />
            <AnswerBubbleCard answer={answer} />
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Related Services</h2>
        <ul className='font-[inter] flex flex-col gap-3 list-none'>
          {relatedServices.map(({ href, label }) => (
            <li key={href} className='flex items-start gap-3'>
              <span className='text-primary mt-1'>→</span>
              <Link href={href} className='hover:text-primary underline underline-offset-4'>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['Fashion ERP', 'Business Central', 'Apparel', 'LS Central', 'Variant Management', 'Lebanon'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </IndustriesLayout>
  )
}
