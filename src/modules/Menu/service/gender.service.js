import getConfig from 'next/config';
import constant from 'utils/constant';
import { timeout } from 'utils/httpUtils';

import genders from '../model/genders';

const { serverRuntimeConfig } = getConfig();

const getGender = async () => {
  try {
    const res = await timeout(
      constant.menu.timeout,
      fetch(`${serverRuntimeConfig.API_URL}/api/genders`)
    );
    const { data } = await res.json();
    return genders(data);
  } catch (error) {
    console.log('Error in getGender', error);
    return [];
  }
};
export default getGender;
