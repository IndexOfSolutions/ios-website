/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true, //add this
  distDir: 'build',
  output: "standalone", //add this
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://jaltvriofrcrvyrhbcsq.supabase.co',
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY: 'sb_publishable_9nJw5TNERqW5YhrD9QN6jw_-vLul_2d',
  }
};

export default nextConfig;
