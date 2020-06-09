const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  webpack: (config) => {
    return config;
  },
};

module.exports = withPlugins([withImages], nextConfig);
