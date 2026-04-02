/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  // Security
  poweredByHeader: false,

  // Azure handles compression at proxy level, don't double-compress
  compress: false,

  reactStrictMode: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/industries/business-central-for-retail',
        destination: '/industries/retail-erp',
        permanent: true,
      },
      {
        source: '/industries/business-central-for-distribution',
        destination: '/industries/distribution-erp',
        permanent: true,
      },
      {
        source: '/industries/business-central-for-pharma',
        destination: '/industries/pharma-erp',
        permanent: true,
      },
      {
        source: '/Terms-and-Conditions',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/Privacy-Policy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/About',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/About/Case-Studies',
        destination: '/about/case-studies',
        permanent: true,
      },
      {
        source: '/Contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/Blogs',
        destination: '/blogs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
