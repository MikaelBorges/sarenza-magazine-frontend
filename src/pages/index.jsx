import processToHome from 'modules/Home/model/Home';
import { getApolloClient } from 'utils/apollo';
import getPageProps from 'utils/getPageProps';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo';
import { HOME_QUERY_ALL } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';
import HomeMobile from '../modules/Home/Home.mobile';

import Layout from 'modules/Layout/Layout';

const HomePage = ({ homeData, menus, genders, footer, isMobile, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Layout menus={menus} genders={genders} footer={footer} isMobile={isMobile}>
        {isMobile ? <HomeMobile data={homeData} /> : <Home data={homeData} />}
      </Layout>
    </ApolloProvider>
  );
};

export const getServerSideProps = async ({query }) => {
  const apolloClient = getApolloClient();
  const isMobile = query.isMobile === 'true';
  const { data } = await apolloClient.query({
    query: HOME_QUERY_ALL
  });

  const { menus, genders, footer } = await getPageProps();

  const homeData = processToHome(data);

  return { props: { homeData, menus, genders, footer, isMobile } };
};

export default withData(HomePage);
