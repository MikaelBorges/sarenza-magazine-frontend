import PropTypes from 'prop-types';
import React from 'react';


import ArticleItem from './ArticleItem/ArticleItem.mobile';
import styles from './ReadMore.mobile.module.scss';
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
      position: 'A lire aussi',
      strapId: `${article.title}-${article.publishDate}-${eventName}`
    };
    useGTM(obj, eventName);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        À LIRE AUSSI
      </div>
      {articles.map((article, index) => {
        return (
          <div key={index} className={styles.content}ref={trackReadMore}
          onClick={() => {
            trackGTM(article, TrackEvent.PromotionClick );
          }}>
          {isVisible ? trackGTM(article, TrackEvent.PromotionPrint ) : null}
            <ArticleItem article={article} size={index} position={position} />
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
