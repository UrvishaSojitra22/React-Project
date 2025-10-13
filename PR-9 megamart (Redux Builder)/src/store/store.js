
import { createStore, applyMiddleware, compose } from "redux";
import { productReducer } from "../Services/Reduser/Reduser";
export const store = createStore(
  productReducer, (window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())// ✅ reducer as reference

);
