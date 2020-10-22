import React from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle.mobile';
import styles from './MainComponent.mobile.module.scss';

const MainComponent = ({ article }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ArticleTitle
          title={article.title}
          author={article.author}
          publishDate={article.publishDate}
          firstArticle
        />
      </div>
      <img src={article.image} className={styles.image} alt={article.title} />
    </div>
  );
};

export default MainComponent;
