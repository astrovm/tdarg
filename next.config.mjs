/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desactivar React Strict Mode en desarrollo para evitar doble renderizado
  reactStrictMode: false,
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
