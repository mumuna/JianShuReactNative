import {
    StackNavigator,
}from 'react-navigation';
import React from 'react';

import {
    Platform,
    AsyncStorage
}from 'react-native';
import Storage from 'react-native-storage';

//系统时iOS
global.iOS =(Platform.OS === 'ios');
//系统是安卓
global.Android = (Platform.OS === 'android');
import AboutFlexbox from './page/AboutFlexbox';
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';
import DiscoveryPage from './page/DiscoveryPage';
import MessagePage from './page/MessagePage';
import MyPage from './page/MyPage';
import BasePage from './page/BasePage';
import RegisterPage from './page/RegisterPage';
import SpecialTopic from './page/SpecialTopic';

var storage = new Storage({
    //最大容量 默认1000条数据循环存储
    size:1000,
    //存储引擎：对于RN使用AsyncStorage,对于web使用window.localStorage
    //如果不知定数据，只会保存在内存中，重启后即丢失
    storageBackend:AsyncStorage,
    //数据过期时间，默认一整天（1000 *3600*24毫秒），设为null则永不过期
    defaultExpires:null,
    //读写时候在内存中缓存数据。默认启用
    enableCache:true,
})
global.storage = storage;
const MyApp = StackNavigator({
    LoginPage:{
        screen:LoginPage,
        navigationOptions:{
            gesturesEnabled:true,
            headerTitle:null,
        }
    },
    RegisterPage:{
        screen:RegisterPage,
        navigationOptions:{
            gesturesEnabled:true,
            headerTitle:null
        }
    },
    BasePage:{
        screen:BasePage,
        navigationOptions:{
            gesturesEnabled:true,
            headerTitle:null
        }
    },

    AboutFlexbox: {
        screen:AboutFlexbox,
        navigationOptions: {
            gesturesEnabled: true,
            headerTitle: null,
        }
    },
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            gesturesEnabled:true,
            headerTitle:null
        }
    },
    DiscoveryPage:{
        screen:DiscoveryPage,
        navigationOptions:{
            gesturesEnabled:true,
            headerTitle:null
        }
    },
    MessagePage:{
        screen:MessagePage,
        navigationOptions:{
            gesturesEnabled:true,
            headerTitle:null
        }
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            gesturesEnabled:true,
            headerTitle:null
        }
    },
    SpecialTopic:{
        screen:SpecialTopic,
        navigationOptions:{
            gesturesEnabled:true,
            headerTitle:null
        }
    }


}, {
    mode: 'card',// 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'none',//// 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
});
export  default MyApp;