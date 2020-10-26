import Articles from 'modules/Article/Article';
import { useRouter } from 'next/router';
import React from 'react';

import ReduxContainer, { initProps } from "@/helper/ReduxContainer"

const getArticle = async (slug) => {
  return fetch(`${process.env.API_URL}/articles/?url=${slug}`)
    .then((res) => res.json())
    .then((result) => {
      return result
    });
};

const Article = (props) => {
  const { query } = useRouter();
  const articleStore = {}

  return (
    <>
      <ReduxContainer store={articleStore} pageProps={props}>
        <Articles rubrique={query.rubriqueName} slug={query.slug} data />
      </ReduxContainer>
    </>
  );
};



export async function getServerSideProps(ctx) {
  const { query } = ctx
  const containerProps = await initProps()

  return { props: { ...containerProps.props, data: await getArticle(query.slug) } }
}

export default Article;
