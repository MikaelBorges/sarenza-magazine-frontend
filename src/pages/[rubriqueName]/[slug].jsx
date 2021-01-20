import Articles from 'modules/Article/Article';
import ArticlesMobile from 'modules/Article/Article.mobile';
import { ArticleModel, ArticlesModel } from 'modules/Article/model/Article';
import Layout from 'modules/Layout/Layout';
import getConfig from 'next/config';
import React from 'react';
import { getPageProps } from 'utils/getPageProps';
import constant from '../../infrastructure/constant';
import { timeout } from '../../utils/httpUtils';
import ContextHelper from 'utils/ContextHelper';
import wrapper from '../../app/store';

const Article = ({ article, menus, genders, footer, recentArticle, isMobile, seo }) => {
  return (
    <Layout
      menus={menus}
      genders={genders}
      footer={footer}
      isMobile={isMobile}
      metaData={{
        title: article.title,
        description: `${seo.prefix}${
          article.title
        }`
      }}>
      {isMobile ? (
        <ArticlesMobile article={article} recentArticle={recentArticle} />
      ) : (
        <Articles article={article} recentArticle={recentArticle} />
      )}
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { serverRuntimeConfig } = getConfig();

  const { slug, rubriqueName } = ctx.query;
  const ct = new ContextHelper(ctx);

  const response = await timeout(
    constant.article.timeout,
    fetch(`${serverRuntimeConfig.API_URL}/articles/?url=${slug}`)
  ).catch((e) => {
    console.log(`Error getting article "${slug}"`, e);
    return { hasError: true };
  });

  if (!serverRuntimeConfig.DEBUG && response.hasError) {
    ctx.res.statusCode = 301;
    ctx.res.setHeader('Location', constant.redirectLocation); // Replace <link> with your url link
    return { props: {} };
  }

  const data = await response.json();

  const { menus, genders, footer, seo } = await getPageProps();

  const recentArticle = await (
    await timeout(
      constant.article.timeout,
      fetch(
        `${serverRuntimeConfig.API_URL}/articles?_limit=4&_sort=updated_by&rubriques.url=${rubriqueName}`
      )
    )
  ).json();

  const article = ArticleModel(data[0]);
  ctx.store.dispatch({ type: 'ARTICLE_SUCCESS', article });
  return {
    props: {
      article,
      recentArticle: ArticlesModel(recentArticle.filter((item) => item.url !== slug).slice(0, 3)),
      menus,
      genders,
      footer,
      isMobile: ct.context.device.mobile || false,
      seo
    }
  };
});

export default Article;
