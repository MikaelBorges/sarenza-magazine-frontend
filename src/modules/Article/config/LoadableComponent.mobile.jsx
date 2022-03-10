import dynamic from 'next/dynamic';
import React from 'react';

export const COMPONENT_NAME = {
  MODULE_IMAGE: 'media.image',
  MODULE_PARAGRAPHE: 'module.paragraphe',
  MODULE_DUO: 'module.duo',
  MODULE_SHOPPING_LIST: 'module.slider-article',
  MODULE_VIDEO: 'media.video',
  MODULE_EDITO_LONG: 'module.block-edito-long',
  MODULE_DUO_QR_IMAGE: 'module.duo-qr',
  MODULE_IDENTITY_FICHES: 'module.identity-card',
  MODULE_TRIO_QR: 'module.trio-qr',
  MODULE_LIGNE_PRODUIT: 'module.ligne-produit',
  MODULE_PRODUCT_LOOK: 'module.product-look',
  MODULE_PRODUCT_EDITO: 'module.produit-edito',
  MODULE_IMAGE_LEGEND: 'module.images-legend',
  MODULE_DUO_IMAGE: 'module.duo-image'
};

export const getComponent = (item, i) => {
  let Component;
  // eslint-disable-next-line no-underscore-dangle
  switch (item.__component) {
    case COMPONENT_NAME.MODULE_IMAGE:
      Component = dynamic(() => import('../components/ImageText/ImageText.mobile'));
      break;
    case COMPONENT_NAME.MODULE_PARAGRAPHE:
      Component = dynamic(() => import('../components/BlockText/BlockText.mobile'));
      break;
    case COMPONENT_NAME.MODULE_DUO:
      Component = dynamic(() => import('../components/Duo/Duo.mobile'));
      break;
    case COMPONENT_NAME.MODULE_SHOPPING_LIST:
      Component = dynamic(() => import('../components/ShoppingList/ShoppingList.mobile'));
      break;
    case COMPONENT_NAME.MODULE_VIDEO:
      Component = dynamic(() => import('../components/IframeVideo/IframeVideo.mobile'));
      break;
    case COMPONENT_NAME.MODULE_EDITO_LONG:
      Component = dynamic(() => import('../components/BlockEditoLong/BlockEditoLong.mobile'));
      break;
    case COMPONENT_NAME.MODULE_LIGNE_PRODUIT:
      Component = dynamic(() => import('../components/ProductLine/ProductLine.mobile'));
      break;
    case COMPONENT_NAME.MODULE_DUO_QR_IMAGE:
      Component = dynamic(() => import('../components/DuoQRImage/DuoQRImage.mobile'));
      break;
    case COMPONENT_NAME.MODULE_IDENTITY_FICHES:
      Component = dynamic(() => import('../components/IdentityFiche/IdentityFiche.mobile'));
      break;
    case COMPONENT_NAME.MODULE_TRIO_QR:
      Component = dynamic(() => import('../components/TrioQR/TrioQR.mobile'));
      break;
    case COMPONENT_NAME.MODULE_PRODUCT_LOOK:
      Component = dynamic(() => import('../components/ProductLook/ProductLook.mobile'));
      break;
    case COMPONENT_NAME.MODULE_PRODUCT_EDITO:
      Component = dynamic(() => import('../components/ProductEdito/ProductEdito.mobile'));
      break;
    case COMPONENT_NAME.MODULE_IMAGE_LEGEND:
      Component = dynamic(() => import('../components/ImageLegend/ImageLegend.mobile'));
      break;
    case COMPONENT_NAME.MODULE_DUO_IMAGE:
      Component = dynamic(() => import('../components/DuoImage/DuoImage.mobile'));
      break;
    default:
      throw new Error('the component doesnt exist');
  }
  return <Component key={`loadableComponent.${i}`} {...item} />;
};
