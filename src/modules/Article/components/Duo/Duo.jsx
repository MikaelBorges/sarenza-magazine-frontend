import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './Duo.module.scss';

const Duo = ({ title, text, urlImage }) => {
  return (
    <div className={styles.container}>
      <img src={urlImage} alt="alt" className={styles.image} />
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <Text huge secondary>
            {title}
          </Text>
        </div>
        <div className={styles.paragraph}>
          <Text big>{text}</Text>
        </div>
        {/* <div className={styles.verbatim}>
          <Text verbatim>
            fort de nouvelles légendes, le mythe Nike Air continue de briller aux pieds.
          </Text>
        </div> */}
      </div>
    </div>
  );
};

Duo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  urlImage: PropTypes.string
};

Duo.defaultProps = {
  title: '',
  text: '',
  urlImage: ''
};

export default Duo;
