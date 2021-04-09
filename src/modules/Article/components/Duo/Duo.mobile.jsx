/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
import Markdown from 'markdown-to-jsx';
import { replaceByJsx } from 'modules/Article/utils';
import React from 'react';

import styles from './Duo.mobile.module.scss';

const DuoMobile = ({ duo_image, title, duo_paragraphe, button }) => {
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
          <a className="button" href={button.link}>
            {button.label}
          </a>
        </div>
      ) : null}
    </section>
  );
};

export default DuoMobile;
