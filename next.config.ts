import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: isProd ? '/nextjs-github-page' : '',
  assetPrefix: isProd ? '/nextjs-github-page/' : '',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
