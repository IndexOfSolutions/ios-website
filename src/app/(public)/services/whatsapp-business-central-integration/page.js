import ServicesLayout from '@/components/layouts/Services'
import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard'
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard'
import React from 'react'
import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'WhatsApp Integration with Business Central in Lebanon',
  'description': 'Connect WhatsApp Business to Microsoft Dynamics 365 Business Central — send order confirmations, invoices, delivery notifications, and payment reminders directly via WhatsApp from your ERP.',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'areaServed': { '@type': 'Country', 'name': 'Lebanon' },
  'url': `${siteUrl}/services/whatsapp-business-central-integration`,
}

export const metadata = {
  title: 'WhatsApp Integration with Business Central Lebanon | Index of Solutions',
  description:
    'Connect WhatsApp Business to Microsoft Dynamics 365 Business Central. Send order confirmations, invoices, delivery updates, and payment reminders directly via WhatsApp — where your Lebanese customers actually respond.',
  keywords: [
    'WhatsApp Business Central integration',
    'WhatsApp ERP Lebanon',
    'WhatsApp invoice notification Lebanon',
    'Business Central WhatsApp',
    'WhatsApp order confirmation ERP',
    'ERP WhatsApp integration Lebanon',
    'WhatsApp payment reminder Business Central',
  ].join(', '),
  alternates: { canonical: `${siteUrl}/services/whatsapp-business-central-integration` },
  openGraph: {
    url: `${siteUrl}/services/whatsapp-business-central-integration`,
    title: 'WhatsApp Integration with Business Central Lebanon | Index of Solutions',
    description: 'Send invoices, order confirmations, and payment reminders via WhatsApp directly from Business Central — where Lebanese customers actually respond.',
    type: 'website',
    images: [{ url: `${siteUrl}/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`, alt: 'WhatsApp Business Central Integration Lebanon — Index of Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Integration with Business Central | Lebanon',
    description: 'Send invoices and order updates via WhatsApp directly from your ERP.',
  },
}

export default function WhatsAppBusinessCentralIntegration() {
  return (
    <ServicesLayout
      jsonLd={serviceJsonLd}
      title={'WhatsApp Integration with Business Central'}
    >
      <p className='font-[inter] text-lg'>
        In Lebanon, WhatsApp is not just a messaging app — it is the primary business communication channel. Customers respond to WhatsApp messages faster than emails, answer WhatsApp calls before phone calls, and expect order updates, invoices, and delivery confirmations on the platform they already use all day. Connecting Business Central to WhatsApp Business API means your ERP communicates the way your customers actually want to communicate.
      </p>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>What You Can Send from Business Central via WhatsApp</h2>
        <div className='flex items-stretch justify-evenly gap-8 flex-wrap'>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📄</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Invoice Delivery</h3>
            <p className='text-fg font-[inter]'>
              Send invoices as PDF attachments directly via WhatsApp the moment they are posted in Business Central. Customers receive and open them immediately — instead of finding them buried in a spam folder three days later.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>✅</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Order Confirmations</h3>
            <p className='text-fg font-[inter]'>
              When a sales order is confirmed in Business Central, a WhatsApp message goes to the customer automatically — with order number, items, quantities, and expected delivery date. No manual follow-up needed.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🚚</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Delivery Notifications</h3>
            <p className='text-fg font-[inter]'>
              Trigger a WhatsApp notification when an order is shipped or delivered. Customers know their goods are on the way without calling your customer service team — reducing inbound queries significantly.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>💳</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Payment Reminders</h3>
            <p className='text-fg font-[inter]'>
              Send automated payment reminders via WhatsApp when invoices approach or pass their due date. WhatsApp reminders have dramatically higher open and response rates than email reminders — accelerating collections.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>📦</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Stock & Availability Alerts</h3>
            <p className='text-fg font-[inter]'>
              Notify sales staff or customers via WhatsApp when an item they need is back in stock, when a reorder point is triggered, or when a backorder is ready to ship.
            </p>
          </div>

          <div className='relative card min-w-[310] w-full max-w-[310] h-auto inset-shadow-services-card p-6 flex flex-col gap-4 items-start justify-between rounded-lg border-2 border-border-color bg-mainbg'>
            <span className='text-3xl'>🔔</span>
            <h3 className='font-[inter] text-fg text-xl font-black leading-none w-full'>Internal Alerts</h3>
            <p className='text-fg font-[inter]'>
              Send internal WhatsApp notifications to managers or teams — approval requests, low inventory alerts, overdue receivables reports, or daily sales summaries — directly from Business Central workflows.
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-[newake]'>How the Integration Works</h2>
        <p className='font-[inter]'>
          The WhatsApp Business API connects to Business Central through Power Automate — Microsoft's workflow automation platform. We configure flows that listen for events in Business Central (invoice posted, order shipped, payment overdue) and trigger WhatsApp messages via the API.
        </p>
        <p className='font-[inter]'>
          This requires a WhatsApp Business API account (provided through Meta or a licensed Business Solution Provider). We handle the setup, message template approval process, and the Power Automate flows that connect everything together.
        </p>
        <div className='flex flex-col gap-4 mt-4'>
          {[
            { step: '01', title: 'WhatsApp Business API Setup', desc: 'We register your business with the WhatsApp Business API and configure your sender profile and approved message templates.' },
            { step: '02', title: 'Power Automate Flow Configuration', desc: 'We build the automation flows that listen for triggers in Business Central and send the right message at the right moment.' },
            { step: '03', title: 'Template Design & Approval', desc: 'WhatsApp requires pre-approved templates for business-initiated messages. We design and submit them on your behalf.' },
            { step: '04', title: 'Testing & Go-Live', desc: 'We test every message type across your real workflows before going live, so your customers only ever receive correct, professional communications.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className='flex gap-6 items-start border-l-2 border-primary pl-6'>
              <span className='font-[newake] text-primary text-3xl leading-none'>{step}</span>
              <div>
                <h3 className='font-[inter] font-bold text-fg text-lg'>{title}</h3>
                <p className='font-[inter] text-fg'>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        <h2 className='text-4xl font-[newake]'>Common Questions</h2>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Does this work with my existing WhatsApp Business account?' />
          <AnswerBubbleCard answer='The integration requires the WhatsApp Business API — not the standard WhatsApp Business app. The API version is designed for programmatic messaging at scale and is separate from the free WhatsApp Business app. We can help you upgrade to API access or set up a new account if needed.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='Can customers reply to WhatsApp messages and have it logged in Business Central?' />
          <AnswerBubbleCard answer='Two-way messaging (where customer replies are captured and linked to records in Business Central) is possible but requires additional configuration. We build this when clients need a full customer communication log inside the ERP. For most businesses, one-way outbound notifications are the starting point.' />
        </div>
        <div className='flex flex-col gap-4'>
          <QuestionBubbleCard question='How much does WhatsApp Business API cost?' />
          <AnswerBubbleCard answer='Meta charges per conversation (a 24-hour messaging window), not per message. Pricing varies by country and message category (utility, marketing, authentication). For Lebanon, utility messages (invoices, order confirmations) are typically the most cost-effective category. We provide a cost estimate based on your expected monthly message volume before any commitment.' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {['WhatsApp', 'Business Central', 'Integration', 'Lebanon', 'Power Automate', 'ERP Automation'].map((tag) => (
          <span key={tag} className='font-[inter] text-sm text-fg border border-border-color bg-mainbg rounded-full px-4 py-1'>{tag}</span>
        ))}
      </div>
    </ServicesLayout>
  )
}
