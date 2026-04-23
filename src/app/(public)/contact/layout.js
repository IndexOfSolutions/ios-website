const getSiteUrl = () => {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (fromEnv) {
    return fromEnv.startsWith('http') ? fromEnv : `https://${fromEnv}`;
  }

  return 'https://indexofsolutions.com';
};

const siteUrl = getSiteUrl();

export const metadata = {
  title: 'Contact Index of Solutions | Business Central Experts in Lebanon',
  description:
    'Get in touch with our Microsoft Certified Business Central team. Contact us for consultancy, implementation, training, support, or to discuss your ERP project.',
  keywords: [
    'contact Business Central',
    'contact ERP partner',
    'Business Central consultancy',
    'ERP implementation inquiry',
    'Business Central support contact',
    'Index of Solutions contact',
  ].join(', '),
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    url: `${siteUrl}/contact`,
    title: 'Contact Index of Solutions | Business Central Experts',
    description:
      'Reach out to our Microsoft Certified Business Central team for ERP consultancy, implementation, training, and support services.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Index of Solutions | Business Central Team',
    description:
      'Contact our Business Central experts for ERP implementation and consultancy services.',
  },
};

export default function ContactLayout({ children }) {
  return children;
}
