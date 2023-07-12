/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  // basePath: '/expressots-site',
  images: { unoptimized: true },
  assetPrefix: '/expressots-site',
  basePath: '/expressots-site',
}

module.exports = nextConfig
