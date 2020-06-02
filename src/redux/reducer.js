const INITIAL_STATE = {
    firstComponentValue: null,
    thirdComponentValue: null
}
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FirstComponentValue':
            return {
                ...state,
                firstComponentValue: action.payload
            };
        case 'ThirdComponentValue':
            return {
                ...state,
                thirdComponentValue: action.payload
            }
        case 'DefaultAction':
            return {
                ...state,
                firstComponentValue: null,
                thirdComponentValue: null
            }
        default:
            return state;
    }
};

export default reducer;