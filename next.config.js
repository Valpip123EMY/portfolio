/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Add basePath for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio.github.io/' : '',
}

module.exports = nextConfig