'use strict';
import React,{Component} from 'react';
import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform
}from 'react-native';

import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import Button from '../components/Button';
import {NavigationActions} from 'react-navigation';

export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.view1}>
                    <Button style={{marginTop:px2dp(60),marginLeft:px2dp(30),height:px2dp(50),width:px2dp(50)}}>
                        <Image  source={require('../image/close.png')}/>
                    </Button>
                    <Text style={styles.titleStyle}>简书</Text>
                    <Text style={{color:'orange' ,marginBottom:px2dp(5),height:px2dp(50),fontSize:px2dp(30),textAlign:'center'}}>上次登录方式：微信登录</Text>
                </View>
                <View style={{marginTop:px2dp(20),marginHorizontal:px2dp(40),height:px2dp(200)}}>
                    <View style={styles.textInputView}>
                         <Image style={styles.image} source={require('../image/companyservice_hg.png')}/>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'手机号或邮箱'}
                            returnKeyType='next'
                            onSubmitEditing={(event)=>{
                                this.password.focus();
                            }}
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <Image style={styles.image} source={require('../image/companyservice_jcjy.png')}/>
                        <TextInput
                           style={styles.textInput}
                           placeholder={'密码'}
                           returnKeyType='done'
                           ref = {(view) =>this.password = view}
                           secureTextEntry={true}
                        />
                    </View>
                </View>
                <Button style={[styles.login,{marginHorizontal:px2dp(40),backgroundColor:'blue', marginTop:px2dp(50),}]}  onPress={this._Login.bind(this)}>
                    <Text style={{flex:1,fontSize:px2dp(30), color:'#fff',textAlign:'center'}}>登录</Text>
                </Button>
                <Button style={[styles.login,{marginHorizontal:px2dp(100), marginTop:px2dp(20)}]}>
                    <Text style={{flex:1,fontSize:px2dp(30), color:'gray',textAlign:'center'}}>登录遇到问题？</Text>
                </Button>
                <View style={{marginTop:px2dp(80), flex:1}}>
                    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <View style={{marginLeft:px2dp(130),backgroundColor:'gray',height:px2dp(1),width:px2dp(90)}}></View>
                        <Text style={{fontSize:px2dp(30),color:'gray'}}>社交账号直接登录</Text>
                        <View style={{backgroundColor:'gray',height:px2dp(1),width:px2dp(90),marginRight:px2dp(130)}}></View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:px2dp(30)}}>
                        <Button style={[styles.sheJiao,{marginLeft:px2dp(90)}]}>
                            <Text >微信</Text>
                        </Button>
                        <Button style={styles.sheJiao}>
                            <Text >QQ</Text>
                        </Button>
                        <Button style={styles.sheJiao}>
                            <Text >微博</Text>
                        </Button>
                        <Button style={[styles.sheJiao,{marginRight:px2dp(90)}]}>
                            <Text >其他</Text>
                        </Button>
                    </View>
                    <View style={{height:px2dp(90),position:'absolute',bottom:px2dp(10),left:px2dp(150),right:px2dp(150),flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                         <Button onPress={this._Register.bind(this)}>
                             <Text style={{color:'orange',fontSize:px2dp(30)}}>新用户注册</Text>
                         </Button>
                        <View style={{width:px2dp(0.6),backgroundColor:'gray',height:px2dp(40)}}>
                        </View>
                        <Button>
                            <Text style={{color:'gray',fontSize:px2dp(30)}}>随便看看</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
    _Login(){
        console.log('点击登陆');
        //调登陆的接口
        //跳转
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'BasePage'})
            ]
        });
        const {dispatch} = this.props.navigation;
        dispatch(resetAction);
    }
    _Register(){
        console.log('点击注册新用户');
        const {navigate} = this.props.navigation;
        navigate('RegisterPage');
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    view1:{
        justifyContent:'center',
        height:theme.screenHeight*1/3-px2dp(40)
    },
    titleStyle:{
        flex: 1,
        fontSize:px2dp(85),
        marginTop:px2dp(90),
        height:px2dp(100),
        textAlign:'center',
        color:'orange'
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
    },
    sheJiao:{
        width:px2dp(90),
        height:px2dp(90),
        borderRadius:px2dp(45),
        borderColor:'gray',
        borderWidth:px2dp(0.6),
        justifyContent:'center',
        alignItems:'center'
     }
});