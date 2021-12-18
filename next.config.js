const { BLOG_URL } = process.env;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${BLOG_URL}/`,
        basePath: false
      },
      {
        source: "/docs/:path*",
        destination: `${BLOG_URL}/:path*`,
        basePath: false
      },
    ];
  },
};
