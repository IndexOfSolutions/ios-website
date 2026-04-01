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

  // Redirects for old Google-indexed paths to new paths
  async redirects() {
    return [
      {
        source: '/industries/business-central-for-retail',
        destination: '/industries/retail-erp',
        permanent: true, // 301 redirect for SEO
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
    ];
  },
};

export default nextConfig;
