import PropTypes from 'prop-types';
import React from 'react';

import styles from './Description.mobile.module.scss';

const DescriptionMobile = ({ author, publishDate, updateDate }) => {
  return (
    <div className={styles.rightBlock}>
      <p className={styles.author}>
        {author} - Publié le {publishDate}
      </p>
      {updateDate !== publishDate ? <span>mis à jour le {updateDate}</span> : null}
    </div>
  );
};

DescriptionMobile.propTypes = {
  author: PropTypes.string,
  publishDate: PropTypes.string,
  updateDate: PropTypes.string
};

DescriptionMobile.defaultProps = {
  author: '',
  publishDate: '',
  updateDate: ''
};

export default DescriptionMobile;
