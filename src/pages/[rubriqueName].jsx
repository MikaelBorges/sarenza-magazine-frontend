import Home from 'modules/Home/Home';
import HomeMobile from 'modules/Home/Home.mobile';
import ContextHelper from 'utils/ContextHelper';
import Layout from 'modules/Layout/Layout';
import wrapper from '../app/store';
import { redirectToErrorPage } from 'utils/redirectToErrorPage';
import { getRubriques, getPageProps } from 'modules/api';

export default function ArticleList({ rubriques, menus, genders, footer, isMobile, seo }) {
  return (
    <Layout
      menus={menus}
      genders={genders}
      footer={footer}
      isMobile={isMobile}
      metaData={{
        title: rubriques?.currentRubrique?.rubrique,
        description: `${seo.prefix}${rubriques?.header?.description}`
      }}>
      {isMobile ? <HomeMobile data={rubriques} isRubrique /> : <Home data={rubriques} isRubrique />}
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const ct = new ContextHelper(ctx);

  const rubriqueName = ctx.query.rubriqueName;
  const page = ctx.query.page;
  const start = page ? (parseInt(page) - 1) * 12 + 1 : 0;
  const limit = page ? 12 : 13;
  const isMobile = ct.context.device.mobile || false;
  const UrlPrefix = ct.context.route.link_prefix;

  const [{ rubriques, error }, { menus, genders, footer, seo }] = await Promise.all([
    getRubriques({ rubriqueName, limit, start, page }),
    getPageProps()
  ]);

  if (!ct.context.DEBUG && error?.hasError) return redirectToErrorPage(ctx.res);

  ctx.store.dispatch({ type: 'RUBRIQUE_SUCCESS', rubriques });

  return {
    props: {
      rubriques,
      isRubrique: rubriqueName,
      menus,
      genders,
      footer,
      isMobile,
      UrlPrefix,
      seo
    }
  };
});
