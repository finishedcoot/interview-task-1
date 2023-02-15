/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['assets.coingecko.com']
  },
  env: {
    API_URL: process.env['API_URL']
  }
}

module.exports = nextConfig
