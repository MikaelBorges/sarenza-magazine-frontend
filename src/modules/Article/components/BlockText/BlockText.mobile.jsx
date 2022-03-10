/* eslint-disable react/button-has-type */

import Markdown from 'markdown-to-jsx';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './BlockText.mobile.module.scss';

const BlockTextMobile = ({ Texte, title, urlButton, textButton, verbatim }) => {
  const textVerbatim = verbatim;

  return (
    <div className={styles.blockText}>
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <h2 className={styles.huge}>{title}</h2>
        </div>
        <div className={styles.paragraph}>
          <div>
            <Markdown options={{ forceInline: false }}>{Texte}</Markdown>
          </div>
        </div>
      </div>
      {textVerbatim && (
        <div className={styles.verbatimBlockTextMobile}>
          <Markdown options={{ forceInline: false }}>{textVerbatim}</Markdown>
        </div>
      )}
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
