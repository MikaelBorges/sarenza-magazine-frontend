import PropTypes from 'prop-types';
import React from 'react';

import Heading from '@/components/commons/Heading/Heading';

import ArticleItem from './ArticleItem/ArticleItem';
import styles from './ReadMore.module.scss';

const Articles = ({ articles, position }) => {
  return (
    <>
      <Heading headingLevel="h2" huge bold>
        À LIRE AUSSI
      </Heading>
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
