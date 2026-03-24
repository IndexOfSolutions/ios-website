/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true, //add this
  output: "standalone", //add this
  images: {
    unoptimized: true,
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_PUBLISHABLE_DEFAULT_KEY: process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM: process.env.RESEND_FROM,
    CONTACT_TO: process.env.CONTACT_TO,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  }
};

export default nextConfig;
