import type { NextConfig } from "next";

// Placeholder production URL — replace with the real domain.
const site = "https://example.com";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: site,
  },
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
