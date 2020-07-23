import React from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Slide from "../components/Slide/Slide";
import History from "../components/History/History";
import styled from "styled-components";
import TileContainer from "../components/Tiles/TileContainer";
import Discovery from "../components/Discovery/Discovery";
import Edito from "../components/Edito/Edito";

const Container = styled.div`
  margin: auto;
  min-width: 768px;
  max-width: 1008px;
  width: 100%;
  padding: 0;
`;
const Page = styled.div`
  padding-bottom: 40px;
  width: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
`;
const Segments = styled.div`
  padding: 0;
  background-color: transparent !important;
  max-width: none;
  width: auto;
  position: relative;
`;

const Onglet = styled.div`
  position: relative;
  left: 0;
  display: block;
  text-align: center;
`;

export async function getStaticProps(context) {
  const brandId = getIdFromBrandName(context.params.brandId);
  const res = await fetch(
    `http://localhost:1337/trade-brand-premiums/${brandId}`
  );
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

const getIdFromBrandName = brandName => {
  switch (brandName) {
    case "kickers":
      return 1;
    case "clarks":
      return 2;
    default:
      throw new Exception("Nom de marque inconnue");
  }
};

export async function getStaticPaths() {
  return {
    paths: ["/kickers", "/clarks"],
    fallback: true
  };
}

const Kickers = ({ data }) => {
  return (
    /* <Container>
      {data ? (
        <Page>
          <Header {...data.header} />
          <Segments>
            <Onglet>
              <Section {...data.presentation} />
              <Slide {...data.boutique} />
              <TileContainer title={data.title_tiles} data={data.tiles} />
              <History {...data.history} />
              <Discovery {...data.discovery} />
            </Onglet>
          </Segments>
        </Page>
      ) : (
        <div>Chargement ...</div>
      )}
    </Container> */
    <Edito content="Pour cette collab’, il fallait un symbole fort, celui du cœur. Parce que vous allez marcher avec le cœur, les acheter avec le cœur, vous donnez avec le cœur…" />
  );
};

Kickers.propTypes = {};

export default Kickers;
