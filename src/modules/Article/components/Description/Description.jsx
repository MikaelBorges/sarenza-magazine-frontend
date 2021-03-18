import PropTypes from 'prop-types';
import React from 'react';

import styles from './Description.module.scss';

const Description = ({ author, publishDate, updateDate }) => {
  return (
    <div className={styles.rightBlock}>
      <p className={styles.author}>
        {author} - Publié le {publishDate.split("-").reverse().join("-").replace(/\b(\d{1})\b/g, '0$1')}
      </p>
      {updateDate !== publishDate ? <span>mis à jour le {updateDate.split("-").reverse().join("-").replace(/\b(\d{1})\b/g, '0$1')}</span> : null}
    </div>
  );
};

Description.propTypes = {
  author: PropTypes.string,
  publishDate: PropTypes.string,
  updateDate: PropTypes.string
};

Description.defaultProps = {
  author: '',
  publishDate: '',
  updateDate: ''
};

export default Description;
