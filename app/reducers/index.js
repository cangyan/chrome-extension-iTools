import { combineReducers } from 'redux';

import JsonReducer from "./JsonReducer"
import RandomStringReducer from "./RandomStringReducer"
import MD5StringReducer from "./MD5Reducer"
import StringReducer from "./StringReducer"

export default combineReducers({
    JsonReducer, RandomStringReducer, MD5StringReducer, StringReducer
})