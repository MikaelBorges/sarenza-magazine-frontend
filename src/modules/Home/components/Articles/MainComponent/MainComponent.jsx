import React from 'react';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './MainComponent.module.scss';
import MissingContent from '../MissingComponent';
import { LinkComponent } from '@/components/commons/Links';

const MainComponent = ({ article, isRubrique }) => {

  return article && Object.entries(article).length !== 0 ? (
    <>
      <LinkComponent link={article.link}>
        <div className={styles.container}>
          <div className={isRubrique && isRubrique ? styles.content : styles.contentHP}>
            <ArticleTitle
              title={article.title}
              author={article.author}
              publishDate={article.publishDate}
              firstArticle
            />
          </div>
          <div className={isRubrique && isRubrique ? styles.containerOne : styles.containerOneHP}>
            <img src={article.image} className={styles.image} alt={article.title} />
          </div>
        </div>
      </LinkComponent>
    </>
  ) : (
    <MissingContent />
  );
};

export default MainComponent;
