/* eslint-disable */

import './styles/modules/PartnerPicto.css';
import './styles/pages/PageMarqueAH17.css';
import './styles/modules/HeaderAH17.css';
import './styles/modules/BrandMainNewsAH17.css';
import '../app/components/_styles/boot.scss';
import './styles/modules/ReactSlick.scss';

import Head from 'next/head';
import React from 'react';

import wrapper from '../app/store';
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title
        //todo: trad
        >
          Sarenza - Magazine
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
