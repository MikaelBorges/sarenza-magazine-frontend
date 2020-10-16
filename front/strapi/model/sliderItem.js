import { Image } from './image';

export function sliderItem(model = {}, id) {
    return {
        id,
        title: model.title,
        subTitle: model.subTitle,
        image: Image(model.article)
    };
}
