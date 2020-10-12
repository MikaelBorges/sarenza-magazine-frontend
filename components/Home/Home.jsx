import PropTypes from 'prop-types';
import React from 'react';

import Box from '@/components/commons/Box/Box';
import { Row } from '@/components/commons/Grid';
import Col from '@/components/commons/Grid/Col';
import PaginationComponent from '@/components/commons/Pagination/components/PaginationComponent';
import Pagination from '@/components/commons/Pagination/Pagination';
import Text from '@/components/commons/Text/Text';
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
          <Pagination
            data={data.articles}
            renderContent={(articles) => (
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
                <Col span={12}>
                  <Text marquee>{data.animateTexts[0].text}</Text>
                </Col>
                <Col span={12} offset={12}>
                  <Articles articles={articles.slice(0, 5)} position={1} />
                </Col>
                <Col span={12} offset={12}>
                  <Box> TODO: DISPLAY COMPONENT </Box>
                </Col>
                <Col span={12} offset={12}>
                  <Articles articles={articles.slice(0, 5)} position={2} />
                </Col>
                <Col span={12}>
                  <Text marquee>{data.animateTexts[0].text}</Text>
                </Col>
              </Row>
            )}
            renderFooter={(articles, param) => {
              return (
                articles && (
                  <PaginationComponent
                    data={articles.map((item) => ({ label: item.name, value: item.id }))}
                    params={param}
                  />
                )
              );
            }}
          />
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
