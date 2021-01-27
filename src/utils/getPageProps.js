import getFooter from 'modules/Footer/service/footer.service';
import getGender from 'modules/Menu/service/gender.service';
import getMenu from 'modules/Menu/service/menu.service';
import getSeo from 'modules/Layout/service/seo.service';

export const getPageProps = async () => {
  const menus = await getMenu();
  const genders = await getGender();
  const footer = await getFooter();
  const seo = await getSeo();

  return {
    menus,
    genders,
    footer,
    seo
  };
};

export default getPageProps;
