import Home from 'modules/Home/Home';
import HomeMobile from 'modules/Home/Home.mobile';
import ContextHelper from 'utils/ContextHelper';
import Layout from 'modules/Layout/Layout';
import { redirectToErrorPage } from 'utils/redirectToErrorPage';
import { getHomeData, getPageProps } from 'modules/api';

export default function HomePage({ homeData, menus, genders, footer, isMobile, seo }) {
  return (
    <Layout
      menus={menus}
      genders={genders}
      footer={footer}
      isMobile={isMobile}
      metaData={{
        title: homeData?.header?.title,
        description: `${seo.prefix}${homeData?.header?.description}`
      }}>
      {isMobile ? <HomeMobile data={homeData} /> : <Home data={homeData} />}
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const ct = new ContextHelper(ctx);

  const page = ctx.query.page;
  const start = page ? (parseInt(page) - 1) * 12 + 1 : 0;
  const limit = page ? 12 : 13;
  const isMobile = ct.context.device.mobile || false;
  const UrlPrefix = ct.context.route.link_prefix;

  const [{ homeData, error }, { menus, genders, footer, seo }] = await Promise.all([
    getHomeData({ limit, start, page }),
    getPageProps()
  ]);

  if (!ct.context.DEBUG && error?.hasError) return redirectToErrorPage(ctx.res);

  return {
    props: {
      homeData,
      menus,
      genders,
      footer,
      seo,
      isMobile,
      UrlPrefix
    }
  };
};
