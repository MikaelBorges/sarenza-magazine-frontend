import React from "react";
import styled from "styled-components";
import { Image } from "../Image/Image";

const ContainerImg = styled.span`
  position: absolute;
  width: 100%;
  text-align: center;
  left: 0;
  top: 0;
`;

const Img = styled(Image)`
  opacity: 0.1;
`;
const Logo = ({ src, alt }) => {
  return (
    <ContainerImg>
      <Img src={src} alt={alt} />
    </ContainerImg>
  );
};

export default Logo;
