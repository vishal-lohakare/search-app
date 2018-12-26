import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import dataFetchReducer from "./reducers/dataFetchReducer";

const reducers = combineReducers({
  dataFetchReducer
});

const middleware = applyMiddleware(thunk);

let store = createStore(reducers, middleware);

export default store;
