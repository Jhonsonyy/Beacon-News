/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.cnn.com', // Allows all subdomains
      },
    ]
  }
};

export default nextConfig;
