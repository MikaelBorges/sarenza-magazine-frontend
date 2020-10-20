import dynamic from 'next/dynamic';
import React from 'react';

export const COMPONENT_NAME = {
  MODULE_IMAGE: 'media.image',
  MODULE_PARAGRAPHE: 'module.paragraphe',
  MODULE_DUO: 'module.duo'
};
export const getComponent = (item) => {
  let Component;
  // eslint-disable-next-line no-underscore-dangle
  switch (item.__component) {
    case COMPONENT_NAME.MODULE_IMAGE:
      Component = dynamic(() => import('../components/ImageText/ImageText'));
      break;
    case COMPONENT_NAME.MODULE_PARAGRAPHE:
      Component = dynamic(() => import('../components/Paragraphe/Paragraphe'));
      break;
    case COMPONENT_NAME.MODULE_DUO:
      Component = dynamic(() => import('../components/Duo/Duo'));
      break;
    default:
      throw new Error('the component doesnt exist');
  }
  return <Component {...item} />;
};
