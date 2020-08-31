import { Image } from "./image";
import { portrait } from "./portrait";
import { sliderItem } from "./sliderItem";
export function edito(model = {}) {
  return {
    logo: Image(model.logo),
    portraits: model.portraits.map(item => portrait(item)),
    slider: model.Slider.map(item => sliderItem(item))
  };
}
