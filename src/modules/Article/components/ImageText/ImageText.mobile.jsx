/* eslint-disable camelcase */

import PropTypes from 'prop-types';
import React from 'react';

import Image from '@/components/commons/Image/Image';
import Text from '@/components/commons/Text';

import styles from './ImageText.module.scss';

const ImageText = ({ title, paragraphes, url_mobile, alt }) => {
  return title || paragraphes || url_mobile ? (
    <div className={styles.container}>
      <div className={styles.item}>
        {title && (
          <Text huge secondary>
            {title}
          </Text>
        )}
        {paragraphes &&
          paragraphes.map((paragraph) => {
            return (
              <div className={styles.paragraph} key={paragraph.id}>
                <Text big={!paragraph.verbatim} verbatim={paragraph.verbatim}>
                  {paragraph.text}
                </Text>
              </div>
            );
          })}
      </div>
      {url_mobile && (
        <div className={styles.item}>
          <Image src={url_mobile} alt={alt} />
        </div>
      )}
    </div>
  ) : null;
};
ImageText.propTypes = {
  title: PropTypes.string,
  paragraphes: PropTypes.arrayOf(
    PropTypes.shape({
      verbatim: PropTypes.bool,
      text: PropTypes.string
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })
};

ImageText.defaultProps = {
  title: '',
  paragraphes: [],
  image: {}
};
export default ImageText;
