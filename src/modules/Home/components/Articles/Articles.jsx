import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import ArticleItem from './ArticleItem/ArticleItem';
import styles from './Articles.module.scss';
import { LinkComponent } from '@/components/commons/Links';

const Articles = ({ articles, position }) => {
  return (
    <div className={styles.container}>
      {articles.map((article, index) => {
        return (
          <LinkComponent
            link={article.link}
            key={article.link}
            extraClasses={classnames({
              [styles.content]: (index < 2 && position === 1) || (index > 2 && position === 2),
              [styles.contentThree]:
                (index >= 2 && position === 1) || (index <= 2 && position === 2)
            })}>
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
