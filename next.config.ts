import type { NextConfig } from "next";

const vercelAliases = [
  "gole-del-calore.vercel.app",
  "gole-del-calore-2effes-projects.vercel.app",
  "gole-del-calore-git-main-2effes-projects.vercel.app",
];

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return vercelAliases.map((host) => ({
      source: "/:path*",
      has: [
        {
          type: "host",
          value: host,
        },
      ],
      destination: "https://legoledelcalore.it/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
