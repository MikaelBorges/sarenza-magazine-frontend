import menu from '../model/menu';
import getConfig from "next/config"

const { serverRuntimeConfig } = getConfig() 

 const getMenu = async () => {
  try {
    const res = await fetch(`${serverRuntimeConfig.API_URL}/menu-items`);
    const data = await res.json();
    return menu(data);
  } catch (error) {
    throw Error(error.message);
  }
};
export default getMenu;
