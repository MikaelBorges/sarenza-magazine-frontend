import menu from '../model/menu';

 const getMenu = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/menu-items`);
    const data = await res.json();
    return menu(data);
  } catch (error) {
    throw Error(error.message);
  }
};
export default getMenu;
