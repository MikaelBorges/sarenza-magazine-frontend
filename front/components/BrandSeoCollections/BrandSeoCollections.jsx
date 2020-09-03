import React from "react";
import Tile from "./Tile";
import styled from "styled-components";

const Title = styled.h2`
  margin-bottom: 32px;
  display: block;
  margin: 0 32px;
  font: 700 64px/1em futur, Arial Narrow, sans-serif;
  text-transform: uppercase;
`;

const Description = styled.div`
  & section > div {
    position: absolute;
    background: #fff;
    height: 300px;
    width: 260px;
    padding: 30px;
    top: 12%;
  }
`;

const BrandSeoCollections = ({ title, data }) => {
  return (
    data && (
      <React.Fragment>
        <Title>{title}</Title>
        <Description>
          {data.map((item, index) => {
            return (
              <Tile
                backgroundUrl={item.backgroundUrl}
                button={item.link}
                title={item.title}
                description={item.description}
                key={index}
              />
            );
          })}
        </Description>
      </React.Fragment>
    )
  );
};

export default BrandSeoCollections;
