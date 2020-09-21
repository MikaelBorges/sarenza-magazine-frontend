import React, { useReducer } from 'react';

import SliderReducer from './SliderReducer';
import { ControlLeft, ControlRight, SliderContainer, SliderWrapper } from './styles';
import { showNext, showPrev } from './utils';

const Slider = ({ items, renderItem }) => {
    const [state, dispatch] = useReducer(SliderReducer, {
        currentIndex: 0,
        items
    });

    const width = 180;
    const nbPerpage = 4;
    const cardWidth = 300;
    return (
        <SliderContainer height={'300px'}>
            <SliderWrapper
                width={cardWidth * state.items.length + 300}
                style={{
                    transform: `translateX(${-(state.currentIndex * width + cardWidth)}px)`,
                    transition: 'transform ease-out 0.30s',
                    width: cardWidth * state.items.length + 300 + 'px'
                }}>
                {state.items.map((i) => renderItem(i, width))}
            </SliderWrapper>
            {showPrev(state, nbPerpage) && (
                <ControlLeft onClick={() => dispatch({ type: 'PREV' })}>{'<'}</ControlLeft>
            )}

            {showNext(state, nbPerpage) && (
                <ControlRight onClick={() => dispatch({ type: 'NEXT' })}>{'>'}</ControlRight>
            )}
        </SliderContainer>
    );
};

export default Slider;
