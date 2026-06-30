import { createClient } from '@/utils/supabase/server';
import { getSiteUrl } from '@/lib/site-url';

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

  const allRoutes = [...staticRoutes, ...blogRoutes];
  const toUrl = (path) => (path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`);

  return allRoutes.map(({ path, priority, changeFrequency, lastModified: customLastModified }) => ({
    url: toUrl(path),
    lastModified: customLastModified || lastModified,
    changeFrequency,
    priority,
  }));
}
