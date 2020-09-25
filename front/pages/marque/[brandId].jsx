import React from 'react';

import BrandSeoBox from '../../components/BrandSeoBox/BrandSeoBox';
import BrandSeoCollections from '../../components/BrandSeoCollections/BrandSeoCollections';
import Flagship from '../../components/Flagship/Flagship';
import Header from '../../components/Header/Header';
import History from '../../components/History/History';
import IframeVideo from '../../components/IframeVideo';
import Section from '../../components/Section/Section';
import { getBrandData } from '../../strapi/strapi.service';
import { Container, Onglet, Page, Segments } from './brandStyles';
const Kickers = ({
    brandName,
    logo,
    showcase,
    brandSeoBox,
    brandSeoCollections,
    brandDescription,
    video,
    flagship
}) => {
    return (
        <Container>
            {brandName ? (
                <Page>
                    <Header title={brandName} alt={logo.alt} src={logo.src} logoOpacity={0.2} />
                    <Segments>
                        <Onglet>
                            <Section
                                backgroundUrl={showcase.backgroundUrl}
                                button={showcase.link}
                                title={showcase.title}
                                description={showcase.description}
                            />
                            <BrandSeoBox title={brandSeoBox.title} items={brandSeoBox.links} />
                            <BrandSeoCollections
                                title={brandSeoCollections.title}
                                data={brandSeoCollections.items}
                            />
                            <History
                                history={brandDescription.description}
                                title={brandDescription.title}
                            />
                            <IframeVideo iframe={video.iframe} />
                            <Flagship title={flagship.title} items={flagship.items} />
                        </Onglet>
                    </Segments>
                </Page>
            ) : (
                <div>Chargement ...</div>
            )}
        </Container>
    );
};

export async function getServerSideProps({ query }) {
    const data = await getBrandData(query.brandId);
    return {
        props: data
    };
}

export default Kickers;
