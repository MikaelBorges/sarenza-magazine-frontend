import Link from 'next/link';
import React from 'react';

import Text from '@/components/commons/Text';

import ArticleTitle from '../ArticleTitle/ArticleTitle.mobile';
import styles from './MainComponent.mobile.module.scss';
import LinkComponent from '@/components/commons/Links/LinkComponent/LinkComponent';

const MainComponent = ({ article }) => {
  return article.link ? (
    <LinkComponent link={encodeURI(article.link)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ArticleTitle
            title={article.title}
            author={article.author}
            publishDate={article.publishDate}
            firstArticle
          />
        </div>
        <img src={article.ImageArticleMobile} className={styles.image} alt={article.title} />
      </div>
    </LinkComponent>
  ) : (
    <MissingContent />
  );
};

export default MainComponent;
