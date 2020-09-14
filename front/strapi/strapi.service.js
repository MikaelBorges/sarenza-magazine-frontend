import { brand } from "./model/brand";
import { edito } from "./model/edito";
import { menu } from "./model/menu";

const getIdFromBrandName = brandName => {
  switch (brandName) {
    case "kickers":
      return 1;
    case "clarks":
      return 2;
    default:
      throw new Error(`Nom de marque ${brandName} inconnue`);
  }
};

export const getBrandData = async brandName => {
  try {
    const brandId = getIdFromBrandName(brandName);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}trade-brand-premiums/${brandId}`
    );
    const data = await res.json();
    return brand(data);
  } catch (error) {
    throw Error(error.message);
  }
};

export const getEditoBrand = async editoId => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}trade-edito-premiums/${editoId}`
    );
    const data = await res.json();
    return edito(data);
  } catch (error) {
    throw Error(error.message);
  }
};

export const getMenu = async () => {
  /* try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}menu-items`);
    const data = await res.json();
    return menu(data);
  } catch (error) {
    throw Error(error.message);
  }*/
};
