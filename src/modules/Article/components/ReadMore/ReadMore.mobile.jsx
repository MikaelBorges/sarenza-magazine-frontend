import PropTypes from 'prop-types';
import React from 'react';

import Heading from '@/components/commons/Heading';

import ArticleItem from './ArticleItem/ArticleItem.mobile';
import styles from './ReadMore.mobile.module.scss';

const Articles = ({ articles, position }) => {
  return (
    <div className={styles.container}>
      <Heading huge bold>
        À LIRE AUSSI
      </Heading>
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
