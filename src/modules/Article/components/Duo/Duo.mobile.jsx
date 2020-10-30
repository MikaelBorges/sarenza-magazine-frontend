/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
import { replaceByJsx } from 'modules/Article/utils';
import React from 'react';
import Markdown from 'markdown-to-jsx';

import Text from '@/components/commons/Text/Text';

import styles from './Duo.mobile.module.scss';

const DuoMobile = ({ duo_image, title, duo_paragraphe, button }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={duo_image.url} alt="alt" className={styles.image} />
      </div>
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
                  <div className={styles.textContainer} key={item.id}>
                    <Text big>
                      <Markdown options={{ forceInline: true }}>{item.text}</Markdown>
                    </Text>
                  </div>
                );
              }
              if (item.type === 'verbatim') {
                return (
                  <div className={styles.verbatimContainer} key={item.id}>
                    <Text verbatimMobile>
                      <Markdown options={{ forceInline: true }}>{item.text}</Markdown>
                    </Text>
                  </div>
                );
              }
            })}
          </div>
        ) : null}
      </div>
      {button !== null ? (
        <div className={styles.button}>
          <button className="button" href={button.link}>
            {button.label}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DuoMobile;
