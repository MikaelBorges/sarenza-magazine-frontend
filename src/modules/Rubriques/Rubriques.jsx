import PropTypes from 'prop-types';
import React from 'react';

import Text from '@/components/commons/Text/Text';
import Query from '@/components/Query';

import Articles from './components/Articles/Articles';
import MainComponent from './components/Articles/MainComponent/MainComponent';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import processToHome from './model/Rubrique';

const Home = ({ query, rubriqueName }) => {
  return (
    <Query query={query} processTo={processToHome} params={{ rubriqueName }}>
      {(data) => {
        return (
          <div>
            <div>
              <Header header={data.header} />
            </div>
            <div>
              <Headline />
            </div>
            <div>
              <MainComponent article={data.firstArticle} />
            </div>
            <div>
              <Text marquee>{data.animateTexts[0].text}</Text>
            </div>
            <div>
              <Articles articles={data.articles.slice(0, 5)} position={1} />
            </div>
            <div>TODO: DISPLAY COMPONENT</div>
            <div>
              <Articles articles={data.articles.slice(0, 5)} position={2} />
            </div>
            <div>
              <Text marquee>{data.animateTexts[0].text}</Text>
            </div>
          </div>
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
