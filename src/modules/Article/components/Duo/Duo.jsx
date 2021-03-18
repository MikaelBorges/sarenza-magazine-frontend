/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

import Markdown from 'markdown-to-jsx';
import { replaceByJsx } from 'modules/Article/utils';
import React from 'react';

import styles from './Duo.module.scss';

const Duo = ({ duo_image, title, duo_paragraphe, button }) => {
  return (
    <section className={styles.container}>
      {duo_image &&
      <img src={duo_image.url} alt="alt" className={styles.image} />
      }
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <h2 className={styles.huge}>
            {title}
          </h2>
        </div>
        {duo_paragraphe !== null ? (
          <div className={styles.paragraph}>
            {replaceByJsx(duo_paragraphe).map((item) => {
              if (item.type === 'text') {
                return (
                  <div className={styles.big}>
                    <Markdown options={{ forceInline: false }}>{item.text}</Markdown>
                  </div>
                );
              }
              if (item.type === 'verbatim') {
                return (
                  <div className={styles.verbatimContainer}>
                    <div className={styles.verbatim}>
                      <Markdown options={{ forceInline: false }}>{item.text}</Markdown>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : null}
        {button !== null ? (
          <div className={styles.button}>
            <a className="button" href={button.link}>
              {button.label}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Duo;
