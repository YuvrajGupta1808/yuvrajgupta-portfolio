/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/yuvrajgupta-portfolio',
  assetPrefix: '/yuvrajgupta-portfolio/',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;