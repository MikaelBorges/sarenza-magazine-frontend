const processToHomeArticle = (model = {}) => {
  try {
    return {
      id: model.id,
      title: model.title || '',
      author: model.author || '',
      publishDate: new Date(model.updated_at).toLocaleDateString('fr-FR'),
      image: model.image || 'Image inconnue',
      ImageArticleMobile: model.ImageArticleMobile || 'Image inconnue',
      link: `${model.rubriques[0].url}/${model.url}` || null
    };
  } catch (e) {
    console.error('e', e);
  }
};

const processToRubrique = (model = []) => {
  return {
    url: model.url,
    name: model.rubrique,
    id: model.id
  };
};

const processToHome = (model = {}) => {
  return {
    header: {
      title: model.home.title || '',
      description: model.home.shortDescription || '',
      rubriques: model.rubriques.map(processToRubrique) || []
    },
    firstArticle: processToHomeArticle(model.articles[0]) || {},
    articles: model.articles.slice(1).map(processToHomeArticle),
    marquee: model.home.marquee || null,
    marqueeTop: model.home.marqueeTop || null,
    displayFirst: model.home.display_components[0] || null,
     displaySecond: model.home.display_components[1] || null
  };
};

export default processToHome;
