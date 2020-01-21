import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox, Text } from 'react-native-elements';

import ComponentButton from './../common/component.button';
import InputBoxComponent from './../common/component.input';

export default class ComponentLogin extends Component{
  render(){
    return(
      <View 
        style={{paddingLeft: 20, paddingRight: 20}}>
        <Text 
          h3 
          style={{color: "#3d4a58",fontWeight: "bold"}}>
          Glad to see you!
        </Text>

        <InputBoxComponent label="Username" />
        <InputBoxComponent label="Password" type="password"/>

        <View 
          style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View 
            style={{paddingTop: 5, paddingBottom: 20}}>

            <CheckBox
              title='Remember me'
              checkedIcon='circle'
              uncheckedIcon='circle-o'
              checked={true}
              size={14}
              containerStyle={{borderWidth:0, padding:0, backgroundColor: 'transparent'}}
              textStyle={{fontWeight:'normal', color:'black', fontSize: 14}}/>
          </View>

          <View 
            style={{paddingTop: 10, paddingBottom: 10, paddingRight: 10}}>
            <Text 
              style={{fontSize:14, color:'#0084fa'}}>
                Forgot Password?
            </Text>
          </View>
        </View>

        <ComponentButton 
          title="Login" 
          backgroundStyle="blue"/>

        <View 
          style={{flexDirection: 'row', justifyContent:'center', paddingTop: 10}}>
          <Text>New user? </Text>
          <Text 
            style={{color:'#465ee4'}}>
            Signup
          </Text>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});