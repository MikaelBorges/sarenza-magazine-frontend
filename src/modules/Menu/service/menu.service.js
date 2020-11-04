import getConfig from 'next/config';

import menu from '../model/menu';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const getMenu = async () => {
  try {
    const res = await fetch(
      `${serverRuntimeConfig.API_URL || publicRuntimeConfig.API_URL}/menu-items`
    );
    const data = await res.json();
    return menu(data);
  } catch (error) {
    throw Error(error.message);
  }
};
export default getMenu;
