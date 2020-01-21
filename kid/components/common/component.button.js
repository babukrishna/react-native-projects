import React, {Component} from 'react';
import {TouchableHighlight, Text} from 'react-native';

export default class ComponentButton extends Component{
  constructor(props){
    super(props);

    this.state = {
      'backgroundColor': this.props.backgroundStyle == 'blue'? this.props.backgroundColor : ['#ffffff'],
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
          borderWidth: this.props.borderWidth,
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: this.props.backgroundColor
        }}>
          <Text style={{
            color:this.state.color, 
            fontWeight:'bold',
            textAlign: 'center'
          }}>{this.props.title}</Text>
      </TouchableHighlight>
    )
  }  
}
//ToughHighlight : When press only background will fade little not the text
//default value for button
ComponentButton.defaultProps = {
  'borderRadius':4,
  'paddingTop':15,
  'paddingBottom':15,
  'borderWidth':1,
  'borderColor':'#f2f2f2',
  'textAlign':'center',
  'color':'#128efb',
  'title':'Not Defined',
  'backgroundStyle':'white',
  'backgroundColor':'#24bbe8'
}