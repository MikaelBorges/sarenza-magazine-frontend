export const showNext = (state, nbPerpage) =>
  state.currentIndex < state.items.length - 1;

export const showPrev = (state, nbPerpage) =>
  state.currentIndex * nbPerpage > 0;
