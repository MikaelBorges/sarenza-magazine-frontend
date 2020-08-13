import React from "react";
import { withRouter } from "next/router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header/Header";
import History from "../../components/History/History";
import { Image } from "../../components/Image/Image";
import Slide from "../../components/Slider/Slide";
import Edito from "../../components/Edito/Edito";

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:1337/trade-edito-premiums/1`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/edito/sarenza-x-daphne"],
    fallback: true
  };
}

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

const Container = styled.div`
  padding: 50px;
`;

const getPhoto = (index, data) => ({
  src: data.presentation.items[index].photo_url,
  ...data.presentation.items[index]
});

const EditoPage = ({ data }) => {
  if (data.error) return "Une erreur est survenue";
  const photo1 = getPhoto(0, data);
  const photo2 = getPhoto(1, data);
  console.log(data);
  return !data ? (
    <div>Chargement ...</div>
  ) : (
    <Container>
      <LogoContainer>
        <Header {...data.logo} />
      </LogoContainer>
      <Item>
        <Image {...photo1} />
      </Item>
      <Item>
        <ReactMarkdown source={data.presentation.description} />
      </Item>
      <Item>
        <Image {...photo2} />
      </Item>
      <Item>
        <Slider
          items={data.slider}
          renderItem={(item, width) => <Slide item={item} width={width} />}
        />
      </Item>
      <Item>
        <History {...data.edito} />
      </Item>
      <Item>
        <Edito
          content="Pour cette collab’, il fallait un symbole fort, celui du cœur. Parce que vous allez marcher avec le cœur, les acheter avec le cœur, vous donnez avec le cœur…"
          author="coco"
          title="Ce titre !"
          contentType="editoCitation"
          button={{ action: "/kickers", value: "Valider" }}
        />
      </Item>
    </Container>
  );
};

export default withRouter(EditoPage);
