// Import Types
import {
    START_ACTION
} from '../actions/actions_settings';

const INITIAL_STATE = {
    settingOn: false
};

export const settings = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_ACTION:
            return Object.assign({}, state, { settingOn: action.payload });
            
        default:
            return state;
    }
}