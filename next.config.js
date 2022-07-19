/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["ultroneous.com", "res.cloudinary.com"],
  },
  nextConfig: {
    reactStrictMode: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // env: {
  //   NEXT_PUBLIC_UA_ID: "UA-221098859-1",
  //   NEXT_PUBLIC_GA_ID: "G-Q1P00W81DB",
  // },
};
