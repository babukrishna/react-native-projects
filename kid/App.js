import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';

import ComponentCamera from './components/component-camera/component.camera';
import ComponentLogin from './components/component-login/component.login';
import ComponentShare from './components/component-share/component.share';

export default class App extends Component{
  render() {
    return (
      <View style={styles.mainContainer}>
        <ComponentCamera />
      </View>
    )
  }
}

//camera component
//<ComponentCamera />
//<ComponentLogin />

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  }
})