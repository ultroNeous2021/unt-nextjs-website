/** @type {import('next').NextConfig} */
module.exports = {
  nextConfig: {
    reactStrictMode: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_GA_ID: "UA-221098859-1",
  },
  // env: {
  //   NEXT_PUBLIC_GA_ID: "",
  // },
};
