/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - only apply basePath in production
  basePath: isProd ? '/Mahagnani' : '',
  assetPrefix: isProd ? '/Mahagnani/' : '',
  trailingSlash: true,
}

export default nextConfig
