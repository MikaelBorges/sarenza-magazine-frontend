import PropTypes from 'prop-types';
import React from 'react';

import Col from '@/components/commons/Grid/Col';
import Row from '@/components/commons/Grid/Row';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './ArticleItem.module.scss';

const ArticleItem = ({ article }) => {
  return (
    <Row>
      <Col span={12}>
        <img src={article.image} className={styles.image} alt={article.title} />
      </Col>
      <Col span={12}>
        <ArticleTitle
          title={article.title}
          author={article.author}
          publishDate={article.publishDate}
        />
      </Col>
    </Row>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    publishDate: PropTypes.string
  })
};

ArticleItem.defaultProps = {
  article: {}
};

export default ArticleItem;
