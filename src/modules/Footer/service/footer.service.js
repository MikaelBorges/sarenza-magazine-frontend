import getConfig from 'next/config';
import constant from 'utils/constant';
import { timeout } from 'utils/httpUtils';

import footer from '../model/footer';

const { serverRuntimeConfig } = getConfig();

const getFooter = async () => {
  try {
    const res = await timeout(
      constant.footer.timeout,
      fetch(`${serverRuntimeConfig.API_URL}/api/footers/1?populate=*`)
    );
    if (res.status === 200) {
      const { data } = await res.json();
      return footer(data);
    }
    return {};
  } catch (error) {
    console.error('Error in getFooter', error);
    return {};
  }
};
export default getFooter;
