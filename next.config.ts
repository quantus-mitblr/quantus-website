import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // enables static export
  images: {
    unoptimized: true, // since next/image optimization needs a server
  },
  distDir: "build", // custom build directory
  basePath: "/quantus-website", // repo name as base path
  assetPrefix: "/quantus-website/", 
};


export default nextConfig;
