import React from 'react';

import Display from '@/components/commons/Display/Display.mobile';
import Marquee from '@/components/commons/Marquee/Marquee.mobile';
import Pagination from '@/components/commons/Pagination/Pagination';

import Articles from './components/Articles/Articles.mobile';
import MainComponent from './components/Articles/MainComponent/MainComponent.mobile';
import Header from './components/Header/Header.mobile';

const Home = ({ data }) => {
  return (
    <>
      {data && (
        <Pagination
          data={data.articles}
          renderContent={(articles) => (
            <>
              <Header header={data.header} />
              <MainComponent article={data.firstArticle} />
              {data.marqueeTop && (
                <Marquee
                  marquee={{
                    fastAnimation: false,
                    slowAnimation: false,
                    text: data.marqueeTop.text
                  }}
                />
              )}
              <Articles articles={articles.slice(0, 5)} position={1} />
              {data.displayFirst && (
                <Display
                  text={data.displayFirst.text}
                  button={
                    data.displayFirst.button && {
                      label: data.displayFirst.button.label,
                      url: data.displayFirst.button.link
                    }
                  }
                  whiteTheme={data.displayFirst.whiteTheme}
                />
              )}
              <Articles articles={articles.slice(5, 10)} position={2} />
              {data.displaySecond && (
                <Display
                  text={data.displaySecond.text}
                  button={
                    data.displaySecond.button && {
                      label: data.displaySecond.button.label,
                      url: data.displaySecond.button.link
                    }
                  }
                  whiteTheme={data.displaySecond.whiteTheme}
                />
              )}
              {data.marquee && data.marquee.length > 0 && (
                <Marquee
                  marquee={{
                    fastAnimation: false,
                    slowAnimation: false,
                    text: data.marquee.text
                  }}
                />
              )}
            </>
          )}
        />
      )}
    </>
  );
};

export default Home;
