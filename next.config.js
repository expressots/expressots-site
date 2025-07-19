/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  transpilePackages: ['@tabler/icons-react'],

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Enhanced module resolution for CI/CD environments
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }

    // Explicit alias configuration for better CI compatibility
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
      '@/components': require('path').resolve(__dirname, 'src/components'),
      '@/data': require('path').resolve(__dirname, 'src/data'),
    }

    // Ensure proper module resolution order
    config.resolve.modules = [require('path').resolve(__dirname, 'src'), 'node_modules']

    return config
  },
}

module.exports = nextConfig
