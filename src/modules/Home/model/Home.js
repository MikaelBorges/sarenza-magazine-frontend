const processToHomeArticle = (model = {}) => {
  try {
    return (
      model.id && {
        id: model.id,
        title: model.title || '',
        author: model.author || '',
        publishDate: new Date(model.updated_at).toLocaleDateString('fr-FR'),
        image: model.image || 'Image inconnue',
        ImageArticleMobile: model.ImageArticleMobile || 'Image inconnue',
        link:
          (model.rubriques &&
            model.rubriques.length > 0 &&
            `${model.rubriques[0].url}/${model.url}`) ||
          ''
      }
    );
  } catch (e) {
    throw Error(e.message);
  }
};

const getMarquee = (model, rubrique, type = 'top') => {
  if (!rubrique) {
    if (type === 'top') {
      return (model.home.marqueeTop && model.home.marqueeTop.MarqueeComponent) || null;
    }
    return (model.home.marquee && model.home.marquee.MarqueeComponent) || null;
  }

  const marquees = model.rubriques.find((heading) => heading.url === rubrique);

  if (type === 'top') {
    return marquees.marquee_top && marquees.marquee_top.MarqueeComponent;
  }
  return marquees.marquee_bottom && marquees.marquee_bottom.MarqueeComponent;
};
function getDisplay(model, rubrique, type = 'top') {
  if (!rubrique) {
    if (type === 'top') {
      return model.home.display_components[0].Display || null;
    }
    return model.home.display_components[1].Display || null;
  }
  const rubriqueItem = model.rubriques.find((heading) => heading.url === rubrique);
  if (type === 'top') {
    return rubriqueItem.display_top && rubriqueItem.display_top.Display;
  }
  return rubriqueItem.display_bottom && rubriqueItem.display_bottom.Display;
}
const processToRubrique = (model = []) => {
  return {
    url: model.url,
    name: model.rubrique,
    id: model.id
  };
};

const processToHome = (model = {}, rubrique) => {
  if (!model || !model.articles) return {}
  
  const aLaUne =
    model.articles.find((it) => {
      return (
        model.home.ArticleUne.id === it.id &&
        (it.rubriques.some((r) => r.url === rubrique) || !rubrique)
      );
    }) || model.articles[0];

  return {
    header: {
      title: model.home.title || '',
      description: model.home.shortDescription || '',
      rubriques: model.rubriques.map(processToRubrique) || []
    },
    firstArticle: processToHomeArticle(aLaUne) || {},
    articles: model.articles.filter((it) => it.id !== aLaUne.id).map(processToHomeArticle),
    marquee: getMarquee(model, rubrique, 'bottom'),
    marqueeTop: getMarquee(model, rubrique, 'top'),
    displayFirst: getDisplay(model, rubrique, 'top'),
    displaySecond: getDisplay(model, rubrique, 'bottom')
  };
};

export default processToHome;
