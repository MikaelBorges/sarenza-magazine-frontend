import PropTypes from 'prop-types';
import React from 'react';

import Image from '@/components/commons/Image/Image';

import Description from '../Description/Description.mobile';
import styles from './Banner.mobile.module.scss';

const BannerMobile = ({
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
      {subTitleOptional && (
        <h4 className={`title-level4 ${styles.optional}`}>{subTitleOptional}</h4>
      )}
      <div className={styles.description}>
        <div className={styles.hashTitle}>
          <h1 className={styles.huge}>
            {subTitleBanner}
          </h1>
        </div>
        <Description author={author} publishDate={publishDate} updateDate={updateDate} />
      </div>
    </div>
  );
};

BannerMobile.propTypes = {
  author: PropTypes.string,
  publishDate: PropTypes.string,
  srcImage: PropTypes.string,
  altImage: PropTypes.string,
  subTitleBanner: PropTypes.string,
  subTitleOptional: PropTypes.string
};

BannerMobile.defaultProps = {
  author: '',
  publishDate: '',
  srcImage: '',
  altImage: '',
  subTitleBanner: '',
  subTitleOptional: ''
};

export default BannerMobile;
