/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXTAUTH_URL,
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
