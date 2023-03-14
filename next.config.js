/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  output: 'standalone',
};

module.exports = nextConfig;
