export default function countrySelector(model = {}) {
  return {
    id: model.id,
    text: model.Text || '',
    href: model.Link || '',
    domain: model.domain || '',
    isCurrent: model.isCurrent
  };
}
