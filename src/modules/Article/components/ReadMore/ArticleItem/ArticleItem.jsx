import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './ArticleItem.module.scss';
import LinkComponent from '@/components/commons/Links/LinkComponent/LinkComponent';

const ArticleItem = ({ article, size, position }) => {
  return (
    <LinkComponent link={article.link}>
      <div
        className={classnames({
          [styles.containerImgContent]:
            (size < 2 && position === 1) || (size > 2 && position === 2),
          [styles.containerImgContentThree]:
            (size >= 2 && position === 1) || (size <= 2 && position === 2)
        })}>
        <img src={article.image.medium} alt={article.title} className={styles.images} />
      </div>
      <ArticleTitle
        title={article.title}
        author={article.author}
        updateDate={article.updatedDate}
        size={size}
        position={position}
      />
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
