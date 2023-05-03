const defaultState = {
    num: 10,
}
const reducer2 = (state=defaultState, action) => {
    switch(action.type) {
        case "DOWN" :
            return {...state, num: --state.num}
        case "RESET_DOWN":
            return {...state, num: 10}
        default: return state;
    }
}
export default reducer2;