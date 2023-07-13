/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: ["images.unsplash.com"], // İzin verilen görüntü hostları burada belirtilmelidir
  },
  async rewrites() {
    return [
      {
        source: "/api/_/:path*",
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
