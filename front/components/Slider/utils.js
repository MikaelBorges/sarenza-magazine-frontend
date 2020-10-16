export const showNext = (state) => state.currentIndex < state.items.length - 1;

export const showPrev = (state, nbPerpage) => state.currentIndex * nbPerpage > 0;
