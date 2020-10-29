import React from 'react';
import Articles from 'modules/Article/Article';
import { ArticleModel } from 'modules/Article/model/Article';
import ArticlesMobile from 'modules/Article/Article.mobile';
import { getPageProps } from 'utils/getPageProps';
import Layout from 'pages/Layout/Layout';

const Article = ({ article, menus, genders, footer, isMobile }) => {
  return (
    <Layout menus={menus} genders={genders} footer={footer} isMobile={isMobile}>
      {isMobile ? <ArticlesMobile article={article} /> : <Articles article={article} />}
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const { menus, genders, footer } = await getPageProps();

  const data = await (await fetch(`${process.env.API_URL}/articles/?url=${slug}`)).json();
  return {
    props: {
      article: ArticleModel(data[0]),
      menus,
      genders,
      footer
    }
  };
};


export default Article;
