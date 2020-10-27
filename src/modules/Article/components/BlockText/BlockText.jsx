/* eslint-disable react/button-has-type */
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './BlockText.module.scss';
import { replaceByJsx } from 'modules/Article/utils';

const BlockText = ({ paragraph, title, urlButton, textButton, positionVerbatim }) => {
  const textVerbatim = replaceByJsx(paragraph).find((item) => item.type === 'verbatim').text;

  return (
    <div className={styles.blockText}>
      <div className={styles.textContainer}>
        <div
          className={`${styles.textPart} ${textVerbatim && styles.textPartOrdered} ${
            positionVerbatim && styles.textPartIsAfter
          }`}>
          <div className={styles.titleTextPart}>
            <Text huge secondary>
              {title}
            </Text>
          </div>
          <div className={styles.paragraph}>
            <Text big>{paragraph}</Text>
          </div>
        </div>
        {textVerbatim && (
          <div className={styles.verbatimContainer}>
            <Text verbatimBlockText>{textVerbatim}</Text>
          </div>
        )}
      </div>
      <div className={styles.button}>
        <button className="button" href={urlButton}>
          {textButton}
        </button>
      </div>
    </div>
  );
};

export default BlockText;
