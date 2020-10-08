import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import ArticleItem from './ArticleItem/ArticleItem';
import styles from './Articles.module.scss';

const Articles = ({ articles }) => {
  return (
    <div className={styles.container}>
      {articles.map((article, index) => {
        return (
          <div
            className={classnames({
              [styles.content]: index < 2,
              [styles.contentThree]: index >= 2
            })}
            key={article.id}>
            <ArticleItem article={article} />
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
