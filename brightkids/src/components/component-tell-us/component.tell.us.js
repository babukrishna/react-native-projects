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

export default class ComponentTellUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <Text h3 style={{color: "#3d4a58", fontWeight: 'bold'}}>
          Tell us about your school
        </Text>

        <InputBoxComponent label="School Name" />
        <InputBoxComponent label="Number of Kids"/>
        
        <View style={{paddingTop:10}}>
          <ButtonHighlightComponent 
            title="Continue"
            backgroundStyle="blue"/>
        </View>
      </View>
    )
  }
}
