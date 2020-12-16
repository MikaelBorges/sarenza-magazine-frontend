/* eslint-disable no-irregular-whitespace */

import React, {useRef} from 'react';

import styles from './Article.mobile.module.scss';
import Banner from './components/Banner/Banner.mobile';
import ReadMore from './components/ReadMore/ReadMore.mobile';
import { getComponent } from './config/LoadableComponent.mobile';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   


const Article = ({ article, recentArticle }) => {

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return article ? (
    <div className={styles.article}>
      <a ref={myRef}></a>
      <Banner
        subTitleOptional={article.subtitle}
        srcImage={article.image.medium}
        altImage="image de l'article"
        subTitleBanner={article.title}
        author={article.author}
        publishDate={article.publishDate}
        updateDate={article.updatedDate}
      />
      {article.modules.map((item) => {
        return getComponent(item);
      })}
      {recentArticle && recentArticle.length > 0 && <ReadMore articles={recentArticle} />}
      <a className={styles.link} onClick={executeScroll}>
        Revenir en haut de page
      </a>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Article;
