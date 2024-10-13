/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_ID: "c056c336-1079-4642-8877-097e4dd12b54",
    APP_CLIENT_KEY: "cFa79bluW1rTXvNWbU9D1Yty1V31CCCn56dEMOOO",
    APP_ID: "4f450f58-7f9d-43fc-9acb-d130155095eb",
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/superbridge/:path*",
        destination: "https://www.super-bridge.net/:path*", // Rewrite to this domain
      },
      {
        source: "/relay/:path", // Maps to the store route
        destination: "https://www.app-relaylink.app/:path*", // Rewrite to this domain
      },
      // Add more routes here as needed
    ];
  },
};

export default nextConfig;
