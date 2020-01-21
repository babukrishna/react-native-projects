import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}><Text style={[styles.welcome, {backgroundColor:'#ccc'}]}>Hello React</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffcccc'
  },
  welcome:{
    fontSize:50,
    color:'#000'
  }
})
