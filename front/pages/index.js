import Link from "next/link";
import Reviews from "../components/Reviews/Reviews";
// import Links from "../components/Links/Links";


const Review =({
  Title: "Nos clients nous aiment et c’est réciproque",
  Rate: "rate4",
  MaxRate: "5",
  Votes: {
      label: "14 742 avis",
      link: "//www.trustedshops.fr/evaluation/info_XEA9E474438444A3D3874F8EC6203004C.html/products/seller?zmi="
  }
})

// const Group = {
//   blocks: [
//   {
//       id: 1,
//       Title: "À propos de Sarenza",
//        link: [
//           {
//               id: 36,
//               label: "Nos récompenses & engagements",
//               link: "qui-sommes-nous-recompenses"
//           },
//           {
//               id: 37,
//               label: "Recrutement",
//               link: "https:sarenza.welcomekit.co"
//           }
//       ]
//   },
//   {
//       id: 2,
//       Title: "Conseils",
//      link: [
//           {
//               id: 38,
//               label: "Guides des tailles",
//               link: "conseils-pointures"
//           },
//           {
//               id: 43,
//               label: "Partagez vos conseils sur le tchat",
//               link: "happy-shoes"
//           }
//       ]
//   },
//   {
//       id: 3,
//       Title: "Services et offres",
//       link: [
//           {
//               id: 50,
//               label: "631 marques",
//               link: "chaussure-marque"
//           },
//           {
//               id: 39,
//               label: "Les créations Sarenza",
//               link: "exclusivites-sarenza"
//           },
//           {
//               id: 40,
//               label: "Accessoires chaussures",
//               link: "tout-accessoires"
//           },
//           {
//               id: 41,
//               label: "Tous nos produits",
//               link: "chaussures-sacs"
//           },
//           {
//               id: 42,
//               label: "Promotions",
//               link: "chaussure-pas-cher"
//           },
//           {
//               id: 51,
//               label: "Code promo Sarenza",
//               link: "code-promo-sarenza"
//           },
//           {
//               id: 44,
//               label: "Offrir une e-carte cadeau",
//               link: "carte-cadeau"
//           },
//           {
//               id: 46,
//               label: "Tous nos services",
//               link: "https:www.sarenza.comgaranties"
//           }
//       ]
//   },
//   {
//       id: 4,
//       Title: "Contacts",
//       link: [
//           {
//               id: 45,
//               label: "Service Client",
//               link: "service-client"
//           },
//           {
//               id: 47,
//               label: "Devenir affilié",
//               link: "affiliation-sarenza"
//           },
//           {
//               id: 48,
//               label: "Devenir partenaire",
//               link: "/devenir-partenaire"
//           },
//           {
//               id: 49,
//               label: "Press room",
//               link: "/contact-presse-sarenza"
//           }
//       ]
//   }
// ]}

export default function Home() {
  return (
    <div className="container">
      <div>
        <Link href="/marque/kickers">Voir la page kickers</Link>
      </div>
      <div>
        <Link href="/clarks">Voir la page clarks</Link>
      </div>
      <div>
        <Link href="/edito/sarenza-x-daphne">Voir la Edito</Link>
      </div>
      <div>
          <Reviews title={Review.Title} rate={Review.Rate} maxRate={Review.MaxRate} label={Review.Votes.label} link={Review.Votes.link} />
      </div>
      {/* <div>
        {
          Group.blocks.map(
            (Title, link)=>{
              <Links title={Title} link={link} />     
            }
          )
        }
      </div> */}
    </div>
  );
  
}
