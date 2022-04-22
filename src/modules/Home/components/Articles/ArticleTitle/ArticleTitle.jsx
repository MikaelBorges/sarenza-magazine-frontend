/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React from 'react';

import style from './ArticleTitle.module.scss';

const ArticleTitle = ({ title, author, publishDate, size, position, firstArticle }) => {
  return (
    <>
      <div className={style.resume}>
        {(size < 2 && position === 1) || (size > 2 && position === 2) || firstArticle ? (
          firstArticle ? (
            <h2 className={style.first}>{title}</h2>
          ) : (
            <h2 className={style.huge}>{title}</h2>
          )
        ) : (
          <h2 className={style.medium}>{title}</h2>
        )}
      </div>
      <div className={style.author}>
        <p className={style.small}>
          {author} - {publishDate}
        </p>
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
