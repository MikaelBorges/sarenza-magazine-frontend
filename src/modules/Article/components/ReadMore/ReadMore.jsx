import PropTypes from 'prop-types';
import React from 'react';

import ArticleItem from './ArticleItem/ArticleItem';
import styles from './ReadMore.module.scss';

const Articles = ({ articles, position }) => {
  return (
    <>
      <div className={styles.title} huge bold>
        À LIRE AUSSI
      </div>
      <div className={styles.container}>
        {articles.map((article, index) => (<div key={`article-${index}`} className={styles.content}>
          <ArticleItem article={article} size={index} position={position} />
        </div>))}
      </div>
    </>
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
