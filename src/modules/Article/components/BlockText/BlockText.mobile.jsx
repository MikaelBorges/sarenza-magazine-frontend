/* eslint-disable react/button-has-type */

import React from 'react';
import styles from './BlockText.mobile.module.scss';
import Text from '@/components/commons/Text/Text';

const BlockTextMobile = ({ Texte, title, urlButton, textButton, positionVerbatim, verbatim }) => {
  const textVerbatim = verbatim;

  return (
    <div className={styles.blockText}>
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <Text huge secondary>
            {title}
          </Text>
        </div>
        <div className={styles.paragraph}>
          <Text big>{Texte}</Text>
        </div>
      </div>
      {textVerbatim && <Text verbatimBlockTextMobile>{textVerbatim}</Text>}
      {urlButton && (
        <div className={styles.button}>
          <button className="button" href={urlButton}>
            {textButton}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlockTextMobile;
