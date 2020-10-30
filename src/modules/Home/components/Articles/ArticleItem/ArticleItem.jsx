import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './ArticleItem.module.scss';

const ArticleItem = ({ article, size, position }) => {
  return (
    <>
      <div
        className={classnames({
          [styles.containerImgContent]:
            (size < 2 && position === 1) || (size > 2 && position === 2),
          [styles.containerImgContentThree]:
            (size >= 2 && position === 1) || (size <= 2 && position === 2)
        })}>
        <img
          src={article.ImageArticleMobile}
          alt={"image"}
          className={styles.images}
        />
      </div>
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
