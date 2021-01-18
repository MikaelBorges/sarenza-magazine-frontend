import gql from 'graphql-tag';

 const HOME_QUERY = gql`
  query prefixMetaDescription {
    id
    prefix
   
  }
`;
export default HOME_QUERY;
