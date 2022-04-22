import getConfig from 'next/config';
import constant from 'utils/constant';
import { timeout } from 'utils/httpUtils';

import seo from '../model/seo';

const { serverRuntimeConfig } = getConfig();

const getSeo = async () => {
  try {
    const res = await timeout(
      constant.prefix.timeout,
      fetch(`${serverRuntimeConfig.API_URL}/api/Prefix-Meta-Description`)
    );
    const { data } = await res.json();
    return seo(data);
  } catch (error) {
    console.error('Error in getSeo', error);
    return {
      id: '',
      prefix: ''
    };
  }
};
export default getSeo;
