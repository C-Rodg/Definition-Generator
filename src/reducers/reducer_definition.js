// Import Types
import {
    ADD_TEXT,
    ADD_PICKONE,
    ADD_PICKMANY
} from '../actions/actions_definition';

const INITIAL_STATE = {
    text: [],
    pickone: [],
    pickmany: []
};

export const definition = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return Object.assign({}, state, { text: [...state.text, action.payload] });
        
        case ADD_PICKONE:
            return Object.assign({}, state, { pickone: [...state.pickone, action.payload] });
        
        case ADD_PICKMANY:
            return Object.assign({}, state, { pickmany: [...state.pickmany, action.payload] })

        default:
            return state;
    }
}