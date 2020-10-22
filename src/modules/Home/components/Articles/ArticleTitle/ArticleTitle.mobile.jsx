import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import style from './ArticleTitle.mobile.module.scss';

const ArticleTitle = ({ title, author, publishDate }) => {
  return (
    <>
      <div className={style.resume}>
        <Text huge secondary>
          {parse(title)}
        </Text>
      </div>
      <div className={style.author}>
        <Text small>
          {author} - {publishDate}
        </Text>
      </div>
    </>
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
