import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        pathname: '/docs/gallery/masonry/**',
      },
    ],
  },
};

export default nextConfig;
