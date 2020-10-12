import React from 'react';

import Col from '@/components/commons/Grid/Col';
import Row from '@/components/commons/Grid/Row';

import ArticleTitle from '../ArticleTitle/ArticleTitle';
import styles from './MainComponent.module.scss';

const MainComponent = ({ article }) => {
  return (
    <Row>
      <Col span={3} extraClasses={styles.content}>
        <ArticleTitle
          title={article.title}
          author={article.author}
          publishDate={article.publishDate}
        />
      </Col>
      <Col span={7}>
        <img src={article.image} className={styles.image} alt={article.title} />
      </Col>
    </Row>
  );
};

export default MainComponent;
