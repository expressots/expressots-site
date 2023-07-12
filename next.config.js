/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/expressots-site',
  images: {
    domains: ['localhost', 'expressots.github.io'],
    path: `${this.basePath}/assets}`,
  },
}

module.exports = nextConfig
