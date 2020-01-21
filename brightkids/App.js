import React, {Component} from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";

//import ComponentLogin from './src/components/component-login/component.login';
//import ComponentSignup from './src/components/component-signup/component.signup';
//import ComponentTellUs from './src/components/component-tell-us/component.tell.us';
//import ComponentWhatLike from './src/components/component-what-like/component.what.like';
//import ComponentCreateAccount from './src/components/component-create-account/component.create.account';
//import ComponentDescribe from './src/components/component-describe/component.describe';
//import ComponentCamera from './src/components/component-camera/component.camera';

import Header from './src/components/header/component.header';
import Footer from './src/components/footer/component.footer';

export default class MyApp extends Component{
  render(){
    return(
      <View style={styles.mainContainer}>
        <StatusBar hidden={true}></StatusBar>
        <View style={styles.header}> 
          <Header />
        </View>
        <View style={styles.body}>
          <ComponentCamera />
        </View>
      </View>
    )
  }
}
//(iPhone 8 Copy 8)
//<ComponentCreateAccount /> (iPhone 8 Copy 11)
//<ComponentDescribe /> (iPhone 8 Copy 21)
//<ComponentWhatLike /> (iPhone 8 Copy 22)
//<ComponentLogin /> (iPhone 8 Copy 12)
//<ComponentSignup /> (iPhone 8 Copy 25)
//<ComponentTellUs /> (iPhone 8 Copy 26)
//(Dashboard Copy 3)
//(Dashboard Copy 2)
//(Dashboard Copy 4)
//(Dashboard Copy 3(1))
//(Activity2)
//<ComponentCamera> (Activity3)
//(Activity4)
//(Activity5)
//(Activity1)

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    flexDirection: 'column'
  },
  body:{
    flex: 40
  },
  header:{
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor:'#ccc'
  }
})