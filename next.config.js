/** @type {import('next').NextConfig} */
function cssLoaderOptions(modules) {
  const { getLocalIdent, ...others } = modules; // Need to delete getLocalIdent else localIdentName doesn't work
  return {
    ...others,
    localIdentName: '[hash:base64:6]',
    exportLocalsConvention: 'camelCaseOnly',
    mode: 'local',
  };
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
