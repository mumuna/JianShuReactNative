'use strict';
import React,{Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, View,Platform,PixelRatio,Image,Keyboard} from 'react-native';
import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import LatestRecord from './LatestRecord';
import LatestComment from './LatestComment';
import HotTopic from './HotTopic';
import Member from './Member';
export default class SpecialTopic extends Component{
    constructor(props){
        super(props);
        this.state={
           title:''
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.actionBar,{justifyContent: 'space-between'}]}>
                    <TouchableOpacity style={styles.navItem} onPress={this._back.bind(this)}>
                     //  <Image source={require('../image/back.png')}/>
                        <Text>返回</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:px2dp(40),height:px2dp(40)}} source={require('../image/photo.png')}/>
                        <Text style={{fontSize:px2dp(35),marginLeft:px2dp(15)}}>{this.state.title} </Text>
                        <TouchableOpacity style={{marginLeft:px2dp(10)}} >
                            <Image style={{width:px2dp(40),height:px2dp(40)}} source={require('../image/dollar.png')}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.navItem,{marginRight:px2dp(20)}]}>
                        <Image source={require('../image/more.png')}/>

                    </TouchableOpacity>
                </View>
                <ScrollableTabView
                    style={{width:theme.screenWidth,height:theme.screenHeight-theme.actionBar.height}}
                    tabBarUnderlineStyle = {{backgroundColor:'red',height:px2dp(3)}}
                    tabBarBackgroundColor= 'white'
                    tabBarActiveTextColor = 'red'
                    tabBarInactiveTextColor = 'gray'
                    tabBarTextStyle = {{fontSize:px2dp(30)}}
                    initialPage={2}
                     onChangeTab = {()=>{
                         Keyboard.dismiss()
                     }}>
                    <LatestRecord tabLabel = '最新收录'/>
                    <LatestComment tabLabel = '最新评论'/>
                    <HotTopic tabLabel = '热门'/>
                    <Member tabLabel = '成员'/>

                </ScrollableTabView>
            </View>
        );
    }
    _back(){
         this.props.navigation.goBack();
    }
    //传值
    componentWillMount(){
        const {params} = this.props.navigation.state;
        var title =params.title;
        this.setState({
            title:title
        })
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    actionBar:{
        height:theme.actionBar.height,
        backgroundColor:theme.actionBar.backgroundColor,
        paddingTop:(Platform.OS === 'ios')? px2dp(35):0,
        flexDirection:'row',
        alignItems:'center'
    },
    navItem:{
        height:theme.actionBar.height,
        width:px2dp(80),
        justifyContent:'center',
        alignItems:'center'
    }

});