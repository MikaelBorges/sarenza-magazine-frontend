export function Breadcrumbs(model = []) {
    return model.map((item) => ({
        label: item.label,
        url: item.link
    }));
}
