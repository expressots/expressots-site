/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  // basePath: '/expressots-site',
  images: { unoptimized: true },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/expressots-site' : '',
}

module.exports = nextConfig
