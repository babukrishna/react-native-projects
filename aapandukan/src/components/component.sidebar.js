import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, List, ListItem, Card, CardItem, Thumbnail } from 'native-base';

export default class ComponentSidebar extends Component{
  render() {
    return (
      <Content>
        <List>
          <ListItem>
            <Text>Krishna Babu</Text>
            <Text note numberOfLines={1}>Welcome to Aapan Dukan . .</Text>
          </ListItem>
          <ListItem>
            <Text>Store</Text>
          </ListItem>
          <ListItem>
            <Text>Shopping Cart</Text>
          </ListItem>
          <ListItem>
            <Text>Order History</Text>
          </ListItem>
          <ListItem>
            <Text>My Account</Text>
          </ListItem>
          <ListItem>
            <Text>Help</Text>
          </ListItem>
          <ListItem>
            <Text>About</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}