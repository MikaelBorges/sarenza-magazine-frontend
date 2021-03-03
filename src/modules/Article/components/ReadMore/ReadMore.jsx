import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import ArticleItem from './ArticleItem/ArticleItem';
import styles from './ReadMore.module.scss';
import { useRouter } from 'next/router';
import useOnScreen from 'utils/useOnScreen';
import useGTM, {TrackEvent} from 'utils/useGTM';

const Articles = ({ articles, position }) => {

  const trackReadMore = useRef();
  const isVisible = useOnScreen(trackReadMore);
  const rubriqueName = useRouter().query.rubriqueName;

  const trackGTM = (article, eventName) => {
    let obj = {
      id: `${rubriqueName === undefined ? 'Tous les articles' : rubriqueName}`,
      name: `${article.title}`,
      creative: `${article.image.small}`,
      position: 'A lire aussi'
    };
    useGTM(obj, eventName);
  };


  return (
    <>
      <div className={styles.title}>À LIRE AUSSI</div>
      <div className={styles.container}>
        {articles.map((article, index) => (
          <div
            key={`article-${index}`}
            className={styles.content}
            ref={trackReadMore}
            onClick={() => {
              trackGTM(article, TrackEvent.PromotionClick );
            }}>
            {isVisible ? trackGTM(article, TrackEvent.PromotionPrint ) : null}
            <ArticleItem article={article} size={index} position={position} />
          </div>
        ))}
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
