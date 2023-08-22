/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "picsum.photos",
      "ductcan.onrender.com",
      "127.0.0.1",
      "ductcan.azurewebsites.net",
    ],
  },
};

module.exports = nextConfig;
