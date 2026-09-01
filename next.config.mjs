/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.VERCEL ? {} : { output: 'standalone' }),
  outputFileTracingIncludes: {
    '/*': ['./content/blog/**/*'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/atlas', destination: '/projects/project-atlas' },
      { source: '/orbit', destination: '/projects/orbit-api' },
      { source: '/signals', destination: '/projects/signal-lab' },
    ];
  },
};

export default nextConfig;
