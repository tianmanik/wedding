/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  // assetPrefix supaya semua /_next/* di‐prefix /wedding/
  assetPrefix: '/wedding/',
};

module.exports = nextConfig;
