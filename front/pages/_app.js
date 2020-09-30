/* _app.js */
import './styles/Animation.scss';
import './styles/pages/PageMarqueAH17.css';
import './styles/modules/HeaderAH17.css';
import './styles/modules/BrandMainNewsAH17.css';
import './styles/modules/Menu.scss';
import './styles/modules/MainFooter.css';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import Footer from '@/components/Footer/Footer';

import Menu from '../components/Menu/Menu';

const AppContainer = styled.div`
    font-size: 14px;
    width: 960px;
    margin: 0 auto;
`;

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/home.default.min.css"
                    />
                    <title>Page Marque - Sarenza</title>
                </Head>

                <AppContainer>
                    <Menu />
                    <Component {...pageProps} />
                    <Footer />
                </AppContainer>
            </>
        );
    }
}
