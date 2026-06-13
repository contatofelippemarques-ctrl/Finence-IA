import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: false,
  experimental: {
    reactCompiler: true
  }
};

export default nextConfig;
