// TODO: ADD UNIT TEST
export default function menu(model = {}) {
  return model
    .map((item) => ({
      id: item.id,
      header: { id: item.id, name: item.header },
      colorText: item.colorText,
      order: item.order,
      url: item.Url,
      items: item.menu_items || []
    }))
    .sort((a, b) => a.order - b.order);
}
