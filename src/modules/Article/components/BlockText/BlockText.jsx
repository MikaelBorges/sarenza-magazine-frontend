import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './BlockText.module.scss';

const BlockText = ({ title, text }) => {
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
    </div>
  );
};

BlockText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

BlockText.defaultProps = {
  title: '',
  text: ''
};

export default BlockText;
