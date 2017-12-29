import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.id);
    return updateObject(state, {results: updatedArray});
};

const reducer = (state = initialState, action) => {
    console.log('action', action);
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            /*
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
            */
            // sustituimos lo anterior por una llamada a la nueva función de utility
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });
        case actionTypes.DELETE_RESULT:
            /*
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.id)
            }
            */
            // sustituimos lo anterior por una llamada a la nueva función deleteReault
            // así todas las llamadas del switch serán muy simples
            return deleteResult(state, action);
        default:
            return state;
    }
}

export default reducer;