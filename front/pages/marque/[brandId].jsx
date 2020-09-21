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
import BlockLinks from "../../components/BlockLinks/BlockLinks"

const data = {
  "BlockLinks": [
    {
        "id": 5,
        "Title": "À propos de Sarenza",
        "link": [
            {
                "id": 52,
                "label": "Nos récompenses & engagements",
                "link": "/qui-sommes-nous-recompenses"
            },
            {
                "id": 54,
                "label": "Recrutement",
                "link": "https://sarenza.welcomekit.co/"
            }
        ]
    },
    {
        "id": 6,
        "Title": "Conseils",
        "link": [
            {
                "id": 59,
                "label": "Guides des tailles",
                "link": "/conseils-pointures"
            },
            {
                "id": 61,
                "label": "Partagez vos conseils sur le tchat",
                "link": "/happy-shoes"
            }
        ]
    },
    {
        "id": 7,
        "Title": "Services et offres",
        "link": [
            {
                "id": 56,
                "label": "631 marques",
                "link": "/chaussure-marque"
            },
            {
                "id": 58,
                "label": "Les créations Sarenza",
                "link": "/exclusivites-sarenza"
            },
            {
                "id": 53,
                "label": "Accessoires chaussures",
                "link": "/tout-accessoires"
            },
            {
                "id": 60,
                "label": "Tous nos produits",
                "link": "/chaussures-sacs"
            },
            {
                "id": 55,
                "label": "Promotions",
                "link": "/chaussure-pas-cher"
            },
            {
                "id": 66,
                "label": "Code promo Sarenza",
                "link": "/code-promo-sarenza"
            },
            {
                "id": 57,
                "label": "Offrir une e-carte cadeau",
                "link": "/carte-cadeau"
            },
            {
                "id": 67,
                "label": "Tous nos services",
                "link": "/garanties"
            }
        ]
    },
    {
        "id": 8,
        "Title": "Contacts",
        "link": [
            {
                "id": 62,
                "label": "Service Client",
                "link": "/service-client"
            },
            {
                "id": 63,
                "label": "Devenir affilié",
                "link": "/affiliation-sarenza"
            },
            {
                "id": 64,
                "label": "Devenir partenaire",
                "link": "/devenir-partenaire"
            },
            {
                "id": 65,
                "label": "Press room",
                "link": "/contact-presse-sarenza"
            }
        ]
    }
],
}



  const items = [];

  for (let i = 0; i < data.BlockLinks.length; i++) {
    const Block = data.BlockLinks[i];
    items.push(<BlockLinks titles={Block.Title} links={Block.link} />)
    
  }
 


const Kickers = ({
  brandName,
  logo,
  showcase,
  brandSeoBox,
  brandSeoCollections,
  brandDescription,
  video,
  flagship,
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
              {items}
          
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
