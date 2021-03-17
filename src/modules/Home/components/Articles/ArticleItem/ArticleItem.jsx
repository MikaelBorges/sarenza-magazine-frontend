import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {useRef} from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './ArticleItem.module.scss';
import { useRouter } from 'next/router'
import useOnScreen from 'utils/useOnScreen';
import useGTM, {TrackEvent} from 'utils/useGTM';

const ArticleItem = ({ article, size, position }) => {

  const rubriqueName = useRouter().query.rubriqueName;

  const trackArticle = useRef();
  const isVisible = useOnScreen(trackArticle);

  const trackGTM = (article, eventName) => {
    let obj = {
      id: `${rubriqueName === undefined ? 'Tous les articles' : rubriqueName}`,
      name: `${article.title}`,
      creative: `${article.image}`,
      position: ''
    };
    useGTM(obj, eventName);
  };

  {isVisible ? trackGTM(article, TrackEvent.PromotionPrint) : null}

  
  return (
    <>
      <div
        className={classnames({
          [styles.containerImgContent]:
            (size < 2 && position === 1) || (size > 2 && position === 2),
          [styles.containerImgContentThree]:
            (size >= 2 && position === 1) || (size <= 2 && position === 2)
        })} ref={trackArticle} onClick={() => {
          trackGTM(article, TrackEvent.PromotionClick);
        }}>
        <img
          src={article.ImageArticleMobile}
          alt={"image"}
          className={styles.images}
        />
      </div>
      <ArticleTitle
        title={article.title}
        author={article.author}
        publishDate={article.publishDate.split("-").reverse().join("-").replace(/\b(\d{1})\b/g, '0$1')}
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
