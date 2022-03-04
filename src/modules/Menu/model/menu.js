// TODO: ADD UNIT TEST
export default function menu(model = {}) {
  return model
    .map((item) => ({
      id: item.id,
      header: { id: item.id, name: item.attributes.header },
      colorText: item.attributes.colorText,
      order: item.attributes.order,
      url: item.attributes.Url,
      items: item.attributes.menu_items || []
    }))
    .sort((a, b) => a.order - b.order);
}
