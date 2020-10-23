/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './Duo.mobile.module.scss';

const DuoMobile = ({ title, texts, urlImage, textButton, urlButton }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={urlImage} alt="alt" className={styles.image} />
      </div>
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <Text huge secondary>
            {title}
          </Text>
        </div>
        <div className={styles.paragraph}>
          {texts.map((item) => {
            if (item.type === 'text') {
              return (
                <div className={styles.textContainer}>
                  <Text big>{item.text}</Text>
                </div>
              );
            }
            if (item.type === 'verbatim')
              return (
                <div className={styles.verbatimContainer}>
                  <Text verbatimMobile>{item.text}</Text>
                </div>
              );
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

DuoMobile.propTypes = {
  title: PropTypes.string,
  texts: PropTypes.string,
  urlImage: PropTypes.string,
  textButton: PropTypes.string,
  urlButton: PropTypes.string
};

DuoMobile.defaultProps = {
  title: '',
  texts: '',
  urlImage: '',
  textButton: '',
  urlButton: ''
};

export default DuoMobile;