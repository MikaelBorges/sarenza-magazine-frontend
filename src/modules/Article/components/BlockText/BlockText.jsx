/* eslint-disable react/button-has-type */

import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './BlockText.module.scss';

const BlockText = ({ title, text, textVerbatim, textPartIsAfter, textButton, urlButton }) => {
  return (
    <div className={styles.blockText}>
      <div className={styles.textContainer}>
        <div
          className={`${styles.textPart} ${textVerbatim && styles.textPartOrdered} ${
            textPartIsAfter && styles.textPartIsAfter
          }`}>
          <div className={styles.titleTextPart}>
            <Text huge secondary>
              {title}
            </Text>
          </div>
          <div className={styles.paragraph}>
            <Text big>{text}</Text>
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

BlockText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  textButton: PropTypes.string,
  urlButton: PropTypes.string,
  textVerbatim: PropTypes.string,
  textPartIsAfter: PropTypes.bool
};

BlockText.defaultProps = {
  title: '',
  text: '',
  textButton: '',
  urlButton: '',
  textVerbatim: '',
  textPartIsAfter: false
};

export default BlockText;
