module.exports = {
  serverRuntimeConfig: {
    API_URL: `${process.env.STRAPI_SERVICE_SCHEME}://${process.env.STRAPI_SERVICE_HOST}:${
      process.env.STRAPI_SERVICE_PORT ? process.env.STRAPI_SERVICE_PORT : 80
    }`
  },
  publicRuntimeConfig: {
    API_URL: `${process.env.STRAPI_SERVICE_SCHEME}://${process.env.STRAPI_SERVICE_HOST}:${
      process.env.STRAPI_SERVICE_PORT ? process.env.STRAPI_SERVICE_PORT : 80
    }`
  }
};
