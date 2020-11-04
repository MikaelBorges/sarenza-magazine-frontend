import getConfig from 'next/config';

import footer from '../model/footer';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const getFooter = async () => {
  try {
    const res = await fetch(
      `${serverRuntimeConfig.API_URL || publicRuntimeConfig.API_URL}/footers/1`
    );
    const data = await res.json();
    return footer(data);
  } catch (error) {
    // console.error('getFooter -> error', error);
    return error;
  }
};
export default getFooter;
