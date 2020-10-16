import React from 'react';
import styled from 'styled-components';

import { Item } from '@/components/Item/Item';

import { getComponent } from '../../core/StrapiTemplating';

const Container = styled.div`
    padding: 50px;
`;

const Page = ({ data }) => {
    if (!data.template) {
        return <div>Veuillez saisir la data sur strapi</div>;
    }
    return (
        <Container>
            {data.template.map((item) => {
                return <Item key={item.id}>{getComponent(item)}</Item>;
            })}
        </Container>
    );
};

export async function getStaticProps() {
    const res = await fetch(`http://localhost:1337/tests/3`);
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}

export default Page;
