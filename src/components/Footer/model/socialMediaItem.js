export default function socialMediaItem(model = {}) {
  return {
    id: model.id,
    label: model.Item || '',
    name: model.Name || '',
    href: model.Link || ''
  };
}
