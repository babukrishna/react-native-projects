import React, { Component } from 'react';
import { Container, Header, Footer, Title, FooterTab, Content, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';
import Center from './utils/Center';
import ComponentSidebar from './component.sidebar';

export default class ComponentFooter extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}