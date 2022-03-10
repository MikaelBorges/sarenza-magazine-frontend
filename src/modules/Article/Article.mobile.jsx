/* eslint-disable no-irregular-whitespace */
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

import styles from './Article.mobile.module.scss';
import Banner from './components/Banner/Banner.mobile';
import ReadMore from './components/ReadMore/ReadMore.mobile';
import { getComponent } from './config/LoadableComponent.mobile';
import { useRouter } from 'next/router';
import useGTM, { TrackEvent } from 'utils/useGTM';

const scrollToRef = (ref) => window.scrollTo({ behavior: 'smooth', top: 0 });

const Article = ({ article, recentArticle }) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const rubriqueName = useRouter().query.rubriqueName;

  const trackGTM = (article) => {
    let obj = {
      date_publication: `${article.publishDate}`,
      date_mise_a_jour: `${article.updatedDate}`,
      categorie_article: `${rubriqueName}`,
      titre_article: `${article.title}`
    };
    useGTM(obj);
  };

  useEffect(() => {
    trackGTM(article);
  }, []);
  return article ? (
    <div className={styles.article}>
      <a ref={myRef}></a>
      <Banner
        subTitleOptional={article.subtitle}
        srcImage={article.image && article.image.medium}
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
