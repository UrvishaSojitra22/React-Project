import { combineReducers } from "redux";

import { authReducer } from "./authenticationReducer";
import { productReducer } from "./Reducer";


export const rootReducer = combineReducers({
    productReducer,
    authReducer
})