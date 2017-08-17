import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import APP from './APP';

//发布阶段去掉日志
if (!__DEV__){
    global.console ={
        info:() =>{

        },
        log:() =>{

        },
        warn:() =>{

        },
        error:() =>{

        },
    };
}
AppRegistry.registerComponent('aaa',() =>APP);