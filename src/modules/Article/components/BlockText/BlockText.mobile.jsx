/* eslint-disable react/button-has-type */

import React from 'react';
import Markdown from 'markdown-to-jsx'
import styles from './BlockText.mobile.module.scss';
import Text from '@/components/commons/Text/Text';
import { replaceByJsx } from 'modules/Article/utils';

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
          <Text big><Markdown  options={{ forceInline: true }}>{Texte}</Markdown></Text>
        </div>
      </div>
      {textVerbatim && <Text verbatimBlockTextMobile><Markdown  options={{ forceInline: true }}>{textVerbatim}</Markdown></Text>}
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
