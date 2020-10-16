import { button } from './button';

export function showcase(model = {}) {
    return {
        title: model.title || '',
        description: model.description || '',
        backgroundUrl: model.background_url || '',
        link: button(model.btn) || {}
    };
}
