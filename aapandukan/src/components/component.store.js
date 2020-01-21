import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Badge, H1, H2, H3, Left, Right, Body, Icon, Text, List, ListItem, Card, CardItem, Thumbnail, Variable } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Variables from './utils/Variables';

export default class ComponentStore extends Component {
  render() {
    return (
      <Content>
        <List>
          <ListItem thumbnail style={{borderBottomWidth:1, borderColor:'#ccc',marginLeft: 0, paddingRight: 10}}>
            <Left>
              <Thumbnail square source={{ uri:'http://www.picserver.org/pictures/tomato04-lg.jpg' }} 
                style={{width:150, height:150}}/>
            </Left>
            <Body>
              <Grid>
                <Row style={{marginBottom: 1, height:40}}>
                  <Icon name='currency-inr' type="MaterialCommunityIcons" style={{fontSize:25, marginTop:2}}/>
                  <H1 style={{fontWeight:'bold', marginLeft: -4}}>15</H1>

                  <Icon name='currency-inr' type="MaterialCommunityIcons" style={{marginLeft: 10, fontWeight:'normal', color:Variables.lightGrey}}/>
                  <H2 note style={{marginRight: 20, marginLeft: -4, color:Variables.lightGrey, textDecorationLine:'line-through'}}>19</H2>
                  <Badge success style={{borderRadius:4}}>
                    <Text>33% OFF</Text>
                  </Badge>
                </Row>

                <Row style={{height:'auto'}}>
                  <H2>Tomato</H2>
                </Row>
                <Row style={{height:'auto'}}>
                  <Text note>Yummy red hot tomato</Text>
                </Row>

                <Row style={{marginTop: 10}}>
                  <Left>
                    <Text>1KG</Text>
                  </Left>
                  <Right style={{display:'none'}}>
                    <Button danger style={{height:35}}>
                      <Text>ADD</Text>
                      <Icon name='add' />
                    </Button>
                  </Right>

                  <Right>
                    <Row>
                      <Button danger style={{height:35, width:48}}>
                        <Icon name='minus' type="MaterialCommunityIcons"/>
                      </Button>
                      <Text style={{paddingLeft:10, paddingRight: 10, paddingTop: 5}}>01</Text>
                      <Button danger style={{height:35, width:48}}>
                        <Icon name='add' />
                      </Button>
                    </Row>
                  </Right>
                </Row>
              </Grid>
            </Body>
          </ListItem>
        </List>
      </Content>
      
    );
  }
}