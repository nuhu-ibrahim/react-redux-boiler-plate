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

type Props = {};

class Contact extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress = {() => this.props.navigation.dispatch({type: "Home"})}><Text>Contact</Text></TouchableNativeFeedback>
      </View>
    );
  }
}

const mapStatesToProps = (state)=>({

});

const mapDispatchStateToProps = (dispatch)=>({

});

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

export default connect(mapStatesToProps,mapDispatchStateToProps)(Contact);