import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import ArticleItem from './ArticleItem/ArticleItem';
import styles from './ReadMore.module.scss';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import useOnScreen from 'utils/useOnScreen';

const Articles = ({ articles, position }) => {
  const rubriqueName = useRouter().query.rubriqueName;

  const trackReadMore = useRef();
  const isVisible = useOnScreen(trackReadMore);

  const trackPrint = (article, index) => {
    {
      isVisible && process.browser
        ? TagManager.dataLayer({
            dataLayer: {
              event: 'promotionPrint',
              ecommerce: {
                promoView: {
                  promotions: [
                    {
                      id: `${rubriqueName === undefined ? 'Tous les articles' : rubriqueName}`,
                      name: `${article.title}`,
                      creative: `${article.image.small}`,
                      position: 'A lire aussi'
                    }
                  ]
                }
              }
            }
          })
        : null;
    }
  };

  const trackClick = (article) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'promoTionClick',
        ecommerce: {
          promoClick: {
            promotions: [
              {
                id: `${rubriqueName === undefined ? 'Tous les articles' : rubriqueName}`,
                name: `${article.title}`,
                creative: `${article.image.small}`,
                position: 'A lire aussi'
              }
            ]
          }
        }
      }
    });
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
              trackClick(article, index);
            }}>
            {trackPrint(article, index)}
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
