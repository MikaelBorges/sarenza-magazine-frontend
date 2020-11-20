/* eslint-disable no-irregular-whitespace */

import PropTypes from 'prop-types';
import React from 'react';

import styles from './Article.module.scss';
import Banner from './components/Banner/Banner';
import IframeVideo from './components/IframeVideo/IframeVideo';
import ReadMore from './components/ReadMore/ReadMore';
import { getComponent } from './config/LoadableComponent';

const Article = ({ article, recentArticle }) => {
  return (
    article ? (
      <div className={styles.article}>
        <Banner
          subTitleOptional={article.subtitle}
          srcImage={article.image && article.image.large}
          altImage="image de l'article"
          subTitleBanner={article.title}
          author={article.author}
          publishDate={article.publishDate}
          updateDate={article.updatedDate}
        />
        {article.modules && article.modules.map((item, i) => {
          return getComponent(item, i);
        })}
        <IframeVideo iframe={article.video.iframe} />
        {recentArticle && recentArticle.length > 0 && <ReadMore articles={recentArticle} />}
      </div>
    ) : (
        <div>Loading</div>
      )
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string
  })
};

Article.defaultProps = {
  article: {}
};

export default Article;
