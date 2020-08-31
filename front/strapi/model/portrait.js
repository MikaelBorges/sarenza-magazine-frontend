import { Image } from "./image";
export function portrait(model = {}) {
  return {
    description: model.description || "",
    title: model.title || "",
    caption: model.caption || "",
    portrait: Image(model.portrait)
  };
}
