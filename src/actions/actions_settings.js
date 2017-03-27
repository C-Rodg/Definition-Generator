export const START_ACTION = 'START_ACTION';

export function startAction() {
    return function(dispatch) {
        dispatch(startActionSuccess());
    }
}

function startActionSuccess() {
    return {
        type: START_ACTION,
        payload: true
    };
}