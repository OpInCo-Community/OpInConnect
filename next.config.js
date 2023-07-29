/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    images: false,
  },
  output: "export",
  router: false,
};

module.exports = nextConfig;