/* eslint-disable react/button-has-type */
import Markdown from 'markdown-to-jsx';
import React from 'react';

import styles from './BlockText.module.scss';

const BlockText = ({ Texte, title, urlButton, textButton, positionVerbatim, verbatim }) => {
  const textVerbatim = verbatim;

  return (
    <div className={styles.blockText}>
      <div className={styles.textContainer}>
        <div
          className={`${styles.textPart} ${textVerbatim && styles.textPartOrdered} ${
            positionVerbatim && styles.textPartIsAfter
          }`}>
          <div className={styles.titleTextPart}>
            <h2 className={styles.huge}>
              {title}
            </h2>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.big}>
              <Markdown options={{ forceInline: false }}>{Texte}</Markdown>
            </div>
          </div>
        </div>
        {textVerbatim && (
          <div className={styles.verbatimContainer}>
            <div className={styles.verbatimBlockText}>
              <Markdown options={{ forceInline: false }}>{textVerbatim}</Markdown>
            </div>
          </div>
        )}
      </div>
      {textButton && (
        <div className={styles.button}>
          <button className="button" href={urlButton}>
            {textButton}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlockText;
