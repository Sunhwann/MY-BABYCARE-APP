// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,       // 페이지 경로 끝에 슬래시 추가
  eslint: {
    ignoreDuringBuilds: true // 빌드 시 ESLint 오류 무시
  },
  distDir: "functions/next",

};

export default nextConfig;
