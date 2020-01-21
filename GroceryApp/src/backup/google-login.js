import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, DeviceEventEmitter} from 'react-native';
import Firebase from 'react-native-firebase';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
//import RNFirebasePhoneAuth from 'react-native-firebase-phone-auth';

type Props = {};
export default class App extends Component<Props> {
  googleSignin = async() =>{
    try {
      // Add any configuration settings here:
      await GoogleSignin.configure();
      
      const data = await GoogleSignin.signIn();
      console.log(data)
      // create a new firebase credential with the token
      const credential = Firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      console.log(credential)
      // login with credential
      const currentUser = await Firebase.auth().signInAndRetrieveDataWithCredential(credential);
      
      console.info(JSON.stringify(currentUser.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Button title="Google Login" onPress={()=> this.googleSignin()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
