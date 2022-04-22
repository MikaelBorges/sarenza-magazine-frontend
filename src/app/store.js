import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { createStore } from 'redux';

// create your reducer
const reducer = (state = { tick: 'init', article: null, rubriques: null }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    case 'ARTICLE_SUCCESS':
      return { ...state, article: action.article };
    case 'RUBRIQUE_SUCCESS':
      return { ...state, rubriques: action.rubriques };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = () => createStore(reducer);

// export an assembled wrapper
const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
