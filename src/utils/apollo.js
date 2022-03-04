import { HttpLink } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SrzApolloClient as ApolloClient } from './SrzApolloClient';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const { API_URL } = serverRuntimeConfig;

let client;

export const getApolloClient = () => {
  if (!client) {
    client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: `${API_URL}/graphql`,
        fetch
      })
    });
  }
  return client;
};
