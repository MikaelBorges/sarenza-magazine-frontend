export function ArticleModel(model = {}) {
  return {
    text: model.attributes.text || '',
    title: model.attributes.title || '',
    image: {
      small: model.attributes.ImageArticleMobile || '',
      medium: model.attributes.ImageArticleMobile || '',
      large: model.attributes.image || ''
    },
    modules: model.attributes?.module || [],
    updatedDate: new Date(model.attributes.updatedAt).toLocaleDateString('fr-FR'),
    publishDate: new Date(model.attributes.publishedAt).toLocaleDateString('fr-FR'),
    author: model.attributes.author || '',
    subtitle: model.attributes.subtitle || '',
    rubrique: model?.attributes?.rubriques?.data?.[0] || null,
    link: model.attributes?.rubriques?.data
      ? `/${model?.attributes?.rubriques?.data?.[0]?.attributes?.url}/${model.attributes.url}`
      : ''
  };
}

export function ArticlesModel(model = []) {
  return model.map((art) => {
    return ArticleModel(art);
  });
}
