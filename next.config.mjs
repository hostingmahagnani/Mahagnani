/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - update this to your repo name
  basePath: '/Mahagnani',
  assetPrefix: '/Mahagnani/',
  trailingSlash: true,
}

export default nextConfig
