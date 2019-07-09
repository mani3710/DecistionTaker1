import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import FirebaseSever from '../Firebase/index';
import Firebase from 'firebase';
import color from '../Color';
import { Icon,Card } from 'react-native-elements';

export default class DashBoardScreen extends Component {
    static navigationOptions = {
        title: "Task Board",
        headerStyle: {
            backgroundColor: "#333",
        },
        headerTintColor: "yellow"
    }
    onMoveToYesOrNOComponents(){
        this.props.navigation.navigate("YesOrNoComponents");

    }
    onMoveToFeatherComponent(){
        this.props.navigation.navigate("FurtherComponents");

    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: color.ThemeColor }}>

                {/* DashBoard Task */}


                <View style={{ flexDirection: "row" ,width:"100%"}}>
                    {/* YesOrNO Task */}
                    <Card 
                    
                    containerStyle={{ flex:1, alignItems: "center", justifyContent: "center",elevation:2 ,backgroundColor: color.LightGrey,borderColor:color.ThemeColor , }}>
                        <TouchableOpacity 
                        onPress={()=>{this.onMoveToYesOrNOComponents()}}
                        >
                            <View  style={{ justifyContent: "center",width:100,height:100 }}>
                                <Icon
                                    name="call-split"
                                    size={45}
                                    color={color.TextColor}
                                ></Icon>
                            </View>
                            <Text style={{ color: color.TextColor, fontSize: 25,alignSelf:"center" }}>Yes/No</Text>
                            </TouchableOpacity>
                    </Card>
                      
                    {/* YesOrNO Task */}
                    <Card containerStyle={{ flex:1, alignItems: "center", justifyContent: "center",elevation:2 ,backgroundColor: color.LightGrey,borderColor:color.ThemeColor , }}>
                    <TouchableOpacity 
                        onPress={()=>{this.onMoveToFeatherComponent()}}
                        >
                            <View style={{ justifyContent: "center",width:100,height:100 }}>
                                <Icon
                                    name="watch"
                                    size={45}
                                    color={color.TextColor}
                                ></Icon>
                            </View>
                            <Text style={{ color: color.TextColor, fontSize: 25,alignSelf:"center" }}>Further</Text>
                       </TouchableOpacity>
                    </Card>


                </View>


            </View>
        );
    }
}