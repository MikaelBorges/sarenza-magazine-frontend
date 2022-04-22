function processToHomeArticle(article = {}) {
  return {
    id: article.id || '',
    title: article.attributes?.title || '',
    author: article.attributes?.author || '',
    publishDate: new Date(article.attributes?.published_at).toLocaleDateString('fr-FR') || null,
    image: article.attributes?.image || 'Image inconnue',
    ImageArticleMobile: article.attributes?.ImageArticleMobile || 'Image inconnue',
    link:
      article.attributes?.rubriques?.data && article.attributes.rubriques?.data?.length > 0
        ? `/${article.attributes?.rubriques?.data?.[0]?.attributes?.url}/${article.attributes.url}`
        : ''
  };
}

function getMarquee(model, rubrique, type = 'top') {
  const selectedMarquee = type === 'top' ? 'marqueeTop' : 'marquee';
  if (!rubrique) return model?.home?.data?.attributes?.[selectedMarquee] || null;

  const marquee = model.rubriques.data.find((heading) => heading.attributes.url === rubrique);
  if (!marquee) return null;
  return type === 'top' ? marquee?.marquee_top || null : marquee?.marquee_bottom || null;
}

function getDisplay(model, rubrique, type = 'top') {
  const selectedDisplay = type === 'top' ? 'displayTop' : 'displayBottom';
  if (!rubrique) return model?.home?.data?.attributes?.[selectedDisplay] || null;

  const rubriqueItem = model.rubriques.data.find((heading) => heading.attributes.url === rubrique);

  if (!rubriqueItem) return null;
  return type === 'top' ? rubriqueItem?.display_top || null : rubriqueItem?.display_bottom || null;
}

function processToRubrique(rubrique) {
  return {
    id: rubrique.id,
    url: rubrique.attributes.url,
    name: rubrique.attributes.rubrique,
    order: rubrique.attributes.order
  };
}

export default function processToHome(model = {}, rubrique, page) {
  if (!model || !model?.articles) return {};

  const { shortDescription, title } = model.home.data.attributes;
  const aLaUne = page ? {} : model.articles.data?.[0];

  return {
    header: {
      title: title || '',
      description: shortDescription || '',
      rubriques: model.rubriques.data.map(processToRubrique).sort((a, b) => a.order - b.order) || []
    },
    currentRubrique: rubrique
      ? model.rubriques.data.find((r) => r.attributes.url === rubrique) || {}
      : {},
    numberArticles: model.articles.meta.pagination.total,
    firstArticle: processToHomeArticle(aLaUne) || {},
    articles: model.articles.data.filter((it) => it.id !== aLaUne.id).map(processToHomeArticle),
    marquee: getMarquee(model, rubrique, 'bottom'),
    marqueeTop: getMarquee(model, rubrique, 'top'),
    displayFirst: getDisplay(model, rubrique, 'top'),
    displaySecond: getDisplay(model, rubrique, 'bottom')
  };
}
