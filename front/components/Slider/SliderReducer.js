export default (state, action) => {
    switch (action.type) {
        case 'NEXT':
            return {
                ...state,
                currentIndex: state.currentIndex + (1 % state.items.length)
            };
        case 'PREV':
            return {
                ...state,
                currentIndex: state.currentIndex - (1 % state.items.length)
            };
        case 'GOTO':
            return {
                ...state,
                currentIndex: action.index
            };
        case 'RESET':
            return { currentIndex: 0, currentPosition: 0 };

        default:
            return state;
    }
};
