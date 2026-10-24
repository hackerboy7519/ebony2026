import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/collections",
        permanent: true,
      },
      {
        source: "/our-work",
        destination: "/collections",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
