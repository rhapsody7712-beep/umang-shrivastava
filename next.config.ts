import type { NextConfig } from "next";

const repoBasePath = "/umang-shrivastava";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
};

export default nextConfig;
