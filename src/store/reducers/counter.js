import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            /*
            return {
                ...state,
                counter: state.counter + 1
            }
            */
            // sustituimos lo anterior por una llamada a la nueva función de utility
            return updateObject(state, {counter: state.counter + 1})
        case actionTypes.DECREMENT:
            /*
            return {
                ...state,
                counter: state.counter - 1
            }
            */
            // sustituimos lo anterior por una llamada a la nueva función de utility
        return updateObject(state, {counter: state.counter - 1})
        case actionTypes.ADD:
            /*
            return {
                ...state,
                counter: state.counter + action.value
            }
            */
            // sustituimos lo anterior por una llamada a la nueva función de utility
            return updateObject(state, {counter: state.counter + action.value})
        case actionTypes.SUBTRACT:
            /*
            return {
                ...state,
                counter: state.counter - action.value
            }
            */
            // sustituimos lo anterior por una llamada a la nueva función de utility
            return updateObject(state, {counter: state.counter - action.value})
        default:
            return state;
    }
}

export default reducer;