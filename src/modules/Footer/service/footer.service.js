import footer from '../model/footer';

const getFooter = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/footers/1`);
    const data = await res.json();
    return footer(data);
  } catch (error) {
    // console.error('getFooter -> error', error);
    return error;
  }
};
export default getFooter;
