import getConfig from 'next/config';

import genders from '../model/genders';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const getGender = async () => {
  try {
    const res = await fetch(
      `${serverRuntimeConfig.API_URL || publicRuntimeConfig.API_URL}/Genders`
    );
    const data = await res.json();
    return genders(data);
  } catch (error) {
    throw Error(error.message);
  }
};
export default getGender;
