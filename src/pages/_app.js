/* eslint-disable */

import './styles/Animation.scss';
import './styles/pages/PageMarqueAH17.css';
import './styles/modules/HeaderAH17.css';
import './styles/modules/BrandMainNewsAH17.css';
import './styles/modules/Menu.scss';
import './styles/modules/MainFooter.css';
import '../app/components/_styles/boot.scss';

import { ApolloProvider } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';

import wrapper from '../app/store';

import withData from '../utils/apollo';

import Footer from '../components/Footer/Footer';

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/home.default.min.css"
        />
        <title>Sarenza - Magazine</title>
      </Head>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(withData(App));
