import PropTypes from 'prop-types';
import React from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle.mobile';
import styles from './ArticleItem.mobile.module.scss';

const ArticleItem = ({ article, size, position }) => {
  return (
    <>
      <img
        src={
          (size < 2 && position === 1) || (size > 2 && position === 2)
            ? article.mediumImage.url
            : article.smallImage.url
        }
        className={styles.image}
        alt={
          (size < 2 && position === 1) || (size > 2 && position === 2)
            ? article.mediumImage.alt
            : article.smallImage.alt
        }
      />
      <ArticleTitle
        title={article.title}
        author={article.author}
        publishDate={article.publishDate}
        size={size}
        position={position}
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
