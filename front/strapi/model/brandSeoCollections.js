import { showcase } from "./showcase";

export function brandSeoCollections(title, model) {
  return {
    title: title,
    items: model.map(item => showcase(item))
  };
}
