import React from 'react';
import processToHome from 'modules/Home/model/Home';
import { getApolloClient } from 'utils/apollo';
import getPageProps from 'utils/getPageProps';
import { HOME_QUERY_RUBRIQUE_V4 } from 'apollo/queries/home/homeQueryV4';
import Home from '../modules/Home/Home';
import HomeMobile from '../modules/Home/Home.mobile';
import constant from '../infrastructure/constant';
import ContextHelper from 'utils/ContextHelper';
import Layout from 'modules/Layout/Layout';
import wrapper from '../app/store';

const ArticleList = ({ rubriques, menus, genders, footer, isMobile, seo }) => {
  console.log({ rubriques });
  return (
    <Layout
      menus={menus}
      genders={genders}
      footer={footer}
      isMobile={isMobile}
      metaData={{
        title: rubriques?.currentRubrique?.rubrique,
        description: `${seo.prefix}${rubriques?.header?.description}`
      }}>
      {isMobile ? <HomeMobile data={rubriques} isRubrique /> : <Home data={rubriques} isRubrique />}
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { res } = ctx;

  const ct = new ContextHelper(ctx);
  global.srz_ctx = ct.context;

  const apolloClient = getApolloClient();

  const rubriqueName = ctx.query.rubriqueName;
  const page = ctx.query.page;
  const start = page ? (parseInt(page) - 1) * 12 + 1 : 0;
  const limit = page ? 12 : 13;

  const { data, error } = await apolloClient.execQuery(
    { query: HOME_QUERY_RUBRIQUE_V4, variables: { rubriqueName, limit, start } },
    { timeout: constant.home.timeout }
  );

  if (!ct.context.DEBUG && error && error.hasError) {
    res.statusCode = 301;
    res.setHeader('Location', constant.redirectLocation); // Replace <link> with your url link
    return { props: {} };
  }

  const { menus, genders, footer, seo } = await getPageProps();

  const rubriques = processToHome(data, rubriqueName, page);
  const isRubrique = rubriqueName;

  ctx.store.dispatch({ type: 'RUBRIQUE_SUCCESS', rubriques });

  return {
    props: {
      rubriques,
      isRubrique,
      menus,
      genders,
      footer,
      isMobile: ct.context.device.mobile || false,
      UrlPrefix: ct.context.route.link_prefix,
      seo
    }
  };
});

export default ArticleList;
