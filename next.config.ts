import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // produces a plain static website in the "out" folder
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
