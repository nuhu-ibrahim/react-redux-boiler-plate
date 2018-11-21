/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';
import {increaseCounter, reduceCounter} from "../action/action-counter";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress = {() => this.props.navigation.dispatch({type:"Contact"})}><Text>Home</Text></TouchableNativeFeedback>
        <Text>{this.props.count}</Text>
        <TouchableNativeFeedback onPress = {() => this.props.increaseCounter(null)}><Text>Increase</Text></TouchableNativeFeedback>
        <TouchableNativeFeedback onPress = {() => this.props.reduceCounter(null)}><Text>Reduce</Text></TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStatesToProps = (state)=>({
  count : state.count.counter
});

const mapDispatchStateToProps = (dispatch)=>({
  increaseCounter: (payload = null) => dispatch(increaseCounter(payload = null)),
  reduceCounter: (payload = null) => dispatch(reduceCounter(payload = null))
});

export default connect(mapStatesToProps,mapDispatchStateToProps)(Home);