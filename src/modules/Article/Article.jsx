/* eslint-disable no-irregular-whitespace */

import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import styles from './Article.module.scss';
import Banner from './components/Banner/Banner';
import ReadMore from './components/ReadMore/ReadMore';
import { getComponent } from './config/LoadableComponent';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Article = ({ article, recentArticle }) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return article ? (
    <div className={styles.article}>
      <a ref={myRef}></a>
      <Banner
        subTitleOptional={article.subtitle}
        srcImage={article.image && article.image.large}
        altImage="image de l'article"
        subTitleBanner={article.title}
        author={article.author}
        publishDate={article.publishDate}
        updateDate={article.updatedDate}
      />
      {article.modules &&
        article.modules.map((item, i) => {
          return getComponent(item, i);
        })}
      {recentArticle && recentArticle.length > 0 && <ReadMore articles={recentArticle} />}
      <a className={styles.link} onClick={executeScroll}>
        Revenir en haut de page
      </a>
    </div>
  ) : (
    <div>Loading</div>
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
