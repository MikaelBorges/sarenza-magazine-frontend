import { ApolloProvider } from '@apollo/react-hooks';

import { useApollo } from '../../../utils/apolloClient';
import Container, { initProps as ContainerInitProps } from './Container';

export const GraphQLContainer = ({ children, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <Container {...pageProps}>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </Container>
    </>
  );
};

export async function initProps() {
  const currentProps = await ContainerInitProps();
  return {
    props: {
      ...currentProps.props
    }
  };
}

export default GraphQLContainer;
