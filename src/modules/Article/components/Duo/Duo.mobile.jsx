
import Markdown from 'markdown-to-jsx';
import { replaceByJsx } from 'modules/Article/utils';
import React, {useRef} from 'react';

import styles from './Duo.mobile.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, {TrackEvent} from 'utils/useGTM';

const DuoMobile = ({ duo_image, title, duo_paragraphe, button, id }) => {


  const trackCTA = useRef();
  const isVisible = useOnScreen(trackCTA);


  const trackGTM = (button, eventName) => {
    let obj = {
      id: button.id,
      name: button.label,
      position: 'DUO'
    };
    useGTM(obj, eventName);
  };

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={duo_image.url} alt="alt" className={styles.image} />
      </div>
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <h2 className={styles.huge}>
            {title}
          </h2>
        </div>
        {duo_paragraphe !== null ? (
          <div className={styles.paragraph}>
            {replaceByJsx(duo_paragraphe).map((item, index) => {
              if (item.type === 'text') {
                return (
                  <div className={styles.textContainer} key={`duo-text-${index}`}>
                    <div className={styles.big}>
                      <Markdown options={{ forceInline: false }}>{item.text}</Markdown>
                    </div>
                  </div>
                );
              }
              if (item.type === 'verbatim') {
                return (
                  <div className={styles.verbatimContainer} key={`duo-verbatim-${index}`}>
                    <div className={styles.verbatimMobile}>
                      <Markdown options={{ forceInline: false }}>{item.text}</Markdown>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : null}
      </div>
      {button !== null ? (
        <div className={styles.button}>
          <a className="button" href={button.link} ref={trackCTA} onClick={() => {
              trackGTM(button, TrackEvent.PromotionClick);
            }}>
            {button.label}
          </a>
          {isVisible ? trackGTM(button, TrackEvent.PromotionPrint) : null}
        </div>
      ) : null}
    </section>
  );
};

export default DuoMobile;
