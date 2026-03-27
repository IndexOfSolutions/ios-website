import { Header } from "@/components/layouts/Header";
import "./globals.css";
import localFont from "next/font/local";
import { Footer } from "@/components/layouts/Footer";
import { SmoothScrolling } from "@/components/animations/SmoothScrolling";
import { SITE_NAME, DEFAULT_META_DESCRIPTION, META_KEYWORDS_STRING, SERVICES_KEYWORDS } from "@/constants/seo";

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

const newake = localFont({
  src: "../../../public/assets/fonts/Newake.woff2",
  variable: "--font-newake",
});

const interItalic = localFont({
  src: "../../../public/assets/fonts/Inter-Italic.woff2",
  variable: "--font-inter-italic",
});

const inter = localFont({
  src: "../../../public/assets/fonts/Inter.woff2",
  variable: "--font-inter",
});

const jetBrainsMono = localFont({
  src: "../../../public/assets/fonts/JetBrainsMono.woff2",
  variable: "--font-jetBrainsMono",
});

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Microsoft Dynamics 365 Business Central ERP Experts | Index of Solutions",
    template: "%s | Index of Solutions",
  },
  description: DEFAULT_META_DESCRIPTION,
  keywords: META_KEYWORDS_STRING,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: SITE_NAME,
    title: "Microsoft Dynamics 365 Business Central ERP Implementation | Index of Solutions",
    description: DEFAULT_META_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Dynamics 365 Business Central ERP Experts | Index of Solutions",
    description: DEFAULT_META_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: SITE_NAME,
      url: siteUrl,
      logo: `${siteUrl}/assets/images/logo/ios.png`,
      description: DEFAULT_META_DESCRIPTION,
      foundingDate: "2012",
      sameAs: ["https://www.linkedin.com/company/indexofsolutions/"],
      areaServed: { "@type": "Place", name: "Lebanon" },
      knowsAbout: [
        "Microsoft Dynamics 365 Business Central",
        "Microsoft Dynamics NAV",
        "ERP implementation",
        "Power BI",
      ],
      slogan:
        "Expert Dynamics 365 Business Central implementation, consultancy, and support, including NAV to Business Central upgrades.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ERP and Dynamics Services",
        itemListElement: SERVICES_KEYWORDS.slice(0, 10).map((name, i) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: SITE_NAME,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/blogs?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${newake.variable} ${interItalic.variable} ${inter.variable} ${jetBrainsMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrolling>
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
