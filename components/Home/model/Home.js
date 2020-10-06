const processToHome = (model = {}) => {
  return {
    header: {
      title: model.home.title,
      description: model.home.shortDescription,
      categories: model.home.categories.map((cat) => cat.label)
    }
  };
};

export default processToHome;
