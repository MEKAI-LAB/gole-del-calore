import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "gole-del-calore.vercel.app",
          },
        ],
        destination: "https://legoledelcalore.it/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
