import Home from 'modules/Rubriques/Rubriques';
import { useRouter } from 'next/router';
import React from 'react';

import { HOME_QUERY } from '../apollo/queries/home/homeQuery';

const ArticleList = () => {
  const { query } = useRouter();
  return (
    <div className="layout">
      <Home rubriqueName={query.rubriqueName} query={HOME_QUERY} />
    </div>
  );
};

export default ArticleList;
