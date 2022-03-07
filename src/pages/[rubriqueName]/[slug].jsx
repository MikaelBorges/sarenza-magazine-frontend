import Articles from 'modules/Article/Article';
import ArticlesMobile from 'modules/Article/Article.mobile';
import { ArticleModel, ArticlesModel } from 'modules/Article/model/Article';
import Layout from 'modules/Layout/Layout';
import { getPageProps } from 'utils/getPageProps';
import constant from 'infrastructure/constant';
import ContextHelper from 'utils/ContextHelper';
import wrapper from 'app/store';
import { ARTICLES_QUERY_V4, ARTICLES_RECENT_QUERY_V4 } from 'apollo/queries/articles/articlesV4';
import { getApolloClient } from 'utils/apollo';
import qs from 'qs';
import { timeout } from 'utils/httpUtils';
import getConfig from 'next/config';

export default function Article({ article, menus, genders, footer, recentArticle, isMobile, seo }) {
  return (
    <Layout
      menus={menus}
      genders={genders}
      footer={footer}
      isMobile={isMobile}
      metaData={{
        title: article.title,
        description: `${seo.prefix}${article.title}`
      }}>
      {isMobile ? (
        <ArticlesMobile article={article} recentArticle={recentArticle} />
      ) : (
        <Articles article={article} recentArticle={recentArticle} />
      )}
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { slug, rubriqueName } = ctx.query;

  const ct = new ContextHelper(ctx);
  const isMobile = ct.context.device.mobile || false;

  const [article, recentArticle, { menus, genders, footer, seo }] = await Promise.all([
    getArticleBySlug(slug),
    getRecentArticle({ rubriqueName, slug }),
    getPageProps()
  ]);

  ctx.store.dispatch({ type: 'ARTICLE_SUCCESS', article });

  return {
    props: {
      article,
      recentArticle,
      menus,
      genders,
      footer,
      isMobile,
      seo
    }
  };
});

async function getArticleBySlug(slug) {
  const { serverRuntimeConfig } = getConfig();
  const apolloClient = getApolloClient();

  const { data } = await apolloClient.execQuery(
    { query: ARTICLES_QUERY_V4, variables: { slug } },
    { timeout: constant.home.timeout }
  );
  const article = ArticleModel(data.articles.data?.[0]);

  const query = qs.stringify(
    {
      populate: {
        //   rubriques: { populate: '*' },
        module: { populate: '*' }
      },
      filters: {
        url: {
          $eq: slug
        }
      }
    },
    {
      encodeValuesOnly: true
    }
  );
  const response = await timeout(
    constant.article.timeout,
    fetch(`${serverRuntimeConfig.API_URL}/api/articles?${query}`)
  ).catch((e) => {
    console.log(`Error getting article "${slug}"`, e);
    return { hasError: true };
  });
  const articlesRaw = await response.json();

  article.modules = articlesRaw.data?.[0]?.attributes?.module || null;

  return article;
}

async function getRecentArticle({ rubriqueName, slug }) {
  const apolloClient = getApolloClient();

  const { data: articles } = await apolloClient.execQuery(
    { query: ARTICLES_RECENT_QUERY_V4, variables: { rubriqueName, slug } },
    { timeout: constant.home.timeout }
  );
  const recentArticle = ArticlesModel(articles.articles.data);
  return recentArticle;
}
