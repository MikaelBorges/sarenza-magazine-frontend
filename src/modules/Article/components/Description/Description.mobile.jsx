import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './Description.mobile.module.scss';

const DescriptionMobile = ({ author, publishDate, updateDate }) => {
  return (
    <div className={styles.rightBlock}>
      <Text medium secondary>
        {author} - Publié le {publishDate}
      </Text>
      <Text>mis à jour le {updateDate}</Text>
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
