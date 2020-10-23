import { useRouter } from 'next/router';
import React from 'react';

import { HOME_QUERY } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';
import HomeMobile from '../modules/Home/Home.mobile';

const ArticleList = ({ isMobile }) => {
  const { query } = useRouter();
  return (
    <div className="layout">
      {isMobile ? (
        <HomeMobile rubriqueName={query.rubriqueName} query={HOME_QUERY} />
      ) : (
        <Home rubriqueName={query.rubriqueName} query={HOME_QUERY} />
      )}
    </div>
  );
};

export default ArticleList;
