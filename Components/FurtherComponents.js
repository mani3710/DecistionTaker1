import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
export default class FurtherComponents extends Component {
    static navigationOptions(){
        title=""
    }
   
    render() {
        return (
           <View>
               <Text>further Components</Text>
           </View> 
        );
    }
}