import Articles from 'modules/Article/Article';
import { useRouter } from 'next/router';
import React from 'react';

const Article = () => {
  const { query } = useRouter();

  return (
    <div>
      <Articles rubrique={query.rubriqueName} slug={query.slug} />
    </div>
  );
};

export default Article;
