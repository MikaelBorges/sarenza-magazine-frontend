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
      {data.header && <Header header={data.header} />}
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
      {data.articles.slice(0, 5).length > 0 && (
        <Articles articles={data.articles.slice(0, 5)} position={1} />
      )}
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
      {data.articles.slice(5, 10).length > 0 && (
        <Articles articles={data.articles.slice(5, 10)} position={2} />
      )}
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
      {data.marquee && (
        <Marquee
          marquee={{
            fastAnimation: false,
            slowAnimation: false,
            text: data.marquee.text
          }}
        />
      )}
      <Articles articles={data.articles.slice(10, 12)} position={1} />
      <Pagination totalRecords={data.numberArticles} pageLimit={12} isMobile={true} />
    </>
  );
};

export default Home;
