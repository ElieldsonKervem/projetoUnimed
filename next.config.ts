import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: { properties: ['^cz-'] },
  },
}
export default nextConfig;
