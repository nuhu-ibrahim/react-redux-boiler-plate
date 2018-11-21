import Home from "./home";
import Contact from "./contact";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createTabNavigator, NavigationActions } from "react-navigation";
import {Provider, connect} from "react-redux"; 
import {reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer} from "react-navigation-redux-helpers";
import {createStore, applyMiddleware, combineReducers} from "redux";

const AppNavigator = createStackNavigator({
  Contact: {
    screen: Contact
  },
  Home: {
    screen: Home
  }
});

const middleware = applyMiddleware(createReactNavigationReduxMiddleware(
  "root", state => state.nav,));
const _App = reduxifyNavigator(AppNavigator, "root");

const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(_App);


export {AppNavigator, AppWithNavigationState};