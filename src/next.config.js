const IS_PROD = process.env.NODE_ENV === 'production';

const API_URL = `${process.env.STRAPI_SERVICE_SCHEME}://${process.env.STRAPI_SERVICE_HOST}:${
  process.env.STRAPI_SERVICE_PORT ? process.env.STRAPI_SERVICE_PORT : 80
}`;

module.exports = {
  serverRuntimeConfig: {
    API_URL,
    DEBUG: process.env.DEBUG_ENABLED || !IS_PROD,
    IS_MOBILE: process.env.IS_MOBILE,
    IS_DESKTOP: process.env.IS_DESKTOP,
    IS_TABLET: process.env.IS_TABLET,
    CDN_PREFIX: process.env.CDN_PREFIX || '',
    IS_PROD
  },
  assetPrefix: process.env.CDN_PREFIX || ''
};
