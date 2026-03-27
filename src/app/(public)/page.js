import { ContactUs } from "@/sections/ContactUs";
import { FAQ } from "@/sections/FAQ";
import { Hero } from "@/sections/Hero";
import { WhatWeOffer } from "@/sections/WhatWeOffer";
import { WhyChooseIOS } from "@/sections/WhyChooseIOS";
import { FAQs } from "@/constants/FAQs";
import { DEFAULT_META_DESCRIPTION, META_KEYWORDS_STRING } from "@/constants/seo";

const getSiteUrl = () => {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (fromEnv) {
    return fromEnv.startsWith("http") ? fromEnv : `https://${fromEnv}`;
  }

  return "https://www.indexofsolutions.com";
};

const siteUrl = getSiteUrl();

export const metadata = {
  title: "Microsoft Dynamics 365 Business Central ERP Experts | Index of Solutions",
  description: DEFAULT_META_DESCRIPTION,
  keywords: META_KEYWORDS_STRING,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    url: siteUrl,
    title: "Microsoft Dynamics 365 Business Central ERP Experts | Index of Solutions",
    description: DEFAULT_META_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Dynamics 365 Business Central ERP Experts | Index of Solutions",
    description: DEFAULT_META_DESCRIPTION,
  },
};

export default async function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Microsoft Dynamics 365 Business Central ERP Experts | Index of Solutions",
      description: DEFAULT_META_DESCRIPTION,
      url: `${siteUrl}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WhatWeOffer />
      <WhyChooseIOS />
      <FAQ />
      <ContactUs />
    </>
  );
}
