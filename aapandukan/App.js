import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import { Container } from 'native-base';
import Drawer from 'react-native-drawer'

import ComponentHeader from './src/components/component.header'; 
import ComponentFooter from './src/components/component.footer'; 
import ComponentBody from './src/components/component.body';
import ComponentSidebar from './src/components/component.sidebar';

export default class App extends Component {
  constructor(){
    super();
  }
  
  closeDrawer = () => {
    this.drawer.close()
  }

  openDrawer = () => {
    this.drawer.open()
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<ComponentSidebar />}
        type="overlay"
        openDrawerOffset={0.2}
        styles={drawerStyles}
        tapToClose={true}
        onClose={() => this.closeDrawer()} >
        <Container>
          <ComponentHeader drawer={this.openDrawer} />
          <ComponentBody/>
          <ComponentFooter/>
        </Container>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: {backgroundColor:'#fff', shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
}