/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/work/inafrica-network",
        destination: "/work/pixylivex",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
