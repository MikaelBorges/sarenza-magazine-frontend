import React from 'react';

import { Row } from '@/components/commons/Grid';
import Col from '@/components/commons/Grid/Col';
import Query from '@/components/Query';

import HOME_QUERY from '../../apollo/queries/home/homeQuery';
import Articles from './components/Articles/Articles';
import MainComponent from './components/Articles/MainComponent/MainComponent';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import processToHome from './model/Home';

const Home = () => {
  return (
    <Query query={HOME_QUERY} processTo={processToHome}>
      {(data) => {
        return (
          <Row>
            <Col span={12} offset={12}>
              <Header header={data.header} />
            </Col>
            <Col span={12}>
              <Headline />
            </Col>
            <Col span={12} offset={12}>
              <MainComponent article={data.firstArticle} />
            </Col>
            <Col span={12} offset={12}>
              <Articles articles={data.articles.slice(0, 5)} />
            </Col>
          </Row>
        );
      }}
    </Query>
  );
};

export default Home;
