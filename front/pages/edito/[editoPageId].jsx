import React from 'react';
import styled from 'styled-components';

import Header from '@/components/Header/Header';
import Portrait from '@/components/Portrait/Portrait';
import Slide from '@/components/Slider/Slide';
import Slider from '@/components/Slider/Slider';

import { getEditoBrand } from '../../strapi/strapi.service';
import { Container, Onglet, Page, Segments } from './editoStyles';

const Item = styled.div`
    padding: 10px;
    text-align: center;
    > p {
        width: 60%;
        margin: auto;
        color: #999;
    }
`;

const LogoContainer = styled(Item)`
    height: 260px;
`;

const EditoPage = ({ logo, portraits, slider }) => {
    return (
        <Container>
            <Page>
                <LogoContainer>
                    <Header src={logo.src} alt={logo.alt} />
                </LogoContainer>
                <Segments>
                    <Onglet>
                        <Portrait portraits={portraits} />
                    </Onglet>
                    <Onglet>
                        <Slider
                            items={slider}
                            renderItem={(item, width) => (
                                <Slide item={item} width={width} key={item.title + item.id} />
                            )}
                        />
                        <div>Voir plus de modele</div>
                    </Onglet>
                </Segments>
            </Page>
        </Container>
    );
};

export async function getServerSideProps() {
    const data = await getEditoBrand(1);

    return {
        props: data
    };
}

export default EditoPage;
