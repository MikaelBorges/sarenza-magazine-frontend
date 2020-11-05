import processToHome from 'modules/Home/model/Home';
import Layout from 'modules/Layout/Layout';
import React from 'react';
import { getApolloClient } from 'utils/apollo';
import getPageProps from 'utils/getPageProps';
import constant from "../infrastructure/constant"
import getConfig from "next/config"
import { HOME_QUERY } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';
import HomeMobile from '../modules/Home/Home.mobile';

const ArticleList = ({ rubriques, menus, genders, footer, isMobile }) => {
  return (
    <Layout menus={menus} genders={genders} footer={footer} isMobile={isMobile}>
      {isMobile ? <HomeMobile data={rubriques} /> : <Home data={rubriques} />}
    </Layout>
  );
};

export const getServerSideProps = async ({ query, res }) => {
  const { serverRuntimeConfig } = getConfig()

  const isMobile = query && query.isMobile === 'true'
  const apolloClient = getApolloClient();
  const { data, error, loading } = await apolloClient.execQuery({
    query: HOME_QUERY,
    variables: query
  }, { timeout: constant.home.timeout });

  if (!serverRuntimeConfig.DEBUG && error && error.hasError) {
    res.statusCode = 301
    res.setHeader('Location', constant.redirectLocation) // Replace <link> with your url link
    return { props: {} }
  }

  const { menus, genders, footer } = await getPageProps();

  const rubriques = processToHome(data, query.rubriqueName);

  return { props: { rubriques, menus, genders, footer, isMobile } };
};

export default ArticleList;
