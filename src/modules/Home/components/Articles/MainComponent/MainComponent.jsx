import React from 'react';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './MainComponent.module.scss';
import MissingContent from "../MissingComponent"

const MainComponent = ({ article }) => {
  return (
    (article && Object.entries(article).length !== 0 ) ? (
      <a href={article.link}>
        <div className={styles.container}>
          <div className={styles.content}>
            <ArticleTitle
              title={article.title}
              author={article.author}
              publishDate={article.publishDate}
              firstArticle
            />
          </div>
          <div className={styles.containerOne}>
            <img src={article.image} className={styles.image} alt={article.title} />
          </div>
        </div>
      </a>
    ):<MissingContent />
  );
};

export default MainComponent;
