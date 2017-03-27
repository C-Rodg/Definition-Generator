import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { settings } from './reducer_settings';

const rootReducer = combineReducers({
    settings, 
    routing
});

export default rootReducer;