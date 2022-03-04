import toMenus from 'modules/Menu/model/menu';
import toGenders from 'modules/Menu//model/genders';
import toFooter from 'modules/Footer/model/footer';
import toSeo from 'modules/Layout/model/seo';
import { getApolloClient } from 'utils/apollo';
import { PAGE_PROPS_QUERY_V4 } from 'apollo/queries/common/commonQuery';
import constant from 'infrastructure/constant';

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

export default getPageProps;
