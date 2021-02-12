/* eslint-disable */

import '../styles/modules/PartnerPicto.css';
import '../styles/pages/PageMarqueAH17.css';
import '../styles/modules/HeaderAH17.css';
import '../styles/modules/BrandMainNewsAH17.css';
import '../app/components/_styles/reset.scss';
import '../styles/modules/ReactSlick.scss';

import Head from 'next/head';

import wrapper from '../app/store';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-5DJ7GTF',
  dataLayer: {
    env_channel: 'web',
    env_country: 'FR',
    env_platform: '',
    env_template: 'Magazine',
    env_work: 'http://localhost:1337',
    env_language: 'fra',
    domain_id: 'com'
  },
  events: {
    promotionPrint : 'promotionPrint',
    promotionClick: 'promotionClick'
  }
  }
if (process.browser) {
TagManager.initialize(tagManagerArgs);
}

// const envWork = `${process.env.STRAPI_SERVICE_SCHEME}://${process.env.STRAPI_SERVICE_HOST}:${
//   process.env.STRAPI_SERVICE_PORT ? process.env.STRAPI_SERVICE_PORT : 80
// }`;
// console.log(envWork);

function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Magazine - Sarenza</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
