import {createStore} from "redux";
const defaultState = {
    num: 100,
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case "GET NUMBER":
            return {...state, num: Math.round(Math.random() * 10)}
        case "RESET NUMBER":  
            
            return {...state, num: 0}
        default: return state;
    }
}

const store = createStore(reducer);
export default store;