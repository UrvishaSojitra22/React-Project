
import { createStore, applyMiddleware, compose } from "redux";
import { productReducer } from "../Services/Reduser/Reduser";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  productReducer,composeEnhancers(applyMiddleware(thunk))

);
