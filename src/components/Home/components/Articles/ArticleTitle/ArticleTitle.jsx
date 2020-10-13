import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

const ArticleTitle = ({ title, author, publishDate }) => {
  return (
    <div>
      <Text huge secondary>
        {title}
      </Text>
      <Text small>
        {author} - {publishDate}
      </Text>
    </div>
  );
};

ArticleTitle.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publishDate: PropTypes.string
};

ArticleTitle.defaultProps = {
  title: '',
  author: '',
  publishDate: ''
};

export default ArticleTitle;
