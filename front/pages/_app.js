/* _app.js */
import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
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
        <div style={{ fontSize: "14px" }}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </div>
      </>
    );
  }
}
