import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import styles from './Description.module.scss';

const Description = ({ author, publishDate, updateDate }) => {
  return (
    <div className={styles.rightBlock}>
      <Text medium secondary author>
        {author} - Publié le {publishDate}
      </Text>
      <Text>mis à jour le {updateDate}</Text>
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
