import { combineReducers } from 'redux';

import JsonReducer from "./JsonReducer"
import RandomStringReducer from "./RandomStringReducer"
import MD5StringReducer from "./MD5Reducer"
import StringReducer from "./StringReducer"
import QRCodeReducer from "./QRCodeReducer"
import DateConvertReducer from "./DateConvertReducer"
import CreateImageReducer from "./CreateImageReducer"
import Base64ConvertReducer from "./Base64ConvertReducer"

export default combineReducers({
    JsonReducer,
    RandomStringReducer,
    MD5StringReducer,
    QRCodeReducer,
    StringReducer,
    DateConvertReducer,
    CreateImageReducer,
    Base64ConvertReducer
})