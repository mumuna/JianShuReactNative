'use strict';
import React,{Component}from 'react';
import {View,StyleSheet,Text,PixelRatio,Platform, Image}from 'react-native';


import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import TabNavigator from 'react-native-tab-navigator';

import HomePage from './HomePage';
import DiscoveryPage from './DiscoveryPage';
import MessagePage from './MessagePage';
import MyPage from './MyPage';

let navigator;

export default class BasePage extends Component{
    constructor(props){
        super(props);
        this.state = {selectedTab:'首页'}
        navigator = this.props.navigation;
    }
    render(){
        return(
            <View style={styles.container}>
             <TabNavigator>
                 <TabNavigator.Item
                     selected={this.state.selectedTab ==='首页'}
                     title='首页'
                     renderIcon = {()=><Image style={styles.icon} source = {require('../image/home_unselected.png')}/>}
                      renderSelectedIcon={()=><Image style={styles.icon} source = {require('../image/homeselected.png')}/>}
                     onPress={()=>this.setState({selectedTab:'首页'})}>
                 <HomePage navigator={this.props.navigator}/>
                 </TabNavigator.Item>
                 <TabNavigator.Item
                     selected={this.state.selectedTab === '发现'}
                     title = '发现'
                     renderIcon = {() => <Image style={styles.icon} source={require('../image/searchg.png')}/>}
                     renderSelectedIcon = {() =><Image style={styles.icon} source={require('../image/discovery.png')}/>}
                     onPress={() => this.setState({selectedTab:'发现'})}>
                   <DiscoveryPage navigator={this.props.navigator}/>
                 </TabNavigator.Item>
                 <TabNavigator.Item
                     selected={this.state.selectedTab === '消息'}
                     title = '消息'
                     renderIcon = {() =><Image style={styles.icon} source={require('../image/messageunselected.png')}/>}
                     renderSelectedIcon = {() => <Image style={ styles.icon} source={require('../image/messageselected.png')}/>}
                     onPress={() => this.setState({selectedTab:'消息'})}
                 >
                     <MessagePage navigator={this.props.navigator }/>
                 </TabNavigator.Item>
                 <TabNavigator.Item
                     selected={this.state.selectedTab === '我的'}
                     title = '我的'
                     renderIcon = {() => <Image style={styles.icon} source={require('../image/my.png')}/>}
                     renderSelectedIcon = {() =><Image style={styles.icon} source={require('../image/myselected.png')}/>}
                     onPress={() => this.setState({selectedTab:'我的'})}
                 >
                     <MyPage navigator={this.props.navigator }/>
                 </TabNavigator.Item>
             </TabNavigator>
            </View>
        );
    }
}
export function getNavigator() {
    return navigator;
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    icon:{
      width:px2dp(40),
        height:px2dp(40),
        resizeMode:'stretch',
        marginTop:px2dp(20),
    }

});