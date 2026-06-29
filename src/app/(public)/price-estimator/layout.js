import { getSiteUrl } from '@/lib/site-url'

const siteUrl = getSiteUrl()

export const metadata = {
  title: 'Business Central Implementation Cost Estimator | Index of Solutions',
  description:
    'Get an instant indicative cost estimate for your Microsoft Dynamics 365 Business Central implementation. Answer a few questions about your business and receive a tailored price range in minutes.',
  keywords: 'Business Central cost, ERP implementation cost, Business Central pricing, ERP estimate Lebanon, Business Central estimator',
  alternates: { canonical: `${siteUrl}/price-estimator` },
  openGraph: {
    url: `${siteUrl}/price-estimator`,
    title: 'Business Central Implementation Cost Estimator | Index of Solutions',
    description:
      'Get an instant indicative cost estimate for your Microsoft Dynamics 365 Business Central implementation.',
    images: [
      {
        url: `${siteUrl}/assets/images/pages/about-index-of-solutions-microsoft-business-solution-partner.webp`,
        alt: 'Business Central Cost Estimator — Index of Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Central Implementation Cost Estimator',
    description: 'Get an instant indicative cost estimate for your Business Central implementation.',
  },
}

const estimatorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'Business Central Implementation Cost Estimator',
  'description': 'An AI-powered tool that generates an indicative cost estimate for Microsoft Dynamics 365 Business Central implementations based on your business requirements.',
  'url': `${siteUrl}/price-estimator`,
  'applicationCategory': 'BusinessApplication',
  'provider': { '@type': 'Organization', 'name': 'Index of Solutions', 'url': siteUrl },
  'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
}

export default function PriceEstimatorLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(estimatorJsonLd) }} />
      {children}
    </>
  )
}
