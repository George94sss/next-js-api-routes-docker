/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // output: "standalone",
    experimental: {
      outputStandalone: true,
    },
  },
  presets: ["next/babel"],
};

module.exports = nextConfig;
