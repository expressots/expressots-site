/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  // basePath: '/expressots-site',
  images: { unoptimized: true },
  assetPrefix: 'https://expressots.github.io/expressots-site',
}

module.exports = nextConfig
