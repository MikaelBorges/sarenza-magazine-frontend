import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";

const Section = styled.section`
  padding: 20px;
  position: relative;

  display: inline-block;
  vertical-align: middle;
  width: 98%;
`;
const Title = styled.div`
  font-size: 19.6px;
  text-transform: uppercase;
  margin: 0;
  font-family: futur, Arial Narrow, sans-serif;
  font-weight: 700;
`;

const Description = styled.div`
  text-align: left;
  margin: 20px 0;
  font-family: proximnr, Arial, sans-serif;
  line-height: 1.5em;
  font-size: 1em;
  color: #333;
`;
const Tile = ({ title, button, background_url, description }) => {
  return (
    <React.Fragment>
      <Section>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button btn={{ action: button.action, value: button.value }} />
        </div>
        <Image src={background_url} alt={title} />
      </Section>
    </React.Fragment>
  );
};

export default Tile;
