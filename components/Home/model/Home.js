const processToHomeArticle = (model = {}) => {
  return {
    title: model.title || '',
    author: model.author || '',
    publishDate: new Date(model.updated_at).toLocaleDateString('fr-FR'),
    image: model.image || 'Image inconnue'
  };
};

const processToHome = (model = {}) => {
  return {
    header: {
      title: model.home.title || '',
      description: model.home.shortDescription || '',
      categories: model.home.categories.map((cat) => cat.label) || []
    },
    firstArticle: processToHomeArticle(model.articles[0]),
    articles: model.articles.slice(1).map(processToHomeArticle)
  };
};

export default processToHome;
