 import React, { Component } from 'react';
 import {View,Text,TextInput,TouchableOpacity,Image,ActivityIndicator} from 'react-native';
 import Logo from '../assets/idea.png'

export default class SplashScreen extends Component {
    componentDidMount(){
        setTimeout((()=>{
            console.log("working");
            this.props.navigation.navigate("StackNav");
        }),1500)
    }
  
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#212121", justifyContent: "center", alignItems: "center" }}>
                <Image source={Logo}></Image>
                <ActivityIndicator
                animating={true}
                size="large"
                color="yellow"
                />
            </View>
        );
    }
}