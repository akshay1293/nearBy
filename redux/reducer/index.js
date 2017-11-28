import mapR from './MapReducer';
import filterRed from './filterReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    mapR, filterRed
})

export default rootReducer;