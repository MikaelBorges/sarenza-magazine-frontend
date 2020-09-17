import React from 'react';
import Header from '@/components/Header/Header';
import Section from '@/components/Section/Section';
import BrandSeoBox from '@/components/BrandSeoBox/BrandSeoBox';
import History from '@/components/History/History';
import BrandSeoCollections from '@/components/BrandSeoCollections/BrandSeoCollections';
import Flagship from '@/components/Flagship/Flagship';
import { Onglet, Segments, Page, Container } from './brandStyles';
import { getBrandData } from '../../strapi/strapi.service';
import IframeVideo from '@/components/IframeVideo';
import Alert from '@/components/Alert/Alert';

const Kickers = ({
    brandName,
    logo,
    showcase,
    brandSeoBox,
    brandSeoCollections,
    brandDescription,
    video,
    flagship,
    alert
}) => {
    return (
        <Container>
            {brandName ? (
                <Page className="pageMarqueAH17">
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
                            <Alert
                                text={alert.text}
                                description={alert.description}
                                button={alert.button}
                            />
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
