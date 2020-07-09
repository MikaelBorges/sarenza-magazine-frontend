import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #f3f3f3;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(243, 243, 243);
  padding: 20px 0;
  position: relative;
`;

const Item = styled.div`
  width: 33%;
  color: #949494;
  font-size: 1em;
  font-family: Arial, sans-serif;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  margin-bottom: 32px;
  display: block;
  margin: 0 32px;
  font: 700 64px/1em futur, Arial Narrow, sans-serif;
  text-transform: uppercase;
`;

const Discovery = ({ title, items }) => {
  return (
    title && (
      <div>
        <Title>{title}</Title>
        <Container>
          {items.map(item => (
            <>
              <Item>{item.value}</Item>
              <Item>{item.value}</Item>
              <Item>{item.value}</Item>
              <Item>{item.value}</Item>
              <Item>{item.value}</Item>
            </>
          ))}
        </Container>
      </div>
    )
  );
};

export default Discovery;
