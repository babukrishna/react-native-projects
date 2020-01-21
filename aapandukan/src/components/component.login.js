import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Body, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

export default class ComponentLogin extends Component {
  
  login(){
    console.log('hi')
    firebase.auth().signInAnonymously()
    .then((user) => {
      console.log(user.isAnonymous);
    });
  }

  googleLogin = async () => {
    try {
      // Add any configuration settings here:
      await GoogleSignin.configure();
      
      const data = await GoogleSignin.signIn();
      console.log(data)
      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      console.log(credential)
      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
      
      console.info(JSON.stringify(currentUser.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  }
 
  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input />
        </Item>

        <Content style={{paddingLeft:15, paddingRight:15, paddingTop:30}}>
          <Button primary full onPress={()=>this.login()}>
            <Text>Login</Text>
          </Button>
        </Content>

        <Content style={{paddingLeft:15, paddingRight:15, paddingTop:40, paddingBottom:30}}>
          <Grid>
            <Row style={{alignItems:'center', justifyContent:'center'}}>
              <Text>Login with social network account</Text>
            </Row>
          </Grid>
          <Button iconLeft info full style={{marginTop: 20}}>
            <Icon name='facebook' type="MaterialCommunityIcons" />
            <Text>Login with Facebook</Text>
          </Button>
          <Button iconLeft danger full style={{marginTop: 20}} onPress={()=> this.googleLogin()}>
            <Icon name='google-plus' type="MaterialCommunityIcons"/>
            <Text>Login with Google +</Text>
          </Button>
        </Content>

        <Content style={{paddingLeft:15, paddingRight:15, paddingBottom:20}}>
          <Grid>
            <Row style={{alignItems:'center', justifyContent:'center'}}>
              <Text>Don't have account</Text>
            </Row>
          </Grid>
          <Button iconLeft warning full style={{marginTop: 20}}>
            <Text>Signup</Text>
          </Button>
        </Content>
      </Form>
    );
  }
}