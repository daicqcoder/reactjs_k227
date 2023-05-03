const defaultState = {
    num: 0,
}
const reducer1 = (state=defaultState, action) => {
    console.log("reducer1")
    switch(action.type) {
        case "UP":
            console.log("reducer1 -> up")
            return {...state, num: ++state.num}
        case "RESET_UP":
            return {...state, num: 0}
        default: return state;
    }
}
export default reducer1;