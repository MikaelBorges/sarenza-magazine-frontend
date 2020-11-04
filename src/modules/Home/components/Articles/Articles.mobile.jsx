import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import ArticleItem from './ArticleItem/ArticleItem.mobile';
import styles from './Articles.mobile.module.scss';

const Articles = ({ articles, position }) => {
  return (
    <div className={styles.container}>
      {articles.map((article, index) => {
        return (
          <Link href={article.link} key={article.link} passHref>
            <a key={article.id} className={styles.content}>
              <ArticleItem article={article} size={index} position={position} />
            </a>
          </Link>
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
