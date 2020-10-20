export function ArticleModel(model = {}) {
  console.log('model', model);
  return {
    text: model.text || '',
    title: model.title,
    image: {
      small: model.ImageArticleMobile,
      medium: model.mediumSizeImg.url,
      large: model.image
    },
    modules: model.module,
    updatedDate: new Date(model.updated_at).toLocaleDateString('fr-FR'),
    publishDate: new Date(model.updated_at).toLocaleDateString('fr-FR'),
    author: model.author,
    subtitle: model.subtitle
  };
}

export function ArticlesModel(model = []) {
  return model.map((art) => {
    return ArticleModel(art);
  });
}
