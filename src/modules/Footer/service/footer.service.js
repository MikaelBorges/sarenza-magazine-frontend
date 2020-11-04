import footer from '../model/footer';
import getConfig from "next/config"

const { serverRuntimeConfig  } = getConfig() 

const getFooter = async () => {
  try {
    const res = await fetch(`${serverRuntimeConfig.API_URL}/footers/1`);
    const data = await res.json();
    return footer(data);
  } catch (error) {
    // console.error('getFooter -> error', error);
    return error;
  }
};
export default getFooter;
