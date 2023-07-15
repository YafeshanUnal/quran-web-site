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
        source: "/api/quran/:path*",
        destination: `${process.env.QURAN_API_URL}/:path*`,
      },
      {
        source: "/api/hadith/:path*",
        destination: `${process.env.HADITH_API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
