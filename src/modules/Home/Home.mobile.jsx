import PropTypes from 'prop-types';
import React from 'react';

import Display from '@/components/commons/Display/Display.mobile';
import Marquee from '@/components/commons/Marquee/Marquee.mobile';
import PaginationComponent from '@/components/commons/Pagination/components/PaginationComponent';
import Pagination from '@/components/commons/Pagination/Pagination';

import Articles from './components/Articles/Articles.mobile';
import MainComponent from './components/Articles/MainComponent/MainComponent.mobile';
import Header from './components/Header/Header.mobile';
import Breadcrumb from '@/components/commons/Breadcrumb/Breadcrumb';

import styles from './home.mobile.module.scss';


const Home = ({ data }) => {
  return (
    <Pagination
      data={data.articles}
      renderContent={(articles) => (
        <>
            <div className={styles.boxBreadcrumb}>
            <Breadcrumb
              breadcrumbs={[
                {
                  link: "http://localhost:3000/",
                  label: 'Retour',
                },
                {
                  link: 'https://www.sarenza.com',
                  label: 'Accueil',
                },
                {
                  link: 'http://localhost:3000/',
                  label: 'Magazine',
                }
              ]}
            />
          </div>
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
          <Articles articles={articles.slice(5, 10)} position={2} />
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
            />
          ) : null}
        </>
      )}
    />
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
