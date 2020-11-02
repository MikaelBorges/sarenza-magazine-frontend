import processToHome from 'modules/Home/model/Home';
import Layout from 'modules/Layout/Layout';
import React from 'react';
import { getApolloClient } from 'utils/apollo';
import getPageProps from 'utils/getPageProps';

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

export const getServerSideProps = async (context) => {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: HOME_QUERY,
    variables: context.query
  });

  const { menus, genders, footer } = await getPageProps();

  const rubriques = processToHome(data, context.query.rubriqueName);

  return { props: { rubriques, menus, genders, footer } };
};

export default ArticleList;
