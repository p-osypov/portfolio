/** @type {import('next').NextConfig} */
const { NODE_ENV } = process.env;

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: NODE_ENV === 'development',
      fileName: NODE_ENV === 'development',
      ssr: true,
    },
  },
};

module.exports = nextConfig;
