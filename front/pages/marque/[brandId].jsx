import React from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import BrandSeoBox from "../../components/BrandSeoBox/BrandSeoBox";
import History from "../../components/History/History";
import BrandSeoCollections from "../../components/BrandSeoCollections/BrandSeoCollections";
import Flagship from "../../components/Flagship/Flagship";
import { Onglet, Segments, Page, Container } from "./brandStyles";
import { getBrandData } from "../../strapi/strapi.service";
import IframeVideo from "../../components/IframeVideo";
import VariousText from "../../components/VariousText/VariousText";

const  Texts= {
  "id": 1,
  "Title": "<span style='color: red;'>#NeRienLaisserPasser</span><br />Victime ou témoin de violences conjugales ?",
  "Text": "Appel au 17 ou SMS alerte au 114 <br /> Service d'écoute au 3919 du lundi au samedi de 9h à 19h <br /> Signalement sur <a href='https://arretonslesviolences.gouv.fr' target='_blank'>arretonslesviolences.gouv.fr</a>"
}

const Kickers = ({
  brandName,
  logo,
  showcase,
  brandSeoBox,
  brandSeoCollections,
  brandDescription,
  video,
  flagship
}) => {
  return (
    <Container>
      {brandName ? (
        <Page>
          <Header
            title={brandName}
            alt={logo.alt}
            src={logo.src}
            logoOpacity={0.2}
          />
          <Segments>
            <Onglet>
              <Section
                backgroundUrl={showcase.backgroundUrl}
                button={showcase.link}
                title={showcase.title}
                description={showcase.description}
              />
              <BrandSeoBox
                title={brandSeoBox.title}
                items={brandSeoBox.links}
              />
              <BrandSeoCollections
                title={brandSeoCollections.title}
                data={brandSeoCollections.items}
              />
              <History
                history={brandDescription.description}
                title={brandDescription.title}
              />
              <IframeVideo iframe={video.iframe} />
              <Flagship title={flagship.title} items={flagship.items} />
            </Onglet>
            <VariousText title={Texts.Title} text={Texts.Text} />
          </Segments>
        </Page>
      ) : (
        <div>Chargement ...</div>
      )}
    </Container>
  );
};

export async function getServerSideProps({ query }) {
  const data = await getBrandData(query.brandId);
  return {
    props: data
  };
}

export default Kickers;
