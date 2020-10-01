/* _app.js */
import './styles/Animation.scss';
import './styles/Landing.scss';
import './styles/modules/Menu.scss';
import './styles/modules/PartnerPicto.css';
import './styles/modules/MainFooter.css';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

const AppContainer = styled.div`
    font-size: 14px;
    width: 100%;
`;
const ContentContainer = styled.div`
    margin: 0 auto;
    width: 1008px;
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
