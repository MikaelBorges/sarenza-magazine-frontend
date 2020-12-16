import processToHome from 'modules/Home/model/Home';
import { getApolloClient } from 'utils/apollo';
import getPageProps from 'utils/getPageProps';
import { HOME_QUERY_ALL } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';
import HomeMobile from '../modules/Home/Home.mobile';
import constant from '../infrastructure/constant';
import ContextHelper from '../utils/ContextHelper';
import Layout from 'modules/Layout/Layout';

const HomePage = ({ homeData, menus, genders, footer, isMobile }) => {
  return (
    <>
      <Layout menus={menus} genders={genders} footer={footer} isMobile={isMobile} metaData={{title: homeData.header.title, description: homeData.header.description}}>
        {isMobile ? <HomeMobile data={homeData} /> : <Home data={homeData} />}
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const { res } = ctx;

  const ct = new ContextHelper(ctx);

  global.srz_ctx = ct.context;

  const apolloClient = getApolloClient();

  // const start = (parseInt(ctx.query.page) - 1) * 12 || 0;
  // const limit = parseInt(ctx.query.page) * 12 || 12;

  const start = 0;
  const limit = 100;

  const { data, error } = await apolloClient.execQuery(
    { query: HOME_QUERY_ALL, variables: { ...ctx.query, limit: limit, start: start } },
    { timeout: constant.home.timeout }
  );

  if (!ct.context.DEBUG && error && error.hasError) {
    res.statusCode = 301;
    res.setHeader('Location', constant.redirectLocation); // Replace <link> with your url link
    return { props: {} };
  }

  const { menus, genders, footer } = await getPageProps();

  const homeData = processToHome(data);

  return {
    props: {
      homeData,
      menus,
      genders,
      footer,
      isMobile: ct.context.device.mobile || false,
      UrlPrefix: ct.context.route.link_prefix
    }
  };
};

export default HomePage;
