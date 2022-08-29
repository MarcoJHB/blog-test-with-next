/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com', 'localhost', 'picsum.photos'], // <== Domain name
  },
};

module.exports = nextConfig;
