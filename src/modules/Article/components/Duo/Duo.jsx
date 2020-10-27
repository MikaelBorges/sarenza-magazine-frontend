/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

import React from 'react';

import Text from '@/components/commons/Text/Text';

import { replaceByJsx } from 'modules/Article/utils';
import styles from './Duo.module.scss';

const Duo = ({ duo_image, title, duo_paragraphe, button }) => {
  return (
    <div className={styles.container}>
      <img src={duo_image.url} alt="alt" className={styles.image} />
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <Text huge secondary>
            {title}
          </Text>
        </div>
        <div className={styles.paragraph}>
          {replaceByJsx(duo_paragraphe).forEach((item) => {
            if (item.type === 'text') {
              return <Text big>{item.text}</Text>;
            }
            if (item.type === 'verbatim') {
              return (
                <div className={styles.verbatimContainer}>
                  <Text verbatim>{item.text}</Text>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className={styles.button}>
        <button className="button" href={button.link}>
          {button.label}
        </button>
      </div>
    </div>
  );
};

export default Duo;
