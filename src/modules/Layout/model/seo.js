const seo = (model = {}) => {
  return{
      id: model.id || "",
      prefix: model.prefix || ""
  }
}
  export default seo;