import {createStore, applyMiddleware, combineReducers} from "redux";
import {reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer} from "react-navigation-redux-helpers";
import thunk from "redux-thunk";
import appReducer from "./reducer/reducer-combine";

const middleware = applyMiddleware(createReactNavigationReduxMiddleware(
  "root", state => state.nav,));

const middleware2 = applyMiddleware(thunk);

const store = createStore(
  appReducer, middleware2,
);

export default store;