import { AppNavigator }  from "../component/navigator";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createTabNavigator, NavigationActions } from "react-navigation";

const firstAction = AppNavigator.router.getActionForPathAndParams("Contact");

const temp = AppNavigator.router.getStateForAction(firstAction);

const initialState = AppNavigator.router.getStateForAction(temp);

const navReducer = (state = initialState, action) => {
  let nextState;
  switch(action.type){
    case "Contact":
      nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: "Contact"}), state);
      break;
    case "Home":
      nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: "Home"}), state);
      break;
  }
  return nextState || state;
}

export default navReducer;