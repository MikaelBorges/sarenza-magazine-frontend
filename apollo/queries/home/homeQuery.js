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
      article {
        trade_brand_premiums {
          id
          title: brand_name
        }
        article {
          id
          title
        }
      }
    }
  }
`;

export default HOME_QUERY;
