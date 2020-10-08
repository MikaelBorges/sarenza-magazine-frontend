/* eslint-disable */

import '../app/components/_styles/boot.scss';

import { ApolloProvider } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';

import wrapper from '../app/store';

import withData from '../utils/apollo';

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Sarenza - Magazine</title>
      </Head>
      <div style={{ width: '1200px', margin: '0 auto' }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(withData(App));
