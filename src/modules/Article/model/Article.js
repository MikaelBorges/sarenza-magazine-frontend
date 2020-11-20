export function ArticleModel(model = {}) {
  return {
    text: model.text || '',
    title: model.title || '',
    image: {
      small: model.ImageArticleMobile || '',
      medium: (model && model.ImageArticleMobile) || '',
      large: model.image || ''
    },
    modules: model.module || [],
    updatedDate: new Date(model.updated_at).toLocaleDateString('fr-FR'),
    publishDate: new Date(model.updated_at).toLocaleDateString('fr-FR'),
    author: model.author || '',
    subtitle: model.subtitle || '',
    rubrique: model.rubriques[0],
    link: (model.rubriques && `/${model.rubriques[0].url}/${model.url}`) || ''
  };
}

export function ArticlesModel(model = []) {
  return model.map((art) => {
    return ArticleModel(art);
  });
}
export function video(model = {}) {
  return {
      id: model.id,
      iframe: model.iframe_url
  };
}

