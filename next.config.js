/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/expressots-site',
  images: {
    path: `${this.basePath}/assets}`,
  },
}

module.exports = nextConfig
