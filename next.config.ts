const nextConfig = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: { properties: ['^cz-'] },
  },
};

module.exports = nextConfig;
