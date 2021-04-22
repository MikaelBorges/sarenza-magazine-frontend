import dynamic from 'next/dynamic';
import React from 'react';

export const COMPONENT_NAME = {
  MODULE_IMAGE: 'media.image',
  MODULE_PARAGRAPHE: 'module.paragraphe',
  MODULE_DUO: 'module.duo',
  MODULE_SHOPPING_LIST: 'module.slider-article',
  MODULE_VIDEO: 'media.video',
  MODULE_EDITO_LONG: 'module.block-edito-long',
  MODULE_LIGNE_PRODUIT: 'module.ligne-produit',
  MODULE_DUO_QR_IMAGE: 'module.duo-qr',
  MODULE_IDENTITY_FICHES: 'module.identity-card',
  MODULE_EDITO_COURT: 'edito.edito-court',
  MODULE_TRIO_QR: 'module.trio-qr'
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
    default:
      throw new Error('the component doesnt exist');
  }
  return <Component key={`loadableComponent.${i}`} {...item} />;
};
