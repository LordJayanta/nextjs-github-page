import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: '/nextjs-github-page',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
