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
                text: data.marqueeTop.MarqueeComponent[0].text
              }}
            />
          ) : null}

          <Articles articles={articles.slice(0, 5)} position={1} />
          <Display
            text={data.displayFirst.Display.text}
            button={{
              label: data.displayFirst.Display.button.label,
              url: data.displayFirst.Display.button.link
            }}
            whiteTheme={data.displayFirst.Display.whiteTheme}
          />
          <Articles articles={articles.slice(0, 5)} position={2} />
          <Display
            text={data.displaySecond.Display.text}
            button={{
              label: data.displaySecond.Display.button.label,
              url: data.displaySecond.Display.button.link
            }}
            whiteTheme={data.displaySecond.Display.whiteTheme}
          />
          {data.marquee !== null ? (
            <Marquee
              marquee={{
                fastAnimation: false,
                slowAnimation: false,
                text: data.marquee.MarqueeComponent[0].text
              }}
              margin
            />
          ) : null}
        </>
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
};

export default Home;
