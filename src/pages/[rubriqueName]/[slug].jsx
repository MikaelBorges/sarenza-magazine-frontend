import Articles from 'modules/Article/Article';
import ArticlesMobile from 'modules/Article/Articles.mobile';
import { useRouter } from 'next/router';
import React from 'react';

const Article = ({ isMobile }) => {
  const { query } = useRouter();
  const articleStore = {}

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



export async function getServerSideProps(ctx) {
  const { query } = ctx
  const containerProps = await initProps()

  return { props: { ...containerProps.props, data: await getArticle(query.slug) } }
}

export default Article;
