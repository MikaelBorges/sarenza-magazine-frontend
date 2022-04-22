import PropTypes from 'prop-types';
import React from 'react';

import Image from '@/components/commons/Image/Image';

import Description from '../Description/Description';
import styles from './Banner.module.scss';

const Banner = ({
  subTitleOptional,
  srcImage,
  altImage,
  subTitleBanner,
  author,
  publishDate,
  updateDate
}) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImage}>
        <Image src={srcImage} alt={altImage} />
      </div>
      <div className={styles.textContainer}>
        {subTitleOptional && (
          <h4 className={`title-level4 ${styles.optional}`}>{subTitleOptional}</h4>
        )}
        <div className={styles.description}>
          <div className={styles.hashTitle}>
            <h1 className={styles.secondary}>{subTitleBanner}</h1>
          </div>
          <Description author={author} publishDate={publishDate} updateDate={updateDate} />
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  author: PropTypes.string,
  publishDate: PropTypes.string,
  srcImage: PropTypes.string,
  altImage: PropTypes.string,
  subTitleBanner: PropTypes.string,
  subTitleOptional: PropTypes.string
};

Banner.defaultProps = {
  author: '',
  publishDate: '',
  srcImage: '',
  altImage: '',
  subTitleBanner: '',
  subTitleOptional: ''
};

export default Banner;
