import React from "react";
import styled from "styled-components";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header/Header";
import History from "../../components/History/History";
import { Image } from "../../components/Image/Image";
import Slide from "../../components/Slider/Slide";
import Portrait from "../../components/Portrait/Portrait";
import { getEditoBrand } from "../../strapi/strapi.service";
import { Container, Page, Onglet, Segments } from "./editoStyles";

const Item = styled.div`
  padding: 10px;
  text-align: center;
  > p {
    width: 60%;
    margin: auto;
    color: #999;
  }
`;

const LogoContainer = styled(Item)`
  height: 260px;
`;

const EditoPage = ({ logo, portraits, slider }) => {
  return (
    <Container>
      <Page>
        <LogoContainer>
          <Header src={logo.src} alt={logo.alt} />
        </LogoContainer>
        <Segments>
          <Onglet>
            <Portrait portraits={portraits} />
          </Onglet>
          <Onglet>
            <Slider
              items={slider}
              renderItem={(item, width) => (
                <Slide item={item} width={width} key={item.title} />
              )}
            />
            <div>Voir plus de modele</div>
          </Onglet>
        </Segments>
      </Page>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const data = await getEditoBrand(1);

  return {
    props: data
  };
}

export default EditoPage;
