import { Breadcrumbs } from "./breadcrumb";
import { Image } from "./image";
import { showcase } from "./showcase";
import { brandSeoBox } from "./brandSeoBox";
import { brandSeoCollections } from "./brandSeoCollections";
import { brandDescription } from "./brandDescription";
import { video } from "./video";
import { flagship } from "./flagship";
import { alert } from "./alert";

export function brand(model) {
  check(model);
  return {
    brandName: model.brand_name || "",
    breadcrumbs: Breadcrumbs(model.breadcrumb),
    logo: Image(model.logo),
    showcase: showcase(model.showcase),
    brandSeoBox: brandSeoBox(model.brandSeoBox),
    brandSeoCollections: brandSeoCollections(
      model.brandSeoCollectionText,
      model.brandSeoCollectionItems
    ),
    brandDescription: brandDescription(model.brandDescription),
    video: video(model.video),
    flagship: flagship(model.flagship),
    alert: alert(model.alert)
  };
}
function check(model) {
  if (!model) {
    throw new Error("Aucune data");
  }
  if (!model.brand_name) {
    throw new Error("Le champs model.brand_name est obligatoire");
  }
}
