/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

import Markdown from 'markdown-to-jsx';
import { replaceByJsx } from 'modules/Article/utils';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './Duo.module.scss';

const Duo = ({ duo_image, title, duo_paragraphe, button }) => {
  console.log (replaceByJsx(duo_paragraphe));
  return (
    <div className={styles.container}>
      <img src={duo_image.url} alt="alt" className={styles.image} />
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <Text huge secondary>
            {title}
          </Text>
        </div>
        {duo_paragraphe !== null ? (
          <div className={styles.paragraph}>
            {replaceByJsx(duo_paragraphe).map((item) => {
              if (item.type === 'text') {
                return (
                  <Text big>
                    <Markdown options={{ forceInline: false }}>{item.text}</Markdown>
                  </Text>
                );
              }
              if (item.type === 'verbatim') {
                return (
                  <div className={styles.verbatimContainer}>
                    <Text verbatim>
                      <Markdown options={{ forceInline: false }}>{item.text}</Markdown>
                    </Text>
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
    </div>
  );
};

export default Duo;
