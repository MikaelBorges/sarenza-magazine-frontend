import React, {useEffect, useRef} from 'react';

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
        <Articles articles={data.articles.slice(0, 5)} position={1} firstArticle={data.firstArticle}/>
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
      {data.articles && data.articles.slice(10, 15).length > 0 && (
        <Articles articles={data.articles.slice(10, 15)} position={1} />
      )}
      {data.articles && data.articles.slice(15, 20).length > 0 && (
        <Articles articles={data.articles.slice(15, 20)} position={2} />
      )}
      {data.articles && data.articles.slice(20, 25).length > 0 && (
        <Articles articles={data.articles.slice(20, 25)} position={1} />
      )}
      {data.articles && data.articles.slice(25, 30).length > 0 && (
        <Articles articles={data.articles.slice(25, 30)} position={2} />
      )}
      {data.articles && data.articles.slice(30, 35).length > 0 && (
        <Articles articles={data.articles.slice(30, 35)} position={1} />
      )}
      {data.articles && data.articles.slice(35, 40).length > 0 && (
        <Articles articles={data.articles.slice(35, 40)} position={2} />
      )}
      {data.articles && data.articles.slice(40, 45).length > 0 && (
        <Articles articles={data.articles.slice(40, 45)} position={2} />
      )}
      {data.articles && data.articles.slice(45, 50).length > 0 && (
        <Articles articles={data.articles.slice(45, 50)} position={2} />
      )}
       {data.articles && data.articles.slice(50, 55).length > 0 && (
        <Articles articles={data.articles.slice(50, 55)} position={2} />
      )}
       {data.articles && data.articles.slice(55, 60).length > 0 && (
        <Articles articles={data.articles.slice(55, 60)} position={2} />
      )}
         {data.articles && data.articles.slice(60, 65).length > 0 && (
        <Articles articles={data.articles.slice(60, 65)} position={2} />
      )}
       {data.articles && data.articles.slice(65, 70).length > 0 && (
        <Articles articles={data.articles.slice(65, 70)} position={2} />
      )}
       {data.articles && data.articles.slice(70, 75).length > 0 && (
        <Articles articles={data.articles.slice(70, 75)} position={2} />
      )}
       {data.articles && data.articles.slice(75, 80).length > 0 && (
        <Articles articles={data.articles.slice(75, 80)} position={2} />
      )}
    </>
  );
};

export default Home;
