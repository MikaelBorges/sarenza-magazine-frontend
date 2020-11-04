import processToHome from 'modules/Home/model/Home';
import { getApolloClient } from 'utils/apollo';
import getPageProps from 'utils/getPageProps';
import { HOME_QUERY_ALL } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';
import HomeMobile from '../modules/Home/Home.mobile';
import constant from "../infrastructure/constant"
import Layout from 'modules/Layout/Layout';

const HomePage = ({ homeData, menus, genders, footer, isMobile }) => {
  return (
    <>
      <Layout menus={menus} genders={genders} footer={footer} isMobile={isMobile}>
        {isMobile ? <HomeMobile data={homeData} /> : <Home data={homeData} />}
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({query, res, params}) => {
  const apolloClient = getApolloClient();

  const isMobile = query.isMobile === 'true';

  const { data, error, loading } = await apolloClient.execQuery({ query: HOME_QUERY_ALL }, { timeout: constant.home.timeout });

  if (error && error.hasError) {
    res.statusCode = 301
    res.setHeader('Location', constant.redirectLocation) // Replace <link> with your url link
    return { props: {} }
  }

  const { menus, genders, footer } = await getPageProps();

  const homeData = processToHome(data);

  return { props: { homeData, menus, genders, footer, isMobile } };
};

export default HomePage;
