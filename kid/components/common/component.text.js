import React from 'react';
import { Text, StyleSheet, Platform, Component, View } from 'react-native';

export default class TextElement extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text>text</Text>
      </View>
    )
  }
}