/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },

  // titik kunci: semua route + public asset akan di‐prefix "/wedding"
  basePath: '/wedding',
  assetPrefix: '/wedding/',
};

module.exports = nextConfig;
