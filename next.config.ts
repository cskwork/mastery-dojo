import type { NextConfig } from "next";

// Static export so the app can be hosted on any static host (Vercel, GitHub Pages).
// NEXT_PUBLIC_BASE_PATH is set only for sub-directory hosts (GitHub Pages project
// site); root deploys leave it empty so URLs stay at "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath || undefined,
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
