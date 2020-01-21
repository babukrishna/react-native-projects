import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { LinearGradient } from 'expo';

export default class ButtonOpacityComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      'backgroundColor': this.props.backgroundStyle == 'blue'? this.props.backgroundColor : ['#ffffff','#ffffff'],
      'color': this.props.backgroundStyle == 'blue'? '#ffffff':this.props.color
    }
  }

  render(){
    return(
      <TouchableOpacity 
        style={{
          overflow: 'hidden',
          borderColor: this.props.borderColor,
          borderRadius: this.props.borderRadius,
          borderWidth: this.props.borderWidth
        }}>
        <LinearGradient
          colors={this.state.backgroundColor}
          style={{ 
            paddingTop: this.props.paddingTop,
            paddingBottom: this.props.paddingBottom, 
            alignItems: this.props.textAlign, 
            borderRadius: 5 
          }}>
          <Text style={{
            color:this.state.color, 
            fontWeight:'bold'
          }}>{this.props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }  
}


//TouchableOpacity : When press every thing fade
//default value for button
ButtonOpacityComponent.defaultProps = {
  'borderRadius':4,
  'paddingTop':15,
  'paddingBottom':15,
  'borderWidth':1,
  'borderColor':'#f2f2f2',
  'textAlign':'center',
  'color':'#128efb',
  'title':'Not Defined',
  'backgroundStyle':'white',
  'backgroundColor':['#23bbe8','#00e2da']
}