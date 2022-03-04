import gql from 'graphql-tag';

export const PAGE_PROPS_QUERY_V4 = gql`
  {
    menus {
      data {
        id
        attributes {
          header
          colorText
          order
          Url
          menu_items {
            data {
              id
              attributes {
                libelle
                category
                position
                links {
                  id
                  label
                  link
                  labelPicto
                  colorPicto
                  boldLink
                }
              }
            }
          }
        }
      }
    }
    genders {
      data {
        id
        attributes {
          Gender
          url
        }
      }
    }
    footers {
      data {
        id
        attributes {
          NeedHelp {
            id
            Title
            Text
            Link {
              id
              label
              link
            }
          }
          VariousText {
            id
            Title
            Text
          }
          Reassurance {
            id
            text
            Icon
          }
          Newsletter {
            id
            Title
            Text
            SubTitle
            Terms
            Input {
              id
              Label
              Placeholder
              Button {
                id
                label
                link
              }
            }
          }
          BlockLinks {
            id
            Title
            link {
              id
              label
              link
            }
          }
          Reviews {
            id
            Title
            Rate
            MaxRate
            Votes {
              id
              label
              link
            }
          }
          SocialMedia {
            id
            title
            SocialMediaItem {
              id
              Item
              Name
              Link
            }
          }
          PartnerIcon {
            id
            PaymentPartner
            ShippingPartner
            QualityPartner
            text
            link
            liClass
            title
          }
          FooterLink {
            id
            Text
            Url
            DataContent
            class
          }
          CountrySelector {
            id
            Text
            Link
            domain
            isCurrent
          }
        }
      }
    }
    prefixMetaDescription {
      data {
        id
        attributes {
          prefix
        }
      }
    }
  }
`;
