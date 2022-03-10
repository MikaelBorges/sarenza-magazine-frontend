import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle.mobile';
import styles from './ArticleItem.mobile.module.scss';
import { useRouter } from 'next/router';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';

const ArticleItem = ({ article, size, position }) => {
  const rubriqueName = useRouter().query.rubriqueName;

  const trackArticle = useRef();
  const isVisible = useOnScreen(trackArticle);

  const trackGTM = (article, eventName) => {
    let obj = {
      id: `${rubriqueName === undefined ? 'Tous les articles' : rubriqueName}`,
      name: `${article.title}`,
      creative: `${article.image}`,
      position: '',
      strapId: `${article.title}-${article.image}-${eventName}`
    };
    useGTM(obj, eventName);
  };

  {
    isVisible ? trackGTM(article, TrackEvent.PromotionPrint) : null;
  }
  return (
    <>
      <img
        src={article.ImageArticleMobile}
        className={styles.image}
        alt={'image'}
        ref={trackArticle}
        onClick={() => {
          trackGTM(article, TrackEvent.PromotionClick);
        }}
      />
      <ArticleTitle
        title={article.title}
        author={article.author}
        publishDate={article.publishDate}
        size={size}
        position={position}
      />
    </>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    publishDate: PropTypes.string
  })
};

ArticleItem.defaultProps = {
  article: {}
};

export default ArticleItem;
