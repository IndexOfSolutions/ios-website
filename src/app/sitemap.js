const getSiteUrl = () => {
  // Prefer explicit public URL, fallback to prod domain, then localhost
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (fromEnv) {
    return fromEnv.startsWith("http") ? fromEnv : `https://${fromEnv}`;
  }

  return "http://localhost:3000";
};

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
