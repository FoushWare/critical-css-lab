import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable CSS optimization for production builds
  // Next.js automatically optimizes CSS in production
  // This includes minification and inline critical CSS for SSR
  compress: true,
  
  // Optimize CSS loading with built-in critical CSS extraction
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
