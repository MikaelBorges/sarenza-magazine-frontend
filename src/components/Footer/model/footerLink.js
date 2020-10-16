export default function footerLink(model = {}) {
  return {
    id: model.id,
    text: model.Text || '',
    href: model.Url || '',
    content: model.DataContent || '',
    class: model.class || ''
  };
}
