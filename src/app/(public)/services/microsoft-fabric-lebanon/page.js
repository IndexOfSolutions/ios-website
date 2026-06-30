import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Microsoft Fabric Analytics in Lebanon',
  'description': 'Unify your data and build enterprise-grade analytics with Microsoft Fabric — the all-in-one analytics platform that connects Business Central, SQL, and all your data sources into a single intelligent layer.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/services/microsoft-fabric-lebanon`,
}

export const metadata = {
  title: 'Microsoft Fabric Analytics in Lebanon | Data & AI Platform | Index of Solutions',
  description:
    'Unify your business data with Microsoft Fabric — the all-in-one analytics platform combining data engineering, data warehousing, real-time intelligence, and Power BI into a single platform. Deployed by certified consultants in Lebanon.',
  keywords: [
    'Microsoft Fabric Lebanon',
    'Microsoft Fabric analytics',
    'data warehouse Lebanon',
    'data engineering Lebanon',
    'Business Central Microsoft Fabric',
    'Power BI Fabric Lebanon',
    'OneLake Lebanon',
    'real-time analytics Lebanon',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/services/microsoft-fabric-lebanon` },
  openGraph: {
    url: `${siteUrl}/services/microsoft-fabric-lebanon`,
    title: 'Microsoft Fabric Analytics in Lebanon | Index of Solutions',
    description: 'Unify all your data in one platform — data engineering, warehousing, real-time analytics, and Power BI — with Microsoft Fabric.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/power-bi-and-analytics.webp`, alt: 'Microsoft Fabric Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Fabric Analytics in Lebanon | Index of Solutions',
    description: 'All your data, one platform. Microsoft Fabric for Lebanese businesses.',
  },
}

export default function MicrosoftFabricLebanon() {
  return (
    <ServicesLayout
      jsonLd={serviceJsonLd}
      title={'Microsoft Fabric — Unified Analytics for Lebanese Businesses'}
      imageURL={'power-bi-and-analytics'}
      imageAlt={'Microsoft Fabric Analytics Lebanon'}
    >
      <p className='font-[inter] text-lg'>
        Microsoft Fabric is the next generation of Microsoft's analytics platform — announced in 2023 and now in general availability. It replaces the fragmented stack of Azure Data Factory, Azure Synapse, and standalone Power BI workspaces with a single, integrated platform. If your business collects data from Business Central, CRM, e-commerce, or any other source, Fabric is where you consolidate it, analyse it, and act on it.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What Microsoft Fabric Includes</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🏠</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>OneLake</h3>
            <p className='text-fg font-[inter]'>
              A single, unified data lake for your entire organisation. Business Central data, SQL databases, files, and streaming data all land in OneLake — one place, one set of permissions, no duplication between systems.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>⚙️</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Data Engineering</h3>
            <p className='text-fg font-[inter]'>
              Build data pipelines that move and transform data from any source into OneLake. Native connectors for Business Central, SQL Server, Salesforce, REST APIs, and hundreds of other sources — no custom middleware.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🏛️</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Data Warehouse</h3>
            <p className='text-fg font-[inter]'>
              A fully managed, serverless SQL data warehouse built on OneLake. Query petabytes of data with T-SQL, build dimensional models, and power enterprise-scale reporting without managing infrastructure.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>⚡</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Real-Time Intelligence</h3>
            <p className='text-fg font-[inter]'>
              Ingest and analyse streaming data in real time — IoT sensors, website events, transaction streams — and trigger automated actions or update dashboards the moment data arrives.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📊</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Power BI (Native)</h3>
            <p className='text-fg font-[inter]'>
              Power BI is natively integrated into Fabric. Dashboards and reports connect directly to OneLake data without connectors or data copies — faster, fresher, and simpler than the standalone Power BI setup.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🤖</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>AI & Copilot in Fabric</h3>
            <p className='text-fg font-[inter]'>
              Microsoft Copilot is embedded across Fabric — write data pipelines in natural language, generate DAX measures by description, summarise datasets, and build reports by asking questions rather than clicking through menus.
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>Who Is Microsoft Fabric For?</h2>
        <p className='font-[inter]'>
          Fabric is not a replacement for Power BI connected directly to Business Central — that setup remains the right choice for most Lebanese SMBs. Fabric becomes the right answer when:
        </p>
        <ul className='font-[inter] flex flex-col gap-3 list-none'>
          {[
            'You have data in multiple systems (Business Central + CRM + e-commerce + external databases) that you need to combine for analysis',
            'You need to analyse large historical datasets that are too slow to query directly from Business Central',
            'You have real-time data streams (IoT, transactions, web events) that need to be incorporated into dashboards',
            'Your data team needs SQL-based transformation and modelling capabilities beyond what Power BI Desktop provides',
            'You are building a data platform to serve multiple departments or business units from one governed source of truth',
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
          <QuestionBubbleCard question='Is Microsoft Fabric replacing Azure Synapse and Azure Data Factory?' />
          <AnswerBubbleCard answer='Yes. Microsoft Fabric is the strategic successor to Azure Synapse Analytics, Azure Data Factory, and the standalone Power BI Premium service. Microsoft is investing in Fabric as the unified platform and migrating existing tools into it. New analytics projects should be built on Fabric rather than legacy Azure data services.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='How does Fabric connect to Business Central?' />
          <AnswerBubbleCard answer='Microsoft provides a native Business Central connector for Fabric that replicates your BC data into OneLake automatically. This includes transactional data, master data, and custom tables. Once in OneLake, the data can be joined with other sources, transformed, and used in Power BI dashboards — without any impact on Business Central performance.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='What does a Microsoft Fabric implementation cost?' />
          <AnswerBubbleCard answer='Fabric is licensed through a capacity model (F SKUs) rather than per-user. For most SMB analytics workloads, an F2 or F4 capacity is sufficient. Pricing starts at approximately $262/month for F2 capacity. Implementation cost depends on the number of data sources, pipeline complexity, and reporting requirements — contact us for a scoped estimate.' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['Microsoft Fabric', 'Power BI', 'Data Analytics', 'Business Central', 'Lebanon', 'OneLake'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </ServicesLayout>
  )
}
