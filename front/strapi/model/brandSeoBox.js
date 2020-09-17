import { button } from './button';

export function brandSeoBox(model = {}) {
    return {
        id: model.id,
        title: model.title || '',
        links: model.links.map((link) => button(link)) || []
    };
}
