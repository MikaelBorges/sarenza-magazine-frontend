import Articles from 'modules/Article/Article';
import ArticlesMobile from 'modules/Article/Article.mobile';
import { ArticleModel, ArticlesModel } from 'modules/Article/model/Article';
import Layout from 'modules/Layout/Layout';
import getConfig from 'next/config';
import React from 'react';
import { getPageProps } from 'utils/getPageProps';

const { serverRuntimeConfig } = getConfig();

const Article = ({ article, menus, genders, footer, recentArticle, isMobile }) => {
  return (
    <Layout menus={menus} genders={genders} footer={footer} isMobile={isMobile}>
      {isMobile ? (
        <ArticlesMobile article={article} recentArticle={recentArticle} />
      ) : (
        <Articles article={article} recentArticle={recentArticle} />
      )}
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { slug, rubriqueName, isMobile } = context.query;
  const mobileMode = isMobile === 'true';
  const { menus, genders, footer } = await getPageProps();
  const data = await (await fetch(`${serverRuntimeConfig.API_URL}/articles/?url=${slug}`)).json();
  const recentArticle = await (
    await fetch(
      `${serverRuntimeConfig.API_URL}/articles?_limit=4&_sort=updated_by&rubriques.url=${rubriqueName}`
    )
  ).json();

  return {
    props: {
      article: ArticleModel(data[0]),
      recentArticle: ArticlesModel(recentArticle.filter((item) => item.url !== slug).slice(0, 3)),
      menus,
      genders,
      footer,
      isMobile: mobileMode
    }
  };
};

export default Article;
