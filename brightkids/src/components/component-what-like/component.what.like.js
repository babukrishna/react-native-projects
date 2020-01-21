import React, { Component } from "react";
import { CheckBox, Button, Text } from 'react-native-elements';

import ButtonHighlightComponent from './../common/component.button.highlight';
import ButtonOpacityComponent from './../common/component.button.opacity';
import InputBoxComponent from './../common/component.input';

import {
  View,
  StyleSheet,
  TextInput
} from "react-native";

export default class ComponentWhatLike extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  onPress = () => {
    console.log('hi')
  }

  render() {
    return(
      <View style={{flex:1, paddingLeft: 20, paddingRight: 20}}>
        <View>
          <Text h3 style={{color: "#3d4a58", fontWeight: 'bold'}}>
            What would you like to do?
          </Text>
        </View>
        
        <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
          <ButtonHighlightComponent 
            title="Create new school or Classroom"
            backgroundStyle="blue"/>

            <View style={{paddingTop:10}}>
              <ButtonHighlightComponent 
                title="Join a School"
                backgroundStyle="blue"/>
            </View>
        </View>
      </View>
    )
  }
}
