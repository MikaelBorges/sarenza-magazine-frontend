import React from 'react';

import LinkComponent from '@/components/commons/Links/LinkComponent/LinkComponent';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './MainComponent.module.scss';

const MainComponent = ({ article }) => {
  return (
    <LinkComponent link={article.link}>
      <div extraClasses={styles.content}>
        <ArticleTitle
          title={article.title}
          author={article.author}
          publishDate={article.publishDate}
        />
      </div>
      <div>
        <img src={article.image} className={styles.image} alt={article.title} />
      </div>
    </LinkComponent>
  );
};

export default MainComponent;
