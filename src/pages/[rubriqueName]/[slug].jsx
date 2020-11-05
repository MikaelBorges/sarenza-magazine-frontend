import Articles from 'modules/Article/Article';
import ArticlesMobile from 'modules/Article/Article.mobile';
import { ArticleModel, ArticlesModel } from 'modules/Article/model/Article';
import Layout from 'modules/Layout/Layout';
import getConfig from 'next/config';
import React from 'react';
import { getPageProps } from 'utils/getPageProps';
import constant from "../../infrastructure/constant"
import { timeout } from "../../utils/httpUtils"

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

export const getServerSideProps = async ({ res, query }) => {
  const { serverRuntimeConfig } = getConfig()
  const isMobile = query.isMobile === 'true'

  const { slug, rubriqueName } = query;

  const response = await timeout(constant.article.timeout, fetch(`${serverRuntimeConfig.API_URL}/articles/?url=${slug}`)).catch((e) => {
    console.log(`Error getting article "${slug}"`, e)
    return { hasError: true }
  })

  if (!serverRuntimeConfig.DEBUG && response.hasError) {
    res.statusCode = 301
    res.setHeader('Location', constant.redirectLocation) // Replace <link> with your url link
    return { props: {} }
  }

  const data = await response.json();

  const { menus, genders, footer } = await getPageProps();

  const recentArticle = await (
    await timeout(constant.article.timeout, fetch(
      `${serverRuntimeConfig.API_URL}/articles?_limit=4&_sort=updated_by&rubriques.url=${rubriqueName}`
    ))
  ).json();

  return {
    props: {
      article: ArticleModel(data[0]),
      recentArticle: ArticlesModel(recentArticle.filter((item) => item.url !== slug).slice(0, 3)),
      menus,
      genders,
      footer,
      isMobile
    }
  };
};

export default Article;
