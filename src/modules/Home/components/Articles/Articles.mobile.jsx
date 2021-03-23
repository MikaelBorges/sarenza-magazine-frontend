import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import ArticleItem from './ArticleItem/ArticleItem.mobile';
import styles from './Articles.mobile.module.scss';
import { LinkComponent } from '@/components/commons/Links';

const Articles = ({ articles, position }) => {
  return (
    <div className={styles.container}>
      {articles.map((article, index) => {
        return (
          <LinkComponent link={article.link} key={article.link} extraClasses={styles.content}>
            <ArticleItem article={article} size={index} position={position} />
          </LinkComponent>
        );
      })}
    </div>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  )
};

Articles.defaultProps = {
  articles: []
};

export default Articles;
