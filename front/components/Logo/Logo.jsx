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
  opacity: ${props => props.opacity};
`;
const Logo = ({ src, alt, className, opacity }) => {
  return (
    <ContainerImg>
      <Img src={src} alt={alt} className={className} opacity={opacity} />
    </ContainerImg>
  );
};

export default Logo;
