/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true, //add this
  distDir: 'build',
  output: "standalone", //add this
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
