import gql from 'graphql-tag';

export const HOME_QUERY = gql`
  query PageList($rubriqueName: String = "") {
    home {
      id
      title
      shortDescription
      marqueComponent {
        id
        MarqueeContent {
          text
        }
      }
    }
    articles(sort: "updated_at:desc", where: { rubriques: { url: $rubriqueName } }) {
      id
      title
      author
      image
      updated_at
      smallSizeImg {
        url
        alt
      }
      mediumSizeImg {
        url
        alt
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
      marqueComponent {
        id
        MarqueeContent {
          text
        }
      }
    }
    articles(sort: "updated_at:desc") {
      id
      title
      author
      image
      updated_at
      smallSizeImg {
        url
        alt
      }
      mediumSizeImg {
        url
        alt
      }
    }
    rubriques {
      id
      rubrique
      url
    }
  }
`;
