/* eslint-disable no-irregular-whitespace */

import PropTypes from 'prop-types';
import React from 'react';

import styles from './Article.mobile.module.scss';
import Banner from './components/Banner/Banner.mobile';
import { getComponent } from './config/LoadableComponent.mobile';

const Article = ({ article }) => {
  return article ? (
    <div className={styles.article}>
      <Banner
        subTitleOptional={article.subtitle}
        srcImage={article.image.large}
        altImage="image de l'article"
        subTitleBanner={article.title}
        author={article.author}
        publishDate={article.publishDate}
        updateDate={article.updatedDate}
      />
      {article.modules.map((item) => {
        return getComponent(item);
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

Article.propTypes = {
  rubrique: PropTypes.string,
  slug: PropTypes.string
};

Article.defaultProps = {
  rubrique: '',
  slug: ''
};

export default Article;
