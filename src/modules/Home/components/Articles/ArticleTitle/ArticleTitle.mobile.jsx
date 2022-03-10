import PropTypes from 'prop-types';
import React from 'react';

import style from './ArticleTitle.mobile.module.scss';

const ArticleTitle = ({ title, author, publishDate }) => {
  return (
    <>
      <div className={style.resume}>
        <h2 className={style.huge}>{title}</h2>
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
