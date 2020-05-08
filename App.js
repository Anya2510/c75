import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import { TextInput } from 'react-native-gesture-handler';


export default class App extends React.Component {
  render(){
    return (

        <AppContainer />

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Transaction"){
        return(
          <Image
          source={require("./assets/book.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "Search"){
        return(
          <Image
          source={require("./assets/searchingbook.png")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);
const switchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})
const AppContainer=createAppContainer(switchNavigator)
<KeyboardAvoidingView>
  <View>
    <Image
    source={
      require("../assets/booklogo.jpg")
    }
    style={{width:200, height:200}}
    />
    <Text style={{textAlign:'center',fontSize:30}}>Wily</Text>
  </View>
  <View>
    <TextInput style={styles.loginBox} 
    placeholder="abc@example.com"
    keyboardType='email-address'
    onChangeText={(text)=>{
      this.setState({emailId:text})
    }}
    ></TextInput>
    <TextInput
    style={styles.loginBox}
    secureTextEntry={true}
    placeholder="enter password"
    onChangeText={(text)=>{
      this.setState({password:text})
    }}
    ></TextInput>
  </View>
  <View>
<TouchableOpacity style={{height:30, width:90, borderWidth:1, marginTop:20, paddingTop:5}}
onPress={()=>{
  this.login(this.state.emailId,this.state.password)
}}
></TouchableOpacity>
  </View>
</KeyboardAvoidingView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBox:{
    width:300,
    height:40,
    borderWidth:1.5,
    fontSize:20,
    margin:10,
    paddingLeft:10
        }
});
