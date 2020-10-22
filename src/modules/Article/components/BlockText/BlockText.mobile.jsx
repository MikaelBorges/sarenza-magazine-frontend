/* eslint-disable react/button-has-type */

import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './BlockText.mobile.module.scss';

const BlockTextMobile = ({ title, text, textVerbatim, textButton, urlButton }) => {
  return (
    <div className={styles.blockText}>
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <Text huge secondary>
            {title}
          </Text>
        </div>
        <div className={styles.paragraph}>
          <Text big>{text}</Text>
        </div>
      </div>
      {textVerbatim && <Text verbatimBlockTextMobile>{textVerbatim}</Text>}
      <div className={styles.button}>
        <button className="button" href={urlButton}>
          {textButton}
        </button>
      </div>
    </div>
  );
};

BlockTextMobile.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  textButton: PropTypes.string,
  urlButton: PropTypes.string,
  textVerbatim: PropTypes.string
};

BlockTextMobile.defaultProps = {
  title: '',
  text: '',
  textButton: '',
  urlButton: '',
  textVerbatim: ''
};

export default BlockTextMobile;
