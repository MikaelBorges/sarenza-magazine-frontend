import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 2em;
  width: auto;
  position: relative;
  vertical-align: middle;
  margin: 0;
  line-height: 1em;
`;

const Title = ({ value }) => {
  return <Heading>{value}</Heading>;
};

export default Title;
