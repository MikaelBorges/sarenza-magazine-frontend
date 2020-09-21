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
import FooterLink from "../../components/FooterLink/FooterLink";


const data = [
  {
      "id": 1,
      "Text": "*Conditions des<br />offres en cours",
      "Url": null,
      "DataContent": "/content/popin-page/get?pageId=356"
  },
  {
      "id": 2,
      "Text": "Conditions Générales<br />de Vente",
      "Url": "/cgv",
      "DataContent": null
  },
  {
      "id": 4,
      "Text": "Protection<br />des données personnelles",
      "Url": "/protection-donnees",
      "DataContent": null
  },
  {
      "id": 3,
      "Text": "Mentions<br />légales",
      "Url": "/cgv#mentions-legales",
      "DataContent": null
  }
];

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
            {data.map((item)=> {
              console.log(item);
               return <FooterLink ids={item.id} texts={item.Text} urls={item.Url} contents={item.DataContent} />
            })}
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
