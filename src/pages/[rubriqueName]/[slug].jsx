import React from 'react';
import Articles from 'modules/Article/Article';
import { ArticleModel } from 'modules/Article/model/Article';
import ArticlesMobile from 'modules/Article/Article.mobile';
const Article = ({ article, isMobile }) => {
  return isMobile ? <ArticlesMobile article={article} /> : <Articles article={article} />;
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const data = await (await fetch(`${process.env.API_URL}/articles/?url=${slug}`)).json();
  return {
    props: {
      article: ArticleModel(data[0])
    }
  };
};

export default Article;
