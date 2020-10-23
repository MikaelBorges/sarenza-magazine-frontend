import Link from 'next/link';
import React from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './MainComponent.module.scss';

const MainComponent = ({ article }) => {
  return (
    <Link href={article.link}>
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
    </Link>
  );
};

export default MainComponent;