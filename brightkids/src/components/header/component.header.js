import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

export default class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.firstColumn}>
                    <Image source={require('./../../images/arrow.png')} />
                </View>
                <View style={styles.secondColumn}>
                    <Text>Bright</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstColumn:{
        position:'absolute'
    },
    secondColumn:{
        flex: 1,
        alignItems:'center'
    }
})