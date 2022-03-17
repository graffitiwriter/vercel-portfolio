module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/hello-vercel',
        destination: 'https://vercel.com',
        permanent: false,
      },
    ]
  },
}
