import { withOpinlyConfig } from '@opinly/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },

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
    ];
  },
};

// Injects the OPINLY_* env vars the SDK reads at runtime, and rewrites
// /images/* to the Opinly CDN so post images are served from our own domain.
// Existing redirects()/headers() are left untouched; we have no rewrites() of
// our own, so nothing is being wrapped or overridden here.
export default withOpinlyConfig({
  blogPath: '/insights',
  imagesPath: '/images',
  companyName: 'Index of Solutions',
  cdnNamespace: 'iTODrjyxXpvtRpc5gYuCP',
  siteUrl: 'https://www.indexofsolutions.com',
  // The site already sets images.unoptimized globally (Azure has no image
  // optimizer); keep Opinly consistent with that.
  unoptimizedImages: true,
})(nextConfig);
