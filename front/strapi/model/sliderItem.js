import { Image } from "./image";

export function sliderItem(model = {}) {
  return {
    id: 1,
    title: model.title,
    subTitle: model.subTitle,
    image: Image(model.article)
  };
}
