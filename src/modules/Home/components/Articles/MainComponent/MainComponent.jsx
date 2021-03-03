import React, {useRef} from 'react';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './MainComponent.module.scss';
import MissingContent from '../MissingComponent';
import { LinkComponent } from '@/components/commons/Links';
import { useRouter } from 'next/router'
import useOnScreen from 'utils/useOnScreen';
import useGTM, {TrackEvent} from 'utils/useGTM';

const MainComponent = ({ article, isRubrique }) => {

  const rubriqueName = useRouter().query.rubriqueName;

  const trackMaincomp = useRef();
  const isVisible = useOnScreen(trackMaincomp);


  const trackGTM = (article, eventName) => {
    let obj = {
      id: `${rubriqueName === undefined ? 'Tous les articles' : rubriqueName}`,
      name: `${article.title}`,
      creative: `${article.image}`,
      position: 'A la une'
    };
    useGTM(obj, eventName);
  };


  return article && Object.entries(article).length !== 0 ? (
    <>
      <LinkComponent link={article.link}>
        <div className={styles.container} ref={trackMaincomp} onClick={() => {
              trackGTM(article, TrackEvent.PromotionClick);
            }}>
          {isVisible ? trackGTM(article, TrackEvent.PromotionPrint) : null}
          <div className={isRubrique && isRubrique ? styles.content : styles.contentHP}>
            <ArticleTitle
              title={article.title}
              author={article.author}
              publishDate={article.publishDate}
              firstArticle
            />
          </div>
          <div className={isRubrique && isRubrique ? styles.containerOne : styles.containerOneHP}>
            <img src={article.image} className={styles.image} alt={article.title} />
          </div>
        </div>
      </LinkComponent>
    </>
  ) : (
    <MissingContent />
  );
};

export default MainComponent;
