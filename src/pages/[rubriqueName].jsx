import { useRouter } from 'next/router';
import React from 'react';

import { HOME_QUERY } from '../apollo/queries/home/homeQuery';
import Home from '../modules/Home/Home';

const ArticleList = () => {
  const { query } = useRouter();
  return (
    <div className="layout">
      <Home rubriqueName={query.rubriqueName} query={HOME_QUERY} />
    </div>
  );
};

export default ArticleList;
