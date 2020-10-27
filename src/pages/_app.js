/* eslint-disable */

import './styles/modules/PartnerPicto.css';
import './styles/pages/PageMarqueAH17.css';
import './styles/modules/HeaderAH17.css';
import './styles/modules/BrandMainNewsAH17.css';
import '../app/components/_styles/boot.scss';
import './styles/modules/ReactSlick.scss';

import { ApolloProvider } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';

import wrapper from '../app/store';

import withData from '../utils/apollo';

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
          </>
        ) : (
          <>
            <link
              rel="stylesheet"
              href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/home.mobile.min.css"
            />
            <link
              href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/animation.mobile.min.css"
              rel="stylesheet"
            />
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
      <Component {...pageProps} isMobile={isMobile} />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(withData(App));
