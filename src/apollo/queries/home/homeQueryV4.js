import gql from 'graphql-tag';

export const HOME_QUERY_ALL_V4 = gql`
  query PageList($start: Int, $limit: Int) {
    home {
      data {
        id
        attributes {
          title
          shortDescription
          displayBottom {
            id
            text
            whiteTheme
            button {
              id
              label
              link
            }
          }
          displayTop {
            id
            text
            whiteTheme
            button {
              id
              label
              link
            }
          }
          marquee {
            id
            text
            isShow
          }
          marqueeTop {
            id
            text
            isShow
          }
        }
      }
    }
    articles(
      sort: ["isHeadline:desc", "isSeo:asc", "publishedAt:desc"]
      pagination: { start: $start, limit: $limit }
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          title
          author
          image
          ImageArticleMobile
          publishedAt
          url
          rubriques {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
    rubriques {
      data {
        id
        attributes {
          order
          rubrique
          url
        }
      }
    }
  }
`;

export const HOME_QUERY_RUBRIQUE_V4 = gql`
  query PageList($rubriqueName: String = "", $start: Int, $limit: Int) {
    home {
      data {
        id
        attributes {
          title
          shortDescription
          marquee {
            id
            text
            isShow
          }
          marqueeTop {
            id
            text
            isShow
          }
        }
      }
    }
    articles(
      sort: ["isHeadline:desc", "isSeo:asc", "publishedAt:desc"]
      filters: { rubriques: { url: { eq: $rubriqueName } } }
      pagination: { start: $start, limit: $limit }
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          title
          author
          image
          ImageArticleMobile
          publishedAt
          url
          rubriques {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
    rubriques {
      data {
        id
        attributes {
          rubrique
          order
          url
          display_bottom {
            id
            text
            whiteTheme
            button {
              id
              label
              link
            }
          }
          display_top {
            id
            text
            whiteTheme
            button {
              id
              label
              link
            }
          }
          marquee_top {
            id
            text
          }
          marquee_bottom {
            id
            text
          }
        }
      }
    }
  }
`;
