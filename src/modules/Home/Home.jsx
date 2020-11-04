import React from 'react';

import Display from '@/components/commons/Display/Display';
import Marquee from '@/components/commons/Marquee/Marquee';
import PaginationComponent from '@/components/commons/Pagination/components/PaginationComponent';
import Pagination from '@/components/commons/Pagination/Pagination';

import Articles from './components/Articles/Articles';
import MainComponent from './components/Articles/MainComponent/MainComponent';
import Header from './components/Header/Header';

const Home = ({ data }) => {
  return (
    <Pagination
      data={data.articles}
      renderContent={(articles) => (
        <>
          <Header header={data.header} />
          <MainComponent article={data.firstArticle} />
          {data.marqueeTop !== null ? (
            <Marquee
              marquee={{
                fastAnimation: false,
                slowAnimation: false,
                text: data.marqueeTop[0].text
              }}
            />
          ) : null}

          <Articles articles={articles.slice(0, 5)} position={1} />
          {data.displayFirst !== undefined && data.displayFirst !== null ? (
            <Display
              text={data.displayFirst.text}
              button={{
                label: data.displayFirst.button.label,
                url: data.displayFirst.button.link
              }}
              whiteTheme={data.displayFirst.whiteTheme}
            />
          ) : null}

          <Articles articles={articles.slice(5, 10)} position={2} />
          {data.displaySecond !== undefined && data.displaySecond !== null ? (
            <Display
              text={data.displaySecond.text}
              button={{
                label: data.displaySecond.button.label,
                url: data.displaySecond.button.link
              }}
              whiteTheme={data.displaySecond.whiteTheme}
            />
          ) : null}
          {data.marquee !== null ? (
            <Marquee
              marquee={{
                fastAnimation: false,
                slowAnimation: false,
                text: data.marquee[0].text
              }}
              margin
            />
          ) : null}
          <Articles articles={articles.slice(10, 12)} position={1} />
        </>
      )}
      renderFooter={(dataCast, params) => <PaginationComponent params={params} />}
    />
  );
};

export default Home;
