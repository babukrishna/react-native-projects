import React, {Component} from 'react';
import {TouchableHighlight, Text} from 'react-native';
//import { LinearGradient } from 'expo';

export default class ButtonHighlightComponent extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      'backgroundColor': this.props.backgroundStyle == 'blue'? this.props.backgroundColor : ['#ffffff','#ffffff'],
      'color': this.props.backgroundStyle == 'blue'? '#ffffff':this.props.color
    }
  }

  render(){
    return(
      <TouchableHighlight 
        style={{
          overflow: 'hidden',
          borderColor: this.props.borderColor,
          borderRadius: this.props.borderRadius,
          borderWidth: this.props.borderWidth
        }}>
        <Text>test</Text>
      </TouchableHighlight>
    )
  }  
}
//ToughHighlight : When press only background will fade little not the text
//default value for button
ButtonHighlightComponent.defaultProps = {
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