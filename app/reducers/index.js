import { combineReducers } from 'redux';

import JsonReducer from "./JsonReducer"
import RandomStringReducer from "./RandomStringReducer"

export default combineReducers({
    JsonReducer, RandomStringReducer
})