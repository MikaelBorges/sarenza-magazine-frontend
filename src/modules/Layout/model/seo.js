const seo = (model = {}) => {
  return {
    id: model.id || '',
    prefix: model.attributes.prefix || ''
  };
};
export default seo;
