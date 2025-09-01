// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...any other Next.js settings you already have…

  images: {
    unoptimized: true,
    domains: ["sfsu.app.box.com", "public.boxcloud.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'public.boxcloud.com',
        port: '',    // leave empty unless you need a custom port
        pathname: '/**', 
      },
    ],
  },
};

module.exports = nextConfig;