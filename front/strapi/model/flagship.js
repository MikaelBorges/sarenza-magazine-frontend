import { button } from './button';

export function flagship(model = {}) {
    return {
        title: model.title || '',
        items: model.links.map((item) => button(item))
    };
}
