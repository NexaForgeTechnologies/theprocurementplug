/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
   output: 'standalone', 
   experimental: {
    outputFileTracingIncludes: {
      "*": ["./node_modules/lightningcss/**/*"],
    },
  },
};

export default nextConfig;
