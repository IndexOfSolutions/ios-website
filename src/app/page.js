import { ContactUs } from "@/sections/ContactUs";
import { FAQ } from "@/sections/FAQ";
import { Hero } from "@/sections/Hero";
import { WhatWeOffer } from "@/sections/WhatWeOffer";
import { WhyChooseIOS } from "@/sections/WhyChooseIOS";
import { FAQs } from "@/constants/FAQs";
import { DEFAULT_META_DESCRIPTION } from "@/constants/seo";
import { resolve } from "styled-jsx/css";

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
  title: "Microsoft Dynamics NAV & Dynamics 365 Business Central ERP Experts",
  description:
    "12+ years implementing Microsoft Dynamics NAV and Dynamics 365 BC. ERP implementation, consultancy, customization, development, support and training for small and medium businesses. Microsoft Certified Partner.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteUrl,
    title: "Microsoft Dynamics NAV & Dynamics 365 BC ERP Experts | Index of Solutions",
    description: DEFAULT_META_DESCRIPTION,
  },
  twitter: {
    title: "Microsoft Dynamics NAV & Business Central ERP Experts | Index of Solutions",
    description: DEFAULT_META_DESCRIPTION,
  },
};

export default async function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Microsoft Dynamics NAV & Dynamics 365 Business Central ERP Experts | Index of Solutions",
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
