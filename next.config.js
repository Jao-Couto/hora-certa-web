/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL_LOCAL: process.env.API_URL_LOCAL,
    API_URL: process.env.API_URL,
  }
}

module.exports = nextConfig
