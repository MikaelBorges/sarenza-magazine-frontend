import PropTypes from 'prop-types';
import React from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './ArticleItem.module.scss';

const ArticleItem = ({ article }) => {
  return (
    <>
      <img src={article.mediumImage.url} className={styles.image} alt={article.mediumImage.alt} />
      <ArticleTitle
        title={article.title}
        author={article.author}
        publishDate={article.publishDate}
      />
    </>
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
