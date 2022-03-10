import Articles from 'modules/Article/Article';
import ArticlesMobile from 'modules/Article/Article.mobile';
import Layout from 'modules/Layout/Layout';
import ContextHelper from 'utils/ContextHelper';
import wrapper from 'app/store';
import { getArticleBySlug, getRecentArticle, getPageProps } from 'modules/api';

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
  const ct = new ContextHelper(ctx);

  const { slug, rubriqueName } = ctx.query;
  const isMobile = ct.context.device.mobile || false;

  const [
    { article, error: errorArticle },
    { recentArticle, error: errorRecentArticle },
    { menus, genders, footer, seo }
  ] = await Promise.all([
    getArticleBySlug(slug),
    getRecentArticle({ rubriqueName, slug }),
    getPageProps()
  ]);

  if (!ct.context.DEBUG && (errorArticle?.hasError || errorRecentArticle?.hasError))
    return redirectToErrorPage(ctx.res);

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
