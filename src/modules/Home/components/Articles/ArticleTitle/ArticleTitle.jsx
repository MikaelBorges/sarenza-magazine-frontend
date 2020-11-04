/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';

import style from './ArticleTitle.module.scss';

const ArticleTitle = ({ title, author, publishDate, size, position, firstArticle }) => {
  return (
    <>
      <div className={style.resume}>
        {(size < 2 && position === 1) || (size > 2 && position === 2) || firstArticle ? (
          firstArticle ? (
            <Text first>{title}</Text>
          ) : (
            <Text huge secondary>
              {title}
            </Text>
          )
        ) : (
          <Text medium secondary>
            {title}
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
