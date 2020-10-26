import processToHome from 'modules/Home/model/Home';
import React from 'react';
import { getApolloClient } from 'utils/apollo';
import getPageProps from 'utils/getPageProps';

import { HOME_QUERY } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';
import Layout from './Layout/Layout';

const ArticleList = ({ rubriques, menus, genders, footer, isMobile }) => {
  return (
    <Layout menus={menus} genders={genders} footer={footer}>
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

  const rubriques = processToHome(data);

  return { props: { rubriques, menus, genders, footer } };
};

export default ArticleList;
