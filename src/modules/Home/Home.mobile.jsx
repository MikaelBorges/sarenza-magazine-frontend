import React from 'react';

import Display from '@/components/commons/Display/Display.mobile';
import Marquee from '@/components/commons/Marquee/Marquee.mobile';
import Pagination from '@/components/commons/Pagination/Pagination';

import Articles from './components/Articles/Articles.mobile';
import MainComponent from './components/Articles/MainComponent/MainComponent.mobile';
import Header from './components/Header/Header.mobile';
import { useRouter } from 'next/router';

const Home = ({ data }) => {
  const { query } = useRouter();
  const onlyFirstPage = !query.page;
  return (
    <>
      {data.header && <Header header={data.header} />}
      {onlyFirstPage && <MainComponent article={data.firstArticle} />}
      {data.marqueeTop && onlyFirstPage && (
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
      {data.displayFirst && onlyFirstPage && (
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
      {data.articles.slice(5, 12).length > 0 && (
        <Articles articles={data.articles.slice(5, 12)} position={2} />
      )}
      {data.displaySecond && onlyFirstPage && (
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
      {data.marquee && onlyFirstPage && (
        <Marquee
          marquee={{
            fastAnimation: false,
            slowAnimation: false,
            text: data.marquee.text
          }}
        />
      )}
      <Pagination totalRecords={data.numberArticles} pageLimit={12} isMobile={true} />
    </>
  );
};

export default Home;
