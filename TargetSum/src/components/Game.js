import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Game extends React.Component{
  randomNumber = Array.from({})
  target = 10 + Math.floor(40 * Math.random());

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.target}>{this.target}</Text>
        <Text>{this.props.randomNumberCount}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ccc'
  },
  target:{
    fontSize: 50,
    backgroundColor: '#dddddd',
    margin: 20,
    textAlign:'center',
    borderWidth: 1,
    borderColor: '#bbbbbb'
  }
})

export default Game;