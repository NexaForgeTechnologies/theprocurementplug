
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',   // ✅ this is required

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "procurementplug.s3.eu-north-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
