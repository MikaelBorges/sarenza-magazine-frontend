import genders from '../model/genders';
import getConfig from "next/config"

const { serverRuntimeConfig  } = getConfig() 


 const getGender = async () => {
  try {
    const res = await fetch(`${serverRuntimeConfig.API_URL}/Genders`);
    const data = await res.json();
    return genders(data);
  } catch (error) {
    throw Error(error.message);
  }
};
export default getGender;
