import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;


module.exports = {
  trailingSlash: true, // 각 경로에 슬래시를 추가
};