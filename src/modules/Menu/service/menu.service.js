import getConfig from 'next/config';
import constant from 'utils/constant';
import { timeout } from 'utils/httpUtils';

import menu from '../model/menu';

const { serverRuntimeConfig } = getConfig();

const getMenu = async () => {
  try {
    const res = await timeout(
      constant.menu.timeout,
      fetch(`${serverRuntimeConfig.API_URL}/api/menus`)
    );
    const { data } = await res.json();
    return menu(data);
  } catch (error) {
    console.error('Error in getMenu', error);
    return [];
  }
};
export default getMenu;
