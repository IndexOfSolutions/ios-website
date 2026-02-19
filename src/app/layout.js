import { Header } from "@/components/layouts/Header";
import "./globals.css";
import localFont from "next/font/local";
import { Footer } from "@/components/layouts/Footer";
import { SmoothScrolling } from "@/components/animations/SmoothScrolling";

const getSiteUrl = () => {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (fromEnv) {
    return fromEnv.startsWith("http") ? fromEnv : `https://${fromEnv}`;
  }

  return "http://localhost:3000";
};

const newake = localFont({
  src: "../../public/assets/fonts/Newake.woff2",
  variable: "--font-newake",
});

const interItalic = localFont({
  src: "../../public/assets/fonts/Inter-Italic.woff2",
  variable: "--font-inter-italic",
});

const inter = localFont({
  src: "../../public/assets/fonts/Inter.woff2",
  variable: "--font-inter",
});

const jetBrainsMono = localFont({
  src: "../../public/assets/fonts/JetBrainsMono.woff2",
  variable: "--font-jetBrainsMono",
});

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Index of Solutions",
    template: "%s | Index of Solutions",
  },
  description:
    "Index of Solutions helps businesses design, build, and scale digital products with modern web development and marketing solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Index of Solutions",
    title: "Index of Solutions",
    description:
      "Design, build, and scale digital products with modern web development and marketing solutions.",
  },
  twitter: {
    card: "summary",
    title: "Index of Solutions",
    description:
      "Design, build, and scale digital products with modern web development and marketing solutions.",
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
      "@type": "Organization",
      name: "Index of Solutions",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Index of Solutions",
      url: siteUrl,
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
