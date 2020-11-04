/* eslint-disable no-irregular-whitespace */

import React from 'react';

import styles from './Article.mobile.module.scss';
import Banner from './components/Banner/Banner.mobile';
import ReadMore from './components/ReadMore/ReadMore.mobile';
import { getComponent } from './config/LoadableComponent.mobile';

const Article = ({ article, recentArticle }) => {
  return article ? (
    <div className={styles.article}>
      <Banner
        subTitleOptional={article.subtitle}
        srcImage={article.image.medium}
        altImage="image de l'article"
        subTitleBanner={article.title}
        author={article.author}
        publishDate={article.publishDate}
        updateDate={article.updatedDate}
      />
      {article.modules.map((item) => {
        return getComponent(item);
      })}
      {recentArticle && <ReadMore articles={recentArticle} />}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Article;
