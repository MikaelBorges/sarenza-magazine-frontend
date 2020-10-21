/* eslint-disable */

import './styles/Animation.mobile.scss';
import './styles/Landing.mobile.module.scss';
import './styles/modules/PartnerPicto.css';
import './styles/pages/PageMarqueAH17.css';
import './styles/modules/HeaderAH17.css';
import './styles/modules/BrandMainNewsAH17.css';
import './styles/modules/Menu.mobile.scss';
import './styles/modules/MainFooter.mobile.css';
import '../app/components/_styles/boot.scss';

import { ApolloProvider } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';

import wrapper from '../app/store';

import withData from '../utils/apollo';

import Footer from '../modules/Footer/Footer';
import Menu from '../modules/Menu/Menu';


import styles from './app.module.mobile.scss';

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/home.mobile.min.css?v=20201002123450"
        />
        <title
        //todo: trad
        >
          Sarenza - Magazine
        </title>
      </Head>
      <Menu />
      <div className={styles.app}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(withData(App));
