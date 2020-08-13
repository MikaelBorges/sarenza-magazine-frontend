import React from "react";
import styled from "styled-components";

import { Item } from "../../components/Item/Item";

import { getComponent } from "../../core/StrapiTemplating";

const Container = styled.div`
  padding: 50px;
`;

const Page = ({ data }) => {
  return (
    <Container>
      {data.template.map(item => {
        return <Item>{getComponent(item)}</Item>;
      })}
    </Container>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:1337/tests/1`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export default Page;
