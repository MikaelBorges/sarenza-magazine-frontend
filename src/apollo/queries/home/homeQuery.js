import gql from 'graphql-tag';

export const HOME_QUERY = gql`
  query PageList($rubriqueName: String = "") {
    home {
      id
      title
      shortDescription
      marquee {
        id
        MarqueeComponent {
          text
        }
      }
      display_components {
        id
        Display {
          id
          text
          whiteTheme
          button {
            id
            label
            link
          }
        }
      }
    }
    articles(sort: "updated_at:desc", where: { rubriques: { url: $rubriqueName } }) {
      id
      title
      author
      image
      updated_at
      url
      smallSizeImg {
        url
        alt
      }
      mediumSizeImg {
        url
        alt
      }
      rubriques {
        id
        url
      }
    }
    rubriques {
      id
      rubrique
      url
    }
  }
`;

export const HOME_QUERY_ALL = gql`
  query PageListAll {
    home {
      id
      title
      shortDescription
      marquee {
        id
        MarqueeComponent {
          text
        }
      }
      display_components {
        id
        Display {
          id
          text
          whiteTheme
          button {
            id
            label
            link
          }
        }
      }
    }
    articles(sort: "updated_at:desc") {
      id
      title
      author
      image
      updated_at
      url
      smallSizeImg {
        url
        alt
      }
      mediumSizeImg {
        url
        alt
      }
      rubriques {
        id
        url
      }
    }
    rubriques {
      id
      rubrique
      url
    }
  }
`;
