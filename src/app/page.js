import { ContactUs } from "@/sections/ContactUs";
import { FAQ } from "@/sections/FAQ";
import { Hero } from "@/sections/Hero";
import { WhatWeOffer } from "@/sections/WhatWeOffer";
import { WhyChooseIOS } from "@/sections/WhyChooseIOS";

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
  title: "Home",
  description:
    "Index of Solutions helps businesses design, build, and scale digital products with modern web development and marketing solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteUrl,
    title: "Index of Solutions",
    description:
      "Design, build, and scale digital products with modern web development and marketing solutions.",
  },
  twitter: {
    title: "Index of Solutions",
    description:
      "Design, build, and scale digital products with modern web development and marketing solutions.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Index of Solutions",
    url: `${siteUrl}/`,
  };

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
