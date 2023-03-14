/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  output: 'standalone',
  env: {
    FOO: 'foo from env',
    BAR: 'bar from env',
  },
  serverRuntimeConfig: {
    FOO: process.env.FOO,
    BAR: process.env.BAR,
  },
  publicRuntimeConfig: {
    FOO: process.env.FOO,
    BAR: process.env.BAR,
  },
};

module.exports = nextConfig;
