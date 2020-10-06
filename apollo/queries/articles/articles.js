import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`
  query {
    tradeBrandPremiums {
      id
      created_at
      updated_at
      brand_name
    }
    tradeEditoPremiums {
      id
      created_at
      updated_at
    }
  }
`;

export default ARTICLES_QUERY;
