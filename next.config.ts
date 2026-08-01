import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io', // Replace with your image host domain
        port: '',
        pathname: '/badge/**', // Allows all paths under the domain
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ],
  },
};

export default nextConfig;
