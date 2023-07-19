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
        destination: `https://api.acikkuran.com/:path*`,
      },
      {
        source: "/api/hadith/:path*",
        destination: `https://api.sunnah.com/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
