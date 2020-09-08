import React from "react";
import { Image } from "../Image/Image";
import styled from "styled-components";
import Title from "../Title/Title";

const Caption = styled.caption`
  position: absolute;
  right: 150px;
  font-style: italic;
`;
const Portrait = ({ portraits }) => {
  return (
    <div>
      {portraits.map(({ portrait, title, caption, description }, index) => (
        <div key={title + index}>
          <Title value={title} />
          <div>{description}</div>
          <div>
            <Image src={portrait.src} alt={portrait.alt} />
            <Caption>{caption}</Caption>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portrait;
