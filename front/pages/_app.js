/* _app.js */
import React from "react";
import App from "next/app";
import Head from "next/head";
import styled from "styled-components";

import "./Styles.css";

const AppContainer = styled.div`
  font-size: 14px;
  width: 960px;
  margin: 0 auto;
`;
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const reassurance = [{text:'Titre', classIcon:'icon'}]
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <title>Page Marque - Sarenza</title>
        </Head>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </>
    );
  }
}
