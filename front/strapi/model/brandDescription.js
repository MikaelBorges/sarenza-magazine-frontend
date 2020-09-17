export function brandDescription(model = {}) {
    return {
        id: model.id,
        title: model.title || '',
        description: model.description || ''
    };
}
