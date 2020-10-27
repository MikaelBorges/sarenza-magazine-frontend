import genders from '../model/genders';

 const getGender = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/Genders`);
    const data = await res.json();
    return genders(data);
  } catch (error) {
    throw Error(error.message);
  }
};
export default getGender;
