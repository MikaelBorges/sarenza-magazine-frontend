import getConfig from 'next/config';
import { timeout } from '../../../utils/httpUtils';
import seo from '../model/seo';
import constant from 'infrastructure/constant';

const { serverRuntimeConfig } = getConfig();

const getSeo = async () => {
  try {
    const res = await timeout(constant.prefix.timeout, fetch(`${serverRuntimeConfig.API_URL}/Prefix-Meta-Description`));
    const data = await res.json();
    return seo(data);
  } catch (error) {
    console.log('Error in getSeo', error);
    return{
      id: "",
      prefix: ""
  }
  }
};
export default getSeo;
