/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  transpilePackages: ['@tabler/icons-react'],

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fix for module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    return config
  },
}

module.exports = nextConfig
