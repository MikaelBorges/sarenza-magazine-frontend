import React from 'react';

import Display from '@/components/commons/Display/Display';
import Marquee from '@/components/commons/Marquee/Marquee';
import Pagination from '@/components/commons/Pagination/Pagination';

import Articles from './components/Articles/Articles';
import MainComponent from './components/Articles/MainComponent/MainComponent';
import Header from './components/Header/Header';
import { useRouter } from 'next/router';

const Home = ({ data, isRubrique }) => {
  const { query } = useRouter();
  const onlyFirstPage = !query.page;
  return (
    <>
      <Header header={data.header} />
      {onlyFirstPage && <MainComponent article={data.firstArticle} isRubrique={isRubrique} />}
      {data.marqueeTop && onlyFirstPage && (
        <Marquee
          marquee={{
            fastAnimation: false,
            slowAnimation: false,
            text: data.marqueeTop.text
          }}
        />
      )}
      {data.articles && data.articles.slice(0, 5).length > 0 && (
        <Articles articles={data.articles.slice(0, 5)} position={1} />
      )}
      {data.displayFirst && onlyFirstPage && (
        <Display
          text={data.displayFirst.text}
          button={{
            label: data.displayFirst.button.label,
            url: data.displayFirst.button.link
          }}
          whiteTheme={data.displayFirst.whiteTheme}
        />
      )}
      {data.articles && data.articles.slice(5, 10).length > 0 && (
        <Articles articles={data.articles.slice(5, 10)} position={2} />
      )}
      {data.displaySecond &&
        onlyFirstPage &&
        data.displaySecond.text(
          <Display
            text={data.displaySecond.text}
            button={{
              label: data.displaySecond.button.label,
              url: data.displaySecond.button.link
            }}
            whiteTheme={data.displaySecond.whiteTheme}
          />
        )}
      {data.marquee && onlyFirstPage ? (
        <Marquee
          marquee={{
            fastAnimation: false,
            slowAnimation: false,
            text: data.marquee.text
          }}
          margin
        />
      ) : null}
      {data.articles && data.articles.slice(10, 12).length > 0 && (
        <Articles articles={data.articles.slice(10, 12)} position={1} />
      )}
      <Pagination totalRecords={data.numberArticles} pageLimit={12} isMobile={false} />
    </>
  );
};

export default Home;
