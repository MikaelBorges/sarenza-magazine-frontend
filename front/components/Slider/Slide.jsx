import React from "react";
import { SliderItem, ImageContainer, Text, Image } from "./styles";

const Slide = ({ item, width }) => {
  return (
    <SliderItem width={width}>
      <div>
        <ImageContainer>
          <Image src={item.background_url} />
        </ImageContainer>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </div>
    </SliderItem>
  );
};

export default Slide;
