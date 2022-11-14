module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_API_ENDPOINT}/:path*`,
      },
    ];
  },
};
