import processToHome from 'modules/Home/model/Home';
import { getApolloClient } from 'utils/apollo';
import getPageProps from 'utils/getPageProps';

import { HOME_QUERY_ALL } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';
import HomeMobile from '../modules/Home/Home';

import Layout from './Layout/Layout';

export default function HomePage({ homeData, menus, genders, footer, isMobile }) {
  return (
    <Layout menus={menus} genders={genders} footer={footer} isMobile={isMobile}>
      {isMobile ? <HomeMobile data={homeData} /> : <Home data={homeData} />}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: HOME_QUERY_ALL
  });

  const { menus, genders, footer } = await getPageProps();

  const homeData = processToHome(data);

  return { props: { homeData, menus, genders, footer } };
};
