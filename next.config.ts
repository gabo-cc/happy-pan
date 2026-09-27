import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iyvqxnvllmxqlaclevkr.supabase.co",
        pathname: "/storage/v1/object/public/productos/**",
      },
    ],
  },
};

export default nextConfig;