/* _app.js */
import './styles/Animation_mobile.scss';
import './styles/Landing_mobile.scss';
// import './styles/modules/Menu.scss';
import './styles/modules/PartnerPicto.css';
import './styles/modules/MainFooter.css';
import '../components/Menu/Menu.scss';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu_mobile';

const AppContainer = styled.div`
    font-size: 14px;
    width: 100%;
`;
const ContentContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    @media screen and (min-width: 945px) {
        width: 1008px;
    }
`;

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Page Marque - Sarenza</title>
                </Head>

                <AppContainer>
                    <Menu />
                    <ContentContainer>
                        <Component {...pageProps} />
                        <Footer />
                    </ContentContainer>
                </AppContainer>
            </>
        );
    }
}
