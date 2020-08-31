import React from "react";
import { SliderItem, ImageContainer, Text, Image, Title } from "./styles";

const Slide = ({ item, width }) => {
  return (
    <SliderItem width={width}>
      <div>
        <ImageContainer>
          <Image src={item.image.src} alt={item.image.alt} />
        </ImageContainer>
        <Title>{item.title}</Title>
        <Text>{item.subTitle}</Text>
      </div>
    </SliderItem>
  );
};

export default Slide;
