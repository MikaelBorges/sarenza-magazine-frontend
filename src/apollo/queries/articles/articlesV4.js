import gql from 'graphql-tag';

export const ARTICLES_QUERY_V4 = gql`
  query PageList($slug: String) {
    articles(filters: { url: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          subtitle
          author
          image
          ImageArticleMobile
          updatedAt
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
  }
`;

export const ARTICLES_RECENT_QUERY_V4 = gql`
  query PageList($rubriqueName: String, $slug: String) {
    articles(
      pagination: { start: 0, limit: 3 }
      sort: ["isSeo:asc", "updatedAt:desc"]
      filters: { rubriques: { url: { eq: $rubriqueName } }, and: { url: { ne: $slug } } }
    ) {
      data {
        id
        attributes {
          title
          subtitle
          author
          image
          ImageArticleMobile
          publishedAt
          updatedAt
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
  }
`;
