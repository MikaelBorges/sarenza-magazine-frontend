import PropTypes from 'prop-types';
import React from 'react';

import { LinkComponent } from '@/components/commons/Links';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './ArticleItem.module.scss';

const ArticleItem = ({ article }) => {
  return (
    <LinkComponent link={article.link}>
      <div>
        <img src={article.image} className={styles.image} alt={article.title} />
      </div>
      <div>
        <ArticleTitle
          title={article.title}
          author={article.author}
          publishDate={article.publishDate}
        />
      </div>
    </LinkComponent>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    publishDate: PropTypes.string
  })
};

ArticleItem.defaultProps = {
  article: {}
};

export default ArticleItem;
