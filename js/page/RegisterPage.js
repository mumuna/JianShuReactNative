'use strict';
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Platform
}from 'react-native';
import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import Button from '../components/Button';
import TimerButton from '../components/TimerButton';
export default class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone:'',
            verifyCode:''
        };
        this._GetVerifyCode = this._GetVerifyCode.bind(this);
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={{marginTop:theme.screenHeight*0.3, marginHorizontal: px2dp(40), height: px2dp(200)}}>
                    <View style={styles.textInputView}>
                        <Image style={styles.image} source={require('../image/companyservice_hg.png')}/>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'请输入手机号'}
                            returnKeyType='next'
                            underlinecolorandroid={'transparent'}
                            value={this.state.phone}
                            onChangeText={(phone) =>{
                                this.setState({phone:phone})
                            }}
                            onSubmitEditing={(event) => {
                                this.verifycode.focus();
                            }}
                        />
                         <TimerButton timerCount = {60}
                                      textStyle={{color:'red'}}
                                      onClick={(shouldStartCountting) =>{
                                          this._GetVerifyCode( shouldStartCountting);
                                      }}


                         />
                    </View>
                    <View style={styles.textInputView}>
                        <Image style={styles.image} source={require('../image/companyservice_jcjy.png')}/>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'请输入验证码'}
                            returnKeyType='done'
                            ref={(view) => this.verifycode = view}
                            value={this.state.verifyCode}
                            onchangetext={(verifyCode)=>{
                                this.setState({verifycode:verifyCode})
                            }}
                        />
                    </View>
                </View>
                <Button style={[styles.login, {
                    marginHorizontal: px2dp(40),
                    backgroundColor: 'blue',
                    marginTop: px2dp(50),
                }]} onPress={this._Register.bind(this)}>
                    <Text style={{flex: 1, fontSize: px2dp(30), color: '#fff', textAlign: 'center'}}>注册</Text>
                </Button>

            </View>
        );
    }
    _Register(){
        console.log('点击注册');
    }
    _GetVerifyCode( shouldStartCountting){
         console.log('获取验证码');
         if(!this.state.phone)
         {
             shouldStartCountting(false);
             alert('手机号不能为空');
             return;
         }
         else
         {
             //调用获取验证码的网络请求如果成功则
             shouldStartCountting(true);
         }
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    textInputView:{
        height:px2dp(100),
        flexDirection:'row',
        alignItems:'center',
        borderColor:'gray',
        borderRadius:px2dp(5),
        borderWidth:px2dp(0.6),
        marginHorizontal:px2dp(0)
    },
    login:{
        flexDirection:'row',
        height:px2dp(80),
        borderRadius:px2dp(10),
        alignItems:'center'
    },
    image:{
        marginLeft:px2dp(30),
        height:px2dp(35),
        width:px2dp(35)
    },
    textInput:{
        paddingLeft:px2dp(15),
        fontSize:px2dp(32),
        color:'#444444',
        flex:1,
        height:(Platform.OS ==='ios')?px2dp(100):null
    }
});