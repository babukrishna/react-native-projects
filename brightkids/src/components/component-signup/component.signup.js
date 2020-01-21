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

export default class ComponentSignup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <Text h3 style={{color: "#3d4a58", fontWeight: 'bold'}}>
          Create An Account
        </Text>

        <InputBoxComponent label="Name" />
        <InputBoxComponent label="Email or Mobile Number"/>
        <InputBoxComponent label="Choose a password" type="password"/>
        
        <View style={{paddingTop:10}}>
          <ButtonHighlightComponent 
            title="Get Started" 
            backgroundStyle="blue"/>
        </View>
      </View>
    )
  }
}
