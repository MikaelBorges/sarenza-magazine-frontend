const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  serverRuntimeConfig: {
    API_URL: `${process.env.STRAPI_SERVICE_SCHEME}://${process.env.STRAPI_SERVICE_HOST}:${process.env.STRAPI_SERVICE_PORT ? process.env.STRAPI_SERVICE_PORT : 80}`
  }
};
