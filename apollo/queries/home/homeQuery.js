import gql from 'graphql-tag';

export const HOME_QUERY = gql`
  query PageList($rubriqueName: String = "") {
    home {
      id
      title
      shortDescription
    }
    articles(sort: "updated_at:desc", where: { rubriques: { url: $rubriqueName } }) {
      id
      title
      author
      image
      updated_at
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
    }
    articles(sort: "updated_at:desc") {
      id
      title
      author
      image
      updated_at
    }
    rubriques {
      id
      rubrique
      url
    }
  }
`;
