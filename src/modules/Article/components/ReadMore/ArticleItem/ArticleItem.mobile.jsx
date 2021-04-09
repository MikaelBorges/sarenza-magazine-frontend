import PropTypes from 'prop-types';
import React from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle.mobile';
import styles from './ArticleItem.mobile.module.scss';
import { LinkComponent } from '@/components/commons/Links';

const ArticleItem = ({ article, size, position }) => {
  return (
    <LinkComponent link={article.link}>
      <img src={article.image.medium} alt={article.title} className={styles.image} />
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
