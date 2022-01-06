const withTM = require("next-transpile-modules");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM([
  path.join(process.cwd(), "node_modules/@tuftandneedle/design-system"),
  path.join(process.cwd(), "node_modules/@tuftandneedle/design-system-tokens"),
  path.join(process.cwd(), "node_modules/@tuftandneedle/design-system-theming"),
])(nextConfig);
