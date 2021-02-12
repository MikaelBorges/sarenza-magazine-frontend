import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {useRef} from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './ArticleItem.module.scss';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router'
import useOnScreen from 'utils/useOnScreen';

const ArticleItem = ({ article, size, position }) => {


  const rubriqueName = useRouter().query.rubriqueName;

  const trackArticle = useRef();
  const isVisible = useOnScreen(trackArticle);

 const trackPrint = ()=>{
    {isVisible && process.browser
      ? TagManager.dataLayer({
          dataLayer: {
            event: 'promotionPrint',
            ecommerce: {
              promoView: {
                promotions: [
                  {
                    id: `${rubriqueName}`,
                    name: `${article.title}`,
                    creative: `${article.image.large}`,
                     position: ""
                  }
                ]
              }
            }
          }
        })
      : null}
  }

  const trackClick = () => {
    TagManager.dataLayer(
      {
        dataLayer: {
          event: 'promoTionClick',
          ecommerce: {
            promoClick: {
              promotions: [
                {
                  id: `${rubriqueName}`,
                  name: `${article.title}`,
                  creative: `${article.image.large}`,
                   position: ""
                }
              ]
            }
          }
        }
      }
    )
  }
  

  return (
    <>
      <div
        className={classnames({
          [styles.containerImgContent]:
            (size < 2 && position === 1) || (size > 2 && position === 2),
          [styles.containerImgContentThree]:
            (size >= 2 && position === 1) || (size <= 2 && position === 2)
        })} ref={trackArticle} onClick={
          ()=>{ 
            trackClick();
        }}>
         {trackPrint()}
        <img
          src={article.ImageArticleMobile}
          alt={"image"}
          className={styles.images}
        />
      </div>
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
