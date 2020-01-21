import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, Text, Badge } from 'react-native-elements';

export default class ComponentShare extends Component{
  constructor(props){
    super(props);
    this.state = {
      carouselWidth:0
    }
  }
  viewMeasure(event){
    this.setState({
      carouselWidth: event.nativeEvent.layout.width,
      carouselHeight: event.nativeEvent.layout.height
    })
  }

  bdStyle(){
    return 
  }

  render(){
    return(
      <View style={styles.mainContainer} onLayout={(event)=>this.viewMeasure(event)}>
        <View style={styles.bgContainer}>
          <Image source={require('./../../source/bg-image.png')}
            style={{width:this.state.carouselWidth, resizeMode: 'cover'}}/>
        </View>
        <View style={{
            backgroundColor:'#000',
            opacity:.5,
            position:'absolute',
            width:this.state.carouselWidth, 
            height:this.state.carouselHeight
          }}></View>
        <ScrollView style={styles.thumbContainer}>
          <View>
            <View style={styles.textContainer}>
              <Avatar
                rounded
                large
                title="All"
                titleStyle={{color:'#000', fontSize:25}}
                containerStyle={{backgroundColor:'#fff'}}
                onPress={() => console.log("Works!")}/>
            </View>

            <View style={styles.imageContainer}>
              <Avatar
                rounded
                large
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                onPress={() => console.log("image!")}/>
                <Badge 
                  value={1} 
                  textStyle={styles.badgeTitle}
                  containerStyle={styles.badgeContainer}/>
                <Text style={styles.avtarTitle}>Nishant Parasar</Text>
            </View>

            <View style={styles.imageContainer}>
              <Avatar
                rounded
                large
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                onPress={() => console.log("image!")}/>
                <Badge 
                  value={1} 
                  textStyle={styles.badgeTitle}
                  containerStyle={styles.badgeContainer}/>
                <Text style={styles.avtarTitle}>Nishant Parasar</Text>
            </View>

            <View style={styles.imageContainer}>
              <Avatar
                rounded
                large
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                onPress={() => console.log("image!")}/>
                <Badge 
                  value={1} 
                  textStyle={styles.badgeTitle}
                  containerStyle={styles.badgeContainer}/>
                <Text style={styles.avtarTitle}>Nishant Parasar</Text>
            </View>

            <View style={styles.imageContainer}>
              <Avatar
                rounded
                large
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                onPress={() => console.log("image!")}/>
                <Badge 
                  value={1} 
                  textStyle={styles.badgeTitle}
                  containerStyle={styles.badgeContainer}/>
                <Text style={styles.avtarTitle}>Nishant Parasar</Text>
            </View>

            <View style={styles.imageContainer}>
              <Avatar
                rounded
                large
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                onPress={() => console.log("image!")}/>
                <Badge 
                  value={1} 
                  textStyle={styles.badgeTitle}
                  containerStyle={styles.badgeContainer}/>
                <Text style={styles.avtarTitle}>Nishant Parasar</Text>
            </View>

            <View style={styles.imageContainer}>
              <Avatar
                rounded
                large
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                onPress={() => console.log("image!")}/>
                <Badge 
                  value={1} 
                  textStyle={styles.badgeTitle}
                  containerStyle={styles.badgeContainer}/>
                <Text style={styles.avtarTitle}>Nishant Parasar</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  },  
  bgContainer:{
    position:'absolute',
  },
  bg:{
    backgroundColor:'#000',
    opacity:0.5,
    position:'absolute',
  },  
  thumbContainer:{
    paddingTop:30,
    paddingLeft:20,
    flex:1,
  },
  imageContainer:{
    paddingTop: 15,
    width:76,
    position:'relative'
  },
  textContainer:{
    width:76
  },
  avtarTitle:{
    color:'#ffffff',
    marginTop: 5,
    textAlign:'center'
  },
  badgeTitle:{
    color:'#ffffff'
  },
  badgeContainer:{
    width:25,
    height: 25,
    backgroundColor:'#00e49e',
    position:'absolute',
    top:-80,
    right:0,
    padding:2
  }
})