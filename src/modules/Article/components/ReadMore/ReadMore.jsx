import PropTypes from 'prop-types';
import React from 'react';

import Heading from '@/components/commons/Heading/Heading';

import ArticleItem from './ArticleItem/ArticleItem';
import styles from './ReadMore.module.scss';

const Articles = ({ articles, position }) => {
  return (
    <>
      <Heading huge bold>
        À LIRE AUSSI
      </Heading>
      <div className={styles.container}>
        {articles.map((article, index) => {
          return (
            <div key={article.id} className={styles.content}>
              <ArticleItem article={article} size={index} position={position} />
            </div>
          );
        })}
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
