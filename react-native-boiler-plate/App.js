// In App.js in a new project

import React from "react";
import {Provider, connect} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import { View, Text, AppRegistry } from "react-native";
import Home from "./app/component/home";
import Contact from "./app/component/contact";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createTabNavigator, NavigationActions } from "react-navigation";
import {reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer} from "react-navigation-redux-helpers";
import appReducer from "./app/reducer/reducer-combine";
import { AppNavigator, AppWithNavigationState } from "./app/component/navigator";
import store from "./app/store"

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
    );
  }
}

export default App;