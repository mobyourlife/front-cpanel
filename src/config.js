const config = {
  env: process.env.NODE_ENV,
  api: {
    url: process.env.MOB_API_URL || 'http://localhost:5000',
  },
}

export default config
