import { ApolloClient } from 'apollo-client';

import { timeout } from './httpUtils';

export class SrzApolloClient extends ApolloClient {
  async execQuery(req, config) {
    try {
      const { data, error, loading } = await timeout(config.timeout, super.query(req));
      return { data, error, loading };
    } catch (e) {
      console.error('Error', e);
      return { data: {}, error: { hasError: true }, loading: true };
    }
  }
}
