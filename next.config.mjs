/** @type {import('next').NextConfig} */
const nextConfig = nextConfig = {
  basePath: "/guest-accounting",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
