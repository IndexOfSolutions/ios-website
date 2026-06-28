import { getSiteUrl } from '@/lib/site-url';

export default function robots() {
  const rawSiteUrl = getSiteUrl();
  const siteUrl = rawSiteUrl.endsWith('/') ? rawSiteUrl.slice(0, -1) : rawSiteUrl;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/login/', '/_next/', '/src/', '/.env', '/.git', '/node_modules/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
