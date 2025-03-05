import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      destination: '/',
      permanent: true,
      source: '/:foo',
    },
    {
      destination: '/',
      permanent: true,
      source: '/:foo/:foo*',
    },
  ],
};

export default nextConfig;
