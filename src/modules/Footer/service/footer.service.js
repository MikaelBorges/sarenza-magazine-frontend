import getConfig from 'next/config';
import {timeout} from "../../../utils/httpUtils"
import footer from '../model/footer';
import constant from "infrastructure/constant"

const { serverRuntimeConfig } = getConfig();

const getFooter = async () => {
  try {
    const res = await timeout(constant.footer.timeout, fetch(
      `${serverRuntimeConfig.API_URL}/footers/1`
    ));
    const data = await res.json();
    return footer(data);
  } catch (error) {
    console.log('Error in getFooter', error)
    return {}
  }
};
export default getFooter;
