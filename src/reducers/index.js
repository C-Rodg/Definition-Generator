import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { definition } from './reducer_definition';

const rootReducer = combineReducers({
    definition, 
    routing
});

export default rootReducer;