import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:foo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:foo/:foo*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;