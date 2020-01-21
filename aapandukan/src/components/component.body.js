import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Center from './utils/Center';

import ComponentStore from './component.store';
import ComponentLogin from './component.login';

export default class ComponentHeader extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Content>
        <ComponentLogin />
      </Content>
    )
  }
}