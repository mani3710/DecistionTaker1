import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import colors from '../Color';
import { Icon, Button } from 'react-native-elements';
import LOGO from '../assets/idea.png';
import { Dialog } from 'react-native-simple-dialogs';
import YesOrNO from '../assets/yesno.gif';
import Voice from 'react-native-voice';



export default class YesOrNoComponents extends Component {
    static navigationOptions = {
        title: "Make Your Decision",
        headerStyle: {
            backgroundColor: colors.ThemeColor
        },
        headerTintColor: colors.TextColor

    }
    constructor(props) {
        super(props);
        this.state = {
            isVisibleLoadingDialog: false,
            result: "Yes",
            // yesOrNo: false,
            isShowOKBtn: false,
            isShowResult: false,
            question:"",
            isShowWarning:false,
            recognized: '',
            started: '',
            results: [],
        }

        Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
      }

      onSpeechStart(e) {
        this.setState({
          started: '√',
        });
      };

      onSpeechResults(e) {
        this.setState({
          results: e.value,
        });
      }
    async _startRecognition(e) {
        this.setState({
          recognized: '',
          started: '',
          results: [],
        });
        try {
          await Voice.start('en-US');
        } catch (e) {
          console.error(e);
        }
      }
    changeText() {
        if (this.state.isShowResult) {
            return (
                <Text style={{ fontSize: 100, color: colors.TextColor, alignSelf: "center" }}>{this.state.result}</Text>
            );
        } else {
            return(
            <Image
                style={{ height: 150, width: 150,alignSelf:"center"}}
                source={YesOrNO}
            ></Image>
            );
        }
    }
    onPressSpin() {
        if(this.state.question){
        this.setState({ isVisibleLoadingDialog: true });
        var min = 0;
        var max = 1;
        var randomNUM = Math.floor(Math.random() * (+max - +min)) + +min;
        if(randomNUM == 0){
            this.setState({result : "No"})
        }
        setTimeout(() => {
            this.setState({ isShowResult: true,isShowOKBtn:true });
        }, 3000)



        console.log("random", randomNUM);
    }else{
        this.setState({isShowWarning:true});
    }

       
    }
    showOKBTN() {
        if (this.state.isShowOKBtn) {
            return (
                <Text
                    onPress={() => this.setState({ isVisibleLoadingDialog: false })}
                    style={{ marginTop: 15, alignSelf: 'flex-end', fontSize: 20, padding: 10, }}>OK</Text>
            );
        } else {
            return null;
        }
    }

   

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: colors.ThemeColor, alignContent: "center" }}>
                    <Text
                        style={{ fontSize: 12, color: "#757575", alignSelf: "center", marginTop: 20, }}>
                        What's in your mind ?
               </Text>
                    <TextInput
                        multiline={true}
                        
                        onChangeText={(Text)=>this.setState({question:Text})}
                        style={{ color: "#e0e0e0", alignSelf: "center", fontSize: 18, fontWeight: "bold", marginTop: 15 }}
                        placeholder="Type......."
                        value={this.state.question}
                    />
                    
                     <Icon
                     onPress={()=>this.onStartVoiceRecord()}
                        containerStyle={{ alignSelf: "center", marginTop: 30, }}
                        name="settings-voice"
                        size={50}
                        color={colors.TextColor}
                    ></Icon>

                    <Icon
                        containerStyle={{ alignSelf: "center", marginTop: 30, }}
                        name="call-split"
                        size={300}
                        color={colors.TextColor}
                    ></Icon>
                    <Button
                        title="Spin"
                        titleStyle={{ color: colors.TextColor, fontWeight: "bold", fontSize: 20, }}
                        containerStyle={{ alignSelf: "center" }}
                        buttonStyle={{ backgroundColor: colors.LightGrey, marginTop: 25, width: 200, height: 100 }}
                        onPress={() => this.onPressSpin()}
                    ></Button>
                    <Dialog
                        contentStyle={{ backgroundColor: colors.ThemeColor }}
                        visible={this.state.isVisibleLoadingDialog}
                        onTouchOutside={() => this.setState({ isVisibleLoadingDialog: false })} >

                        {/* <Image
                            

                            style={{ height: 150, width: 150, alignSelf: "center", borderRadius: 150 / 2, }}
                            source={YesOrNO}
                        ></Image>
                        {console.log("resul",this.state.result) } */}
                        {/* <Text style={{ fontSize: 100, color: colors.TextColor, alignSelf: "center" }}>{this.state.result}</Text> */}
                        {this.changeText()}
                        {this.showOKBTN()}


                    </Dialog>

                    <Dialog
                        contentStyle={{ backgroundColor: colors.ThemeColor }}
                        visible={this.state.isShowWarning}
                        onTouchOutside={() => this.setState({ isShowWarning: false })} >
                        <View>

                      <Text style={{alignSelf:"center",marginTop:10,fontSize: 25,color:colors.TextColor}}>
                          Enter the Question !
                      </Text>
                      <Text 
                      onPress={()=>this.setState({isShowWarning:false})}
                      style={{fontSize:15,alignSelf:"flex-end",marginTop:15}}>OK</Text>

                      </View>



                    </Dialog>

                </View>

            </View>
        );
    }
}