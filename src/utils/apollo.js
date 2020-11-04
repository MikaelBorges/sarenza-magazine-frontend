import { HttpLink } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import withApollo from 'next-with-apollo';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

// Update the GraphQL endpoint to any instance of GraphQL that you like
const { API_URL } = serverRuntimeConfig;

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: `${API_URL}/graphql`
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    })
);

export const getApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${API_URL}/graphql`,
      fetch
    })
  });
};
