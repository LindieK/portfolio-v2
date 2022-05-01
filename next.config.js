/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@use "styles/variables.scss" as *;`,
  },
};

module.exports = nextConfig;
