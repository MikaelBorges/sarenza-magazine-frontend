/* eslint-disable */

import './styles/modules/PartnerPicto.css';
import './styles/pages/PageMarqueAH17.css';
import './styles/modules/HeaderAH17.css';
import './styles/modules/BrandMainNewsAH17.css';
import '../app/components/_styles/boot.scss';

import { ApolloProvider } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';

import wrapper from '../app/store';

import withData from '../utils/apollo';

import Footer from '../modules/Footer/Footer';
import FooterMobile from '../modules/Footer/Footer.mobile';

import Menu from '../modules/Menu/Menu';
import MenuMobile from '../modules/Menu/Menu.mobile';

import styles from './app.module.scss';
import { useRouter } from 'next/router';

function App({ Component, pageProps, apollo }) {
  const { query } = useRouter();
  const isMobile = query.isMobile === 'true';

  return (
    <ApolloProvider client={apollo}>
      <Head>
        {!isMobile ? (
          <>
            <link
              rel="stylesheet"
              href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/home.default.min.css"
            />
            <link
              rel="stylesheet"
              href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/animation.default.min.css"
            />
            <link
              rel="stylesheet"
              href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/landing.default.min.css"
            />
            <link
              rel="stylesheet"
              href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/landing.default.min.css"
            />
          </>
        ) : (
          <>
            <link
              rel="stylesheet"
              href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/home.mobile.min.css"
            />
            <link href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/animation.mobile.min.css?v=20201021164208" />
            <link
              rel="stylesheet"
              href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/landing.mobile.min.css"
            />
          </>
        )}

        <title
        //todo: trad
        >
          Sarenza - Magazine
        </title>
      </Head>
      {isMobile ? <MenuMobile /> : <Menu />}
      <div className={styles.app}>
        <Component {...pageProps} isMobile={isMobile} />
      </div>
      {isMobile ? <FooterMobile /> : <Footer />}
    </ApolloProvider>
  );
}

export default wrapper.withRedux(App)