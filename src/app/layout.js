import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EMT9G3LWNV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EMT9G3LWNV');
          `}
        </Script>
        {/*
          Opinly analytics pixel. The pk- key is publishable and write-only —
          it can send events and nothing else — so it is safe in client code.
          The secret OPINLY_API_KEY is server-only and never appears here.

          Once loaded it captures page views (including App Router client-side
          navigations, via a History API patch), clicks, form submissions and
          auto-identifies visitors from recognisable email fields, so most of
          the signal needs no further code.
        */}
        <Script
          id="opinly-pixel"
          strategy="afterInteractive"
          src="https://static.opinly.ai/p.js"
          data-key="pk-Nj_yOIGfTcUwXxy43BW072rkEeUS9jSYojVpPAX"
        />
        {children}
      </body>
    </html>
  );
}
