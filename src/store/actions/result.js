import * as actionTypes from './actionTypes';


export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(()=> {
            const oldCounter = getState().ctr.counter;
            console.log('old counter', oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id
    };
};