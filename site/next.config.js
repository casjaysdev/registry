/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'CasjaysDev KASM Registry',
    description: 'a 3rd party Kasm supported workspaces.',
    icon: 'https://avatars.githubusercontent.com/u/20425123?s=200&v=4',
    listUrl: 'https://registry.casjaysdev.pro/',
    contactUrl: 'https://github.com/casjaysdev/registry/issues',
  },
  reactStrictMode: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
