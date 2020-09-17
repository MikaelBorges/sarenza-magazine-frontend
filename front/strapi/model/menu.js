// TODO: ADD UNIT TEST
export function menu(model = {}) {
    let menu = [];

    model.map((item) => {
        if (!item.menu) {
            throw Error('Le champs ' + item.category + " n'a pas de catégorie  id =  " + item.id);
        }

        const currentItem = menu.find((el) => el && el.header.id === item.menu.id);

        if (currentItem) {
            const newItm = {
                id: item.menu.id,
                header: { id: item.menu.id, name: item.menu.header },
                items: [...currentItem.items, item]
            };
            menu = menu.filter((el) => el.header.id !== item.menu.id);
            menu.push(newItm);
        } else {
            menu.push({
                header: { id: item.menu.id, name: item.menu.header },
                items: [{ ...item }]
            });
        }
    });

    console.log('menu', menu);
    return menu;
}
