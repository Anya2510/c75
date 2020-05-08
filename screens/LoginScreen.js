import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { createSwitchNavigator } from 'react-navigation'

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.loginBox}>
                    Login Screen
                </Text>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    loginBox:{
width:300,
height:40,
borderWidth:1.5,
fontSize:20,
margin:10,
paddingLeft:10
    }
})