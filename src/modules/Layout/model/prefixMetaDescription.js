export default function prefixMetaDescription(model = {}) {
    return {
      id: model.id || "",
      prefix: model.prefix || ""
    };
  }