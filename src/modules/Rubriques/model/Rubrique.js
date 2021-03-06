const processToHomeArticle = (model = {}) => {
  return {
    id: model.id,
    title: model.title || '',
    author: model.author || '',
    publishDate: new Date(model.updated_at).toLocaleDateString('fr-FR'),
    link: `${model.rubriques[0].url}/${model.url}`,
    image: model.image || 'Image inconnue'
  };
};

const processToRubrique = (model = []) => {
  return {
    url: model.url,
    name: model.rubrique,
    id: model.id
  };
};

const processToMarquee = (model = {}) => {
  return {
    id: model.id,
    text: model.MarqueeContent.text
  };
};

const processToHome = (model = {}) => {
  return {
    header: {
      title: model.home.title || '',
      description: model.home.shortDescription || '',
      rubriques: model.rubriques.map(processToRubrique) || []
    },
    firstArticle: processToHomeArticle(model.articles[0]),
    articles: model.articles.slice(1).map(processToHomeArticle),
    animateTexts: model.home.marqueComponent.map(processToMarquee)
  };
};

export default processToHome;
