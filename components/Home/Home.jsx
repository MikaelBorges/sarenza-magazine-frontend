import PropTypes from 'prop-types';
import React from 'react';

import { Row } from '@/components/commons/Grid';
import Col from '@/components/commons/Grid/Col';
import Query from '@/components/Query';

import Articles from './components/Articles/Articles';
import MainComponent from './components/Articles/MainComponent/MainComponent';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import processToHome from './model/Home';

const Home = ({ query, rubriqueName }) => {
  return (
    <Query query={query} processTo={processToHome} params={{ rubriqueName }}>
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

Home.propTypes = {
  rubriqueName: PropTypes.string,
  query: PropTypes.string
};

Home.defaultProps = {
  rubriqueName: '',
  query: ''
};
export default Home;
