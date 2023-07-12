/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  // basePath: '/expressots-site',
  images: { unoptimized: true },
  assetPrefix: isProd ? '/expressots-site' : undefined,
}

module.exports = nextConfig
