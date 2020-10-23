import Articles from 'modules/Article/Article';
import ArticlesMobile from 'modules/Article/Articles.mobile';
import { useRouter } from 'next/router';
import React from 'react';

const Article = ({ isMobile }) => {
  const { query } = useRouter();

  return (
    <div>
      {isMobile ? (
        <ArticlesMobile rubrique={query.rubriqueName} slug={query.slug} />
      ) : (
        <Articles rubrique={query.rubriqueName} slug={query.slug} />
      )}
    </div>
  );
};

export default Article;
