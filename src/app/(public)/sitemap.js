const getSiteUrl = () => {
  // Prefer explicit public URL, fallback to prod domain, then localhost
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (fromEnv) {
    return fromEnv.startsWith("http") ? fromEnv : `https://${fromEnv}`;
  }

  return "https://www.indexofsolutions.com";
};

export default function sitemap() {
  const rawSiteUrl = getSiteUrl();
  const siteUrl = rawSiteUrl.endsWith("/")
    ? rawSiteUrl.slice(0, -1)
    : rawSiteUrl;
  const lastModified = new Date();

  const routes = [
    // Top priority
    { path: "/", priority: 1, changeFrequency: "weekly" },
    {
      path: "/microsoft-dynamics-365-business-central-lebanon",
      priority: 0.9,
      changeFrequency: "weekly",
    },

    // Core services (Business Central first; NAV mainly when upgrading)
    { path: "/services/business-central-consultancy", priority: 0.85, changeFrequency: "weekly" },
    { path: "/services/business-central-implementation", priority: 0.85, changeFrequency: "weekly" },
    { path: "/services/business-central-support", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/business-central-training", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/power-bi-and-analytics", priority: 0.75, changeFrequency: "weekly" },
    { path: "/services/nav-to-business-central-upgrade", priority: 0.8, changeFrequency: "weekly" },

    // Industry landing pages
    { path: "/industries/retail-erp", priority: 0.7, changeFrequency: "weekly" },
    { path: "/industries/distribution-erp", priority: 0.7, changeFrequency: "weekly" },
    { path: "/industries/pharma-erp", priority: 0.7, changeFrequency: "weekly" },

    // Other indexable pages
    { path: "/blogs", priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "weekly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "monthly" },
  ];

  const toUrl = (path) => (path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`);

  return [
    ...routes.map(({ path, priority, changeFrequency }) => ({
      url: toUrl(path),
      lastModified,
      changeFrequency,
      priority,
    })),
  ];
}
