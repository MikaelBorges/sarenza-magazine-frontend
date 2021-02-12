import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';

import ArticleItem from './ArticleItem/ArticleItem';
import styles from './Articles.module.scss';
import { LinkComponent } from '@/components/commons/Links';
// import TagManager from 'react-gtm-module';
// import { useRouter } from 'next/router';
// import useOnScreen from 'utils/useOnScreen';

const Articles = ({ articles, position, firstArticle }) => {

  // const trackArticles = useRef()
  // const isVisible = useOnScreen(trackArticles)
  // const rubriqueName = useRouter().query.rubriqueName;
    
  
 
  return (
    <div className={styles.container}>

      {articles.map((article, index) => {

            // (isVisible && process.browser) ?
            // TagManager.dataLayer({
            //    dataLayer: {
            //      event: 'promotionPrint',
            //      ecommerce: {
            //        promoView: {
            //          promotions: [
            //            {
            //              id: `${rubriqueName === undefined ? "Tous les articles" : rubriqueName } `,
            //              name: `${article.title}`,
            //              creative: `${article.image}`,
            //              position: `${firstArticle && firstArticle.title}`
            //            }
            //          ]
            //        }
            //      }
            //    }
            //  }) : null
 
        return (
      

          <LinkComponent
            link={article.link}
            key={article.link}
            extraClasses={classnames({
              [styles.content]: (index < 2 && position === 1) || (index > 2 && position === 2),
              [styles.contentThree]:
              (index >= 2 && position === 1) || (index <= 2 && position === 2)
            })}  >
            <ArticleItem article={article} size={index} position={position} />
          </LinkComponent>
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
