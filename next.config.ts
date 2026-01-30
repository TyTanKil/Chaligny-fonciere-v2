/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
