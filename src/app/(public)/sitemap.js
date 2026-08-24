import { buildSitemapEntries } from '@opinly/shared';
import { opinlyConfig } from '@opinly/next';

import { createClient } from '@/utils/supabase/server';
import { getOpinly, isOpinlyConfigured } from '@/clients/opinly';
import { getSiteUrl } from '@/lib/site-url';
import { PRIVACY_POLICIES } from '@/constants/privacyPolicies';

export default async function sitemap() {
  const rawSiteUrl = getSiteUrl();
  const siteUrl = rawSiteUrl.endsWith('/') ? rawSiteUrl.slice(0, -1) : rawSiteUrl;
  const lastModified = new Date();

  const staticRoutes = [
    // Top priority
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/microsoft-dynamics-365-business-central-lebanon', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/top-microsoft-dynamics-business-central-partners-in-lebanon', priority: 0.85, changeFrequency: 'monthly' },

    // Core services (Business Central first; NAV mainly when upgrading)
    { path: '/services/business-central-consultancy', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/services/business-central-implementation', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/services/business-central-support', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/business-central-training', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/power-bi-and-analytics', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/services/nav-to-business-central-upgrade', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/dynamics-nav-support', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/services/ls-central-transforms-business-central-into-a-complete-retail-powerhouse', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/services/full-stack-hr-platform', priority: 0.65, changeFrequency: 'monthly' },

    // About pages
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about/case-studies', priority: 0.75, changeFrequency: 'monthly' },

    // New service pages
    { path: '/services/microsoft-copilot-for-business-central', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/services/power-apps-lebanon', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/services/warehouse-management-business-central', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/services/e-invoicing-vat-lebanon', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/services/microsoft-fabric-lebanon', priority: 0.65, changeFrequency: 'monthly' },
    { path: '/services/whatsapp-business-central-integration', priority: 0.65, changeFrequency: 'monthly' },

    // Industry landing pages
    { path: '/industries/retail-erp', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/industries/distribution-erp', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/industries/pharma-erp', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/industries/food-and-beverage-erp', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/industries/construction-erp-lebanon', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/industries/ngo-erp-lebanon', priority: 0.65, changeFrequency: 'monthly' },

    // Pricing guide + comparison pages
    { path: '/business-central-pricing-lebanon', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/compare/business-central-vs-sap', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/compare/business-central-vs-odoo', priority: 0.75, changeFrequency: 'monthly' },

    // Other indexable pages
    { path: '/blogs', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/price-estimator', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.2, changeFrequency: 'monthly' },
    { path: '/terms-and-conditions', priority: 0.2, changeFrequency: 'monthly' },
    { path: '/eula', priority: 0.2, changeFrequency: 'monthly' },
  ];

  // Fetch dynamic blog posts from Supabase
  let blogRoutes = [];
  try {
    const supabase = await createClient();
    const { data: blogs, error } = await supabase
      .from('Blogs')
      .select('link, updated_at');

    if (!error && blogs) {
      blogRoutes = blogs.map((blog) => ({
        path: `/blogs/${blog.link}`,
        priority: 0.5,
        changeFrequency: 'monthly',
        lastModified: new Date(blog.updated_at),
      }));
    }
  } catch (err) {
    console.warn('⚠️ Could not fetch blogs for sitemap:', err);
  }

  // Per-app privacy policies — static pages driven by src/constants/privacyPolicies.js
  const policyRoutes = PRIVACY_POLICIES.map((policy) => ({
    path: `/privacy-policy/${policy.slug}`,
    priority: 0.2,
    changeFrequency: 'monthly',
  }));

  const allRoutes = [...staticRoutes, ...policyRoutes, ...blogRoutes];
  const toUrl = (path) => (path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`);

  const siteEntries = allRoutes.map(
    ({ path, priority, changeFrequency, lastModified: customLastModified }) => ({
      url: toUrl(path),
      lastModified: customLastModified || lastModified,
      changeFrequency,
      priority,
    })
  );

  // Opinly's /insights tree. One routes() call covers every addressable route —
  // the index, posts, categories, tags and authors — and buildSitemapEntries
  // turns each into an absolute URL using the prefixes configured in
  // next.config.mjs, so there is no URL building to keep in sync here.
  let opinlyEntries = [];
  if (isOpinlyConfigured()) {
    try {
      const routes = await getOpinly().routes();
      opinlyEntries = buildSitemapEntries(routes, opinlyConfig).map((entry) => ({
        url: entry.url,
        lastModified: new Date(entry.lastModified),
        changeFrequency: 'weekly',
        priority: 0.6,
      }));
    } catch (err) {
      console.warn('⚠️ Could not fetch Opinly routes for sitemap:', err?.message);
    }
  }

  return [...siteEntries, ...opinlyEntries];
}
