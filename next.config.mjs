/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  env: {
    RESEND_API_KEY: 're_bjDykrU5_C8VAmCAmsBkZtqAqMskWjvv8',
    RESEND_FROM: "Index Of Solutions <onboarding@resend.dev>",
    CONTACT_TO: 'sales@indexofsolutions.com',
    NEXT_PUBLIC_SUPABASE_URL: 'https://jaltvriofrcrvyrhbcsq.supabase.co ',
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY: 'sb_publishable_9nJw5TNERqW5YhrD9QN6jw_-vLul_2d',
  }
};

export default nextConfig;
