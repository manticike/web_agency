import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        pathname: '/docs/gallery/masonry/**', // double asterisks mean "any file under that folder"
      },
    ],
  },
};

export default nextConfig;
