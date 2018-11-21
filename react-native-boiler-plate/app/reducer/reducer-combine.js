import navReducer from "./reducer-nav";
import countReducer from "./reducer-counter";
import {createStore, applyMiddleware, combineReducers} from "redux";

const appReducer = combineReducers({
  nav: navReducer,
  count: countReducer
});

export default appReducer;
