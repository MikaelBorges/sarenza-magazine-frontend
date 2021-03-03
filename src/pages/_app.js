/* eslint-disable */

import '../styles/modules/PartnerPicto.css';
import '../styles/pages/PageMarqueAH17.css';
import '../styles/modules/HeaderAH17.css';
import '../styles/modules/BrandMainNewsAH17.css';
import '../app/components/_styles/reset.scss';
import '../styles/modules/ReactSlick.scss';

import Head from 'next/head';

import wrapper from '../app/store';
import {initTagManager} from 'utils/useGTM';
import {useEffect} from 'react';

function App({ Component, pageProps }) {

  useEffect(() => {
    initTagManager();
  
  }, [])

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
