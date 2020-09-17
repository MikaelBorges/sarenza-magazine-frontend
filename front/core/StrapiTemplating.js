import React from 'react';
import dynamic from 'next/dynamic';
export const COMPONENT_NAME = {
    BLOCK_CARD: 'block.card',
    BLOCK_HEADER: 'block.header',
    BLOCK_PRESENTATION: 'block.presentation'
};
export const getComponent = (item) => {
    let Component;
    switch (item.__component) {
        case COMPONENT_NAME.BLOCK_HEADER:
            Component = dynamic(() => import('../components/HeaderComponent/HeaderComponent'));
            break;
        case COMPONENT_NAME.BLOCK_PRESENTATION:
            Component = dynamic(() =>
                import('../components/PresentationComponent/PresentationComponent')
            );
            break;
        case COMPONENT_NAME.BLOCK_CARD:
            Component = dynamic(() => import('../components/Section/Section'));
            break;
        default:
            throw new Error('the component doesnt exist');
    }
    return <Component {...item} />;
};
