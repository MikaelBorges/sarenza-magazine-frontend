import getFooter from 'modules/Footer/service/footer.service';
import getGender from 'modules/Menu/service/gender.service';
import getMenu from 'modules/Menu/service/menu.service';

export const getPageProps = async () => {
  const menus = await getMenu();
  const genders = await getGender();
  const footer = await getFooter();

  return {
    menus,
    genders,
    footer
  };
};

export default getPageProps;
