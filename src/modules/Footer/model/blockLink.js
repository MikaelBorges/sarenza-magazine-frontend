import button from './button';

export default function blockLink(model = {}) {
  return {
    id: model.id,
    title: model.Title || '',
    links: model.link.map((item) => button(item))
  };
}
