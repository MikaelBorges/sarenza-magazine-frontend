const processToHomeArticle = (model = {}) => {
  return {
    id: model.id,
    title: model.title || '',
    author: model.author || '',
    publishDate: new Date(model.updated_at).toLocaleDateString('fr-FR'),
    image: model.image || 'Image inconnue',
    smallImage: model.smallSizeImg || {
      url: '',
      alt: 'image inconnue'
    },
    link: model.rubriques && `${model.rubriques[0].url}/${model.url}`,
    mediumImage: model.mediumSizeImg || {
      url: '',
      alt: 'image inconnue'
    }
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
    text: model.MarqueeComponent.text
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
    animateTexts: model.home.marquee.map(processToMarquee),
    displayFirst: model.home.display_components[0],
    displaySecond: model.home.display_components[1]
  };
};

export default processToHome;
