import React from "react";
import styled from "styled-components";
import TagContainer from "../TagList/TagContainer";

const Section = styled.section`
  margin: 40px 0;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 32px;
  display: block;
  margin: 0 32px;
  font: 700 64px/1em futur, Arial Narrow, sans-serif;
  text-transform: uppercase;
`;

const Slide = ({ title, items }) => {
  return (
    items && (
      <Section>
        <Title>{title}</Title>
        <TagContainer tags={items} />
      </Section>
    )
  );
};

export default Slide;
