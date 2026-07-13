import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  devIndicators: false,
  // Pin the workspace root to this project so Next stops picking the
  // stray lockfile in the home directory.
  turbopack: { root: __dirname },
  // Allow the dev server to be opened from other devices on the LAN
  // (e.g. a phone for mobile testing) without blocking HMR.
  allowedDevOrigins: ["192.168.1.21"],
};

export default nextConfig;
