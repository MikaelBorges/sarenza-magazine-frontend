import PropTypes from 'prop-types';
import React from 'react';

import Image from '@/components/commons/Image/Image';
import Text from '@/components/commons/Text/Text';

import Description from '../Description/Description';
import styles from './Banner.module.scss';

const Banner = ({ srcImage, altImage, subTitleBanner, author, publishDate, updateDate }) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImage}>
        <Image src={srcImage} alt={altImage} />
      </div>
      <div className={styles.description}>
        <div className={styles.hashTitle}>
          <Text secondary>{subTitleBanner}</Text>
        </div>
        <Description author={author} publishDate={publishDate} updateDate={updateDate} />
      </div>
    </div>
  );
};

Banner.propTypes = {
  author: PropTypes.string,
  publishDate: PropTypes.string,
  srcImage: PropTypes.string,
  altImage: PropTypes.string,
  subTitleBanner: PropTypes.string
};

Banner.defaultProps = {
  author: '',
  publishDate: '',
  srcImage: '',
  altImage: '',
  subTitleBanner: ''
};

export default Banner;
