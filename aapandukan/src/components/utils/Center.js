import React, { Component } from "react";
import { View } from "react-native";

export default class Center extends Component{
  render(){
    return <View style={{textAlign:'center'}}>{this.props.children}</View>
  }
}