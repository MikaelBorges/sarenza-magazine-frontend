import React from 'react';
import processToHome from 'modules/Home/model/Home';
import { getApolloClient } from 'utils/apollo';
import getPageProps from 'utils/getPageProps';
import { HOME_QUERY } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';
import HomeMobile from '../modules/Home/Home.mobile';
import constant from '../infrastructure/constant';
import ContextHelper from 'utils/ContextHelper';
import Layout from 'modules/Layout/Layout';
import wrapper from '../app/store';

const ArticleList = ({ rubriques, menus, genders, footer, isMobile }) => {
  return (
    <Layout menus={menus} genders={genders} footer={footer} isMobile={isMobile}>
      {isMobile ? <HomeMobile data={rubriques} /> : <Home data={rubriques} />}
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { res } = ctx;

  const ct = new ContextHelper(ctx);

  global.srz_ctx = ct.context;

  const apolloClient = getApolloClient();

  const { data, error } = await apolloClient.execQuery(
    { query: HOME_QUERY, variables: ctx.query },
    { timeout: constant.home.timeout }
  );

  if (!ct.context.DEBUG && error && error.hasError) {
    res.statusCode = 301;
    res.setHeader('Location', constant.redirectLocation); // Replace <link> with your url link
    return { props: {} };
  }

  const { menus, genders, footer } = await getPageProps();

  const rubriques = processToHome(data, ctx.query.rubriqueName);

  ctx.store.dispatch({ type: 'RUBRIQUE_SUCCESS', rubriques });

  return {
    props: {
      rubriques,
      menus,
      genders,
      footer,
      isMobile: ct.context.device.mobile || false,
      UrlPrefix: ct.context.route.link_prefix
    }
  };
});

export default ArticleList;
