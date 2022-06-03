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
  //   NEXT_PUBLIC_GA_ID: "UA-221098859-1",
  // },
};
