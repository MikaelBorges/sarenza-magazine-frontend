import gql from 'graphql-tag';

export const HOME_QUERY = gql`
  query PageList($rubriqueName: String = "", $start: Int, $limit: Int) {
    home {
      id
      title
      shortDescription
      ArticleUne {
        id
      }
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
    }
    articles(
      sort: "updated_at:desc"
      where: { rubriques: { url: $rubriqueName } }
      start: $start
      limit: $limit
    ) {
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
      order
      url
      display_bottom {
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
      display_top {
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
      marquee_top {
        MarqueeComponent {
          text
          id
        }
      }
      marquee_bottom {
        MarqueeComponent {
          text
          id
        }
      }
    }
  }
`;

export const HOME_QUERY_ALL = gql`
  query PageList($start: Int, $limit: Int) {
    home {
      id
      title
      shortDescription
      ArticleUne {
        id
      }
      displayBottom {
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
      displayTop {
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
    }
    articles(sort: "updated_at:desc", start: $start, limit: $limit) {
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
      order
      rubrique
      url
    }
  }
`;
