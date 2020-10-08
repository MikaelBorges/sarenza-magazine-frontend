import gql from 'graphql-tag';

const HOME_QUERY = gql`
  query {
    home {
      id
      title
      shortDescription
      categories {
        label
      }
    }
    articles(sort: "updated_at:desc") {
      id
      title
      author
      image
      updated_at
    }
  }
`;

export default HOME_QUERY;
