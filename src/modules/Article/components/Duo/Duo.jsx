/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './Duo.module.scss';

const Duo = ({ title, texts, urlImage, textButton, urlButton }) => {
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
          {texts.map((item) => {
            if (item.type === 'text') {
              return <Text big>{item.text}</Text>;
            }
            if (item.type === 'verbatim') {
              return (
                <div className={styles.verbatimContainer}>
                  <Text verbatim>{item.text}</Text>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.button}>
        <button className="button" href={urlButton}>
          {textButton}
        </button>
      </div>
    </div>
  );
};

Duo.propTypes = {
  title: PropTypes.string,
  texts: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  urlImage: PropTypes.string,
  textButton: PropTypes.string,
  urlButton: PropTypes.string
};

Duo.defaultProps = {
  title: '',
  texts: [],
  urlImage: '',
  textButton: '',
  urlButton: ''
};

export default Duo;
