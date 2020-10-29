import classnames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import ArticleItem from './ArticleItem/ArticleItem';
import styles from './ReadMore.module.scss';

const Articles = ({ articles, position }) => {
  console.log('articles', articles);
  return (
    <div className={styles.container}>
      {articles.map((article, index) => {
        return (
          <div key={article.id} className={styles.content}>
            <ArticleItem article={article} size={index} position={position} />
          </div>
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
