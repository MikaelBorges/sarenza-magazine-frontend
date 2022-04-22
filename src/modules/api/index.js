import { ARTICLES_QUERY_V4, ARTICLES_RECENT_QUERY_V4 } from 'apollo/queries/articles/articlesV4';
import { PAGE_PROPS_QUERY_V4 } from 'apollo/queries/common/commonQuery';
import { HOME_QUERY_ALL_V4, HOME_QUERY_RUBRIQUE_V4 } from 'apollo/queries/home/homeQueryV4';
import { ArticleModel, ArticlesModel } from 'modules/Article/model/Article';
import toFooter from 'modules/Footer/model/footer';
import processToHome from 'modules/Home/model/Home';
import toSeo from 'modules/Layout/model/seo';
import toGenders from 'modules/Menu//model/genders';
import toMenus from 'modules/Menu/model/menu';
import getConfig from 'next/config';
import qs from 'qs';
import { getApolloClient } from 'utils/apollo';
import constant from 'utils/constant';
import { timeout } from 'utils/httpUtils';

export async function getHomeData({ limit, start, page }) {
  const { data, error } = await getApolloClient().execQuery(
    {
      query: HOME_QUERY_ALL_V4,
      variables: { limit, start }
    },
    { timeout: constant.home.timeout }
  );

  const homeData = data ? processToHome(data, undefined, page) : null;
  return { homeData, error };
}

export async function getRubriques({ rubriqueName, limit, start, page }) {
  const { data, error } = await getApolloClient().execQuery(
    { query: HOME_QUERY_RUBRIQUE_V4, variables: { rubriqueName, limit, start } },
    { timeout: constant.home.timeout }
  );
  const rubriques = data ? processToHome(data, rubriqueName, page) : null;

  return { rubriques, error };
}

export async function getArticleBySlug(slug) {
  const { serverRuntimeConfig } = getConfig();
  const apolloClient = getApolloClient();

  const { data, error } = await apolloClient.execQuery(
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
    console.error(`Error getting article "${slug}"`, e);
    return { hasError: true };
  });
  const articlesRaw = await response.json();

  article.modules = articlesRaw.data?.[0]?.attributes?.module || null;

  return { article, error };
}

export async function getRecentArticle({ rubriqueName, slug }) {
  const apolloClient = getApolloClient();

  const { data: articles, error } = await apolloClient.execQuery(
    { query: ARTICLES_RECENT_QUERY_V4, variables: { rubriqueName, slug } },
    { timeout: constant.home.timeout }
  );
  const recentArticle = ArticlesModel(articles.articles.data);
  return { recentArticle, error };
}

export async function getPageProps() {
  const apolloClient = getApolloClient();

  const { data: pageProps } = await apolloClient.execQuery(
    { query: PAGE_PROPS_QUERY_V4 },
    { timeout: constant.home.timeout }
  );

  const menus = toMenus(pageProps.menus.data);
  const genders = toGenders(pageProps.genders.data);
  const footer = toFooter(pageProps.footers.data?.[0]);
  const seo = toSeo(pageProps.prefixMetaDescription.data);

  return {
    menus,
    genders,
    footer,
    seo
  };
}
