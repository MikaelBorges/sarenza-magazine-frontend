import menu from '../model/menu';

export const getMenu = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/menu-items`);
    const data = await res.json();
    return menu(data);
  } catch (error) {
    throw Error(error.message);
  }
};
