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
import { timeout } from '../utils/httpUtils';
import getConfig from 'next/config';


const ArticleList = ({ rubriques, menus, genders, footer, isMobile, seo }) => {
  
  return (
    <Layout
      menus={menus}
      genders={genders}
      footer={footer}
      isMobile={isMobile}
      metaData={{
        title: rubriques.currentRubrique.rubrique,
        description: `${seo.prefix}${rubriques.header.description}`
      }}>
      {isMobile ? <HomeMobile data={rubriques} isRubrique /> : <Home data={rubriques} isRubrique />}
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { res } = ctx;
  const { serverRuntimeConfig } = getConfig();

  const ct = new ContextHelper(ctx);

  global.srz_ctx = ct.context;

  const apolloClient = getApolloClient();

  const start = 0;
  const limit = 100;

  const { data, error } = await apolloClient.execQuery(
    { query: HOME_QUERY, variables: { ...ctx.query, limit: limit, start: start } },
    { timeout: constant.home.timeout }
  );

  if (!ct.context.DEBUG && error && error.hasError) {
    res.statusCode = 301;
    res.setHeader('Location', constant.redirectLocation); // Replace <link> with your url link
    return { props: {} };
  }
  const count = await (
    await timeout(
      constant.article.timeout,
      fetch(`${serverRuntimeConfig.API_URL}/articles/count?rubriques.url=${ctx.query.rubriqueName}`)
    )
  ).json();

  const { menus, genders, footer, seo } = await getPageProps();
  const rubriques = processToHome(data, ctx.query.rubriqueName);
  rubriques.numberArticles = count;
  const isRubrique = ctx.query.rubriqueName;

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
