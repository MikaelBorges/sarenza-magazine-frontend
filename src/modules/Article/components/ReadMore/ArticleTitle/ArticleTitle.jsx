import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import style from './ArticleTitle.module.scss';

const ArticleTitle = ({ title, author, publishDate, size, position, firstArticle }) => {
  return (
    <>
      <div className={style.resume}>
        {(size < 2 && position === 1) || (size > 2 && position === 2) || firstArticle ? (
          <Text huge secondary>
            {parse(title)}
          </Text>
        ) : (
          <Text medium secondary>
            {parse(title)}
          </Text>
        )}
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
