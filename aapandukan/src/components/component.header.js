import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Center from './utils/Center';
import ComponentSidebar from './component.sidebar';

export default class ComponentHeader extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <Header>
        <Left>
          <Button 
            transparent
            onPress={()=>this.props.drawer()}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Aapan Dukan</Title>
        </Body>
        <Right>
          <Button transparent>
          <Icon name='cart' />
        </Button>
        </Right>
      </Header>
    )
  }
}