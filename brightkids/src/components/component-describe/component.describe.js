import React, { Component } from "react";
import { CheckBox, Button, Text, Avatar } from 'react-native-elements';

import ButtonHighlightComponent from './../common/component.button.highlight';
import ButtonOpacityComponent from './../common/component.button.opacity';
import InputBoxComponent from './../common/component.input';

import {
  View,
  StyleSheet,
  TextInput
} from "react-native";

export default class ComponentDescribe extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return(
      <View style={{flex:1, paddingLeft: 20, paddingRight: 20}}>
        <View>
          <Text h3 style={{color: "#3d4a58", fontWeight: 'bold'}}>
            Which best describe you?
          </Text>
        </View>
        
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <View style={styles.panel}>
            <Avatar
              rounded
              large
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              containerStyle={{marginBottom:15}}/>
              <Text style={styles.text}>Staff or Teacher</Text>
          </View>

          <View style={styles.panel}>
            <Avatar
              rounded
              large
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
              containerStyle={{marginBottom:15}}/>
              <Text style={styles.text}>Parents</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panel:{
    borderRadius: 4,
    paddingTop: 15,
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:15,
    alignItems:'center',
    backgroundColor:'#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 0,height: 3},
    shadowRadius: 5,
    shadowOpacity: 0.2
  },
  text:{
    fontSize: 10,
    textAlign:'center',
    fontWeight:'bold'
  }
})
