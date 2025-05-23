/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add transpilePackages to handle Prism.js properly
  transpilePackages: ['prismjs'],
  // Increase the memory limit for the build process if needed
  experimental: {
    // Increase memory limit if you encounter memory issues
    // memoryBasedWorkersCount: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
