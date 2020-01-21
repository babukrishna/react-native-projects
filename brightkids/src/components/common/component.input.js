import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Animated, Easing} from 'react-native';

export default class InputBoxComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      'labelPosition':20,
      'value':'',
      'type':false
    };
    this.animated = new Animated.Value(25);
  }

  onFoucusHandler = (event) => {
    //this.setState({labelPosition:0});
    Animated.timing(this.animated, {
      toValue:0,
      duration:100,
      easing:Easing.inOut(Easing.ease)
    }).start()
  }

  componentWillMount() {
		if(this.props.type === 'password'){
      this.setState({type:true})
    }
  }
  
  onBlurHandler = (event) => {
    if(this.state.value === ''){
      //this.setState({labelPosition:25})
      Animated.timing(this.animated, {
        toValue:25,
        duration:100,
        easing:Easing.inOut(Easing.ease)
      }).start()
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Animated.Text 
          style={[styles.text,{top: this.animated}]}>
          {this.props.label}
        </Animated.Text>

          <TextInput
            style={styles.input}
            onChangeText={(value) => this.setState({value})}
            value={this.state.value}
            onBlur={this.onBlurHandler}
            onFocus={this.onFoucusHandler}
            secureTextEntry={this.state.type}
          />
      </View>
    )
  }
}

InputBoxComponent.defaultProps = {
  'label':'Label',
  'type':false
}

const styles = StyleSheet.create({
  container:{
    paddingBottom: 10,
    paddingTop: 10
  },
  input:{
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 16
  },
  text:{
    color:'#7b858e',
    fontSize:12,
    top:25
  }
})