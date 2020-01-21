import React, { Component } from "react";
import { CheckBox, Button, Text } from 'react-native-elements';

import ButtonHighlightComponent from './../common/component.button.highlight';
import ButtonOpacityComponent from './../common/component.button.opacity';
import InputBoxComponent from './../common/component.input';
import Carousel from 'react-native-carousel-view';

import {View, StyleSheet, TextInput, Image} from "react-native";

export default class ComponentCreateAccount extends Component {
  constructor(props){
    super(props);
    this.state =  {
      data:[{
        img:'../../images/slider-img.png',
        text:'Do more in less time and help your students succeed'
      },{
        img:'../../images/slider-img.png',
        text:'Do more in less time and help your students succeed'
      },{
        img:'../../images/slider-img.png',
        text:'Do more in less time and help your students succeed'
      }]
    }
  }

  viewMeasure(event){
    this.setState({
      carouselWidth: event.nativeEvent.layout.width,
      carouselHeight: event.nativeEvent.layout.height
    })
  }

  slide(x){
    
  }

  render() {
    return(
      <View style={{flex:1}}>
        <View style={styles.container} onLayout={(event)=>this.viewMeasure(event)}>
          <Carousel
            delay={2000}
            width={this.state.carouselWidth}
            height={this.state.carouselHeight}
            indicatorAtBottom={true}
            indicatorSize={10}
            animate={false}
            indicatorColor="#0084fa">
            {this.state.data.map((x,index)=>{
              return(
                <View key={index} style={styles.contentContainer}>
                  <View style={{flex:7, overflow:'hidden', justifyContent: "space-around"}}>
                    <Image source={require('../../images/slider-img.png')}
                      style={{width:this.state.carouselWidth, resizeMode: 'contain'}}/>
                  </View>
                  <View style={{flex:1, alignItems:'center', paddingBottom:10, paddingTop:10}}>
                    <Text style={{color:'#868da8', fontSize: 16, fontWeight:'bold', textAlign:'center'}}>{x.text} {index}</Text>
                  </View>
                </View>
              )  
            })}
          </Carousel>
        </View>
        
        <View style={{flex:1, paddingTop: 20, paddingLeft: 20, paddingRight: 20}}>
          <View>
            <ButtonHighlightComponent 
              title="Create an Account"
              backgroundStyle="blue"/>
          </View>
          <View style={{paddingTop: 15}}>
            <ButtonHighlightComponent 
              title="Sign In"/>
          </View>
          <View style={{paddingTop: 20, alignItems:'center'}}>
            <Text style={{color:'#a8adb4', fontSize:10}}>Term of Serice</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1
  },
});
