import getConfig from 'next/config';
import { timeout } from '../../../utils/httpUtils';
import menu from '../model/menu';
import constant from 'infrastructure/constant';

const { serverRuntimeConfig } = getConfig();

const getMenu = async () => {
  try {
    const res = await timeout(constant.menu.timeout, fetch(`${serverRuntimeConfig.API_URL}/menus`));
    const data = await res.json();
    return menu(data);
  } catch (error) {
    console.log('Error in getMenu', error);
    return [];
  }
};
export default getMenu;
