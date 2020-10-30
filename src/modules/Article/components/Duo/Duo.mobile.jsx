/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import PropTypes from 'prop-types';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import parse from 'html-react-parser';

import Text from '@/components/commons/Text/Text';

import styles from './Duo.mobile.module.scss';
import { replaceByJsx } from 'modules/Article/utils';

const DuoMobile = ({ duo_image, title, duo_paragraphe, button }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={duo_image.url} alt="alt" className={styles.image} />
      </div>
      <div className={styles.textPart}>
        <div className={styles.titleTextPart}>
          <Text huge secondary>
            {parse(title)}
          </Text>
        </div>
        {duo_paragraphe !== null ? (
          <div className={styles.paragraph}>
            {replaceByJsx(duo_paragraphe).map((item) => {
              if (item.type === 'text') {
                return (
                  <div className={styles.textContainer} key={item.id}>
                    <Text big><Markdown  options={{ forceInline: true }}>{item.text}</Markdown></Text>
                  </div>
                );
              }
              if (item.type === 'verbatim') {
                return (
                  <div className={styles.verbatimContainer} key={item.id}>
                    <Text verbatimMobile><Markdown  options={{ forceInline: true }}>{item.text}</Markdown></Text>
                  </div>
                );
              }
            })}
          </div>
        ) : null}
      </div>
      {button !== null ? (
        <div className={styles.button}>
          <button className="button" href={button.link}>
            {button.label}
          </button>
        </div>
      ) : null}
    </div>
  );
};

DuoMobile.propTypes = {
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

DuoMobile.defaultProps = {
  title: '',
  texts: [],
  urlImage: '',
  textButton: '',
  urlButton: ''
};

export default DuoMobile;
