const { BLOG_URL } = process.env;

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})

module.exports = [
  withNextra(),
  {
    basePath: '/docs',
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: `${BLOG_URL}/:path*`,
          basePath: true,
        },
      ]
    },
  },
]
