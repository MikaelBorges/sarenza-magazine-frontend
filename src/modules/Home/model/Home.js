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

const processToRubrique = (model = []) => {
  return {
    url: model.url,
    name: model.rubrique,
    id: model.id
  };
};

const processToHome = (model = {}, rubrique) => {
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
    marquee: model.home.marquee || null,
    marqueeTop: model.home.marqueeTop || null,
    displayFirst: model.home.display_components[0] || null,
    displaySecond: model.home.display_components[1] || null
  };
};

export default processToHome;
