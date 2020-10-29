import React from 'react';
import Articles from 'modules/Article/Article';
import { ArticleModel, ArticlesModel } from 'modules/Article/model/Article';
import ArticlesMobile from 'modules/Article/Article.mobile';
import { getPageProps } from 'utils/getPageProps';
import Layout from 'pages/Layout/Layout';

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
  const { slug } = context.query;
  const { menus, genders, footer } = await getPageProps();

  const data = await (await fetch(`${process.env.API_URL}/articles/?url=${slug}`)).json();
  const recentArticle = await (
    await fetch(`${process.env.API_URL}/articles?_limit=4&_sort=updated_by`)
  ).json();

  return {
    props: {
      article: ArticleModel(data[0]),
      recentArticle: ArticlesModel(recentArticle.filter((item) => item.url !== slug).slice(0, 3)),
      menus,
      genders,
      footer
    }
  };
};


export default Article;
