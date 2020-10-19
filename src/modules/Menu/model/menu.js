// TODO: ADD UNIT TEST
export default function menu(model = {}) {
  let menus = [];

  model.forEach((item) => {
    if (!item.menu) {
      throw Error(`Le champs ${item.category} n'a pas de catégorie  id =  ${item.id}`);
    }

    const currentItem = menus.find((el) => el && el.header.id === item.menu.id);

    if (currentItem) {
      const newItm = {
        id: item.menu.id,
        header: { id: item.menu.id, name: item.menu.header },
        items: [...currentItem.items, item]
      };
      menus = menus.filter((el) => el.header.id !== item.menu.id);
      menus.push(newItm);
    } else {
      menus.push({
        header: { id: item.menu.id, name: item.menu.header },
        items: [{ ...item }]
      });
    }
  });

  return menus;
}
