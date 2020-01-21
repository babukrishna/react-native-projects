import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.footer}>Copyright by Me</Text>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer:{
    color: 'black',
    fontSize: 10
  }
})
