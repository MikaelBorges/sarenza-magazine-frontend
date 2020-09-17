export function button(model = {}) {
    return {
        id: model.id,
        label: model.label || '',
        href: model.link || ''
    };
}
