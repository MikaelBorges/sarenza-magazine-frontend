import Link from 'next/link';
import React from 'react';

import Text from '@/components/commons/Text';

import ArticleTitle from '../ArticleTitle/ArticleTitle.mobile';
import styles from './MainComponent.mobile.module.scss';

const MainComponent = ({ article }) => {
  return article.link ? (
    <Link href={encodeURI(article.link)}>
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
  ) : (
    <Text>Aucun Article</Text>
  );
};

export default MainComponent;
