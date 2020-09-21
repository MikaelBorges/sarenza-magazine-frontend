import React from 'react';

import { Image, ImageContainer, SliderItem, Text, Title } from './styles';

const Slide = ({ item, width }) => {
    return (
        <SliderItem width={width} key={item.title + item.id}>
            <ImageContainer>
                <Image src={item.image.src} alt={item.image.alt} />
            </ImageContainer>
            <Title>{item.title}</Title>
            <Text>{item.subTitle}</Text>
        </SliderItem>
    );
};

export default Slide;
