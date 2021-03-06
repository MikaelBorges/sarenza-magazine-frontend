import gql from 'graphql-tag';

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
          id
          isShow
        }
      }
      marqueeTop {
        id
        MarqueeComponent {
          id
          text
          isShow
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
      ImageArticleMobile
      updated_at
      url
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
