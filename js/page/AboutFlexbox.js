'use strict';
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image
}from 'react-native';
import px2dp from '../utils/px2dp';
export default class AboutFlexbox extends Component{
    render(){
        return(
          <View style={styles.container}>
             <View style={styles.style1}>
                 <View style={{flex:1,height:px2dp(100),backgroundColor:'#f69292',borderRadius:px2dp(10)}}>
                    <Image style={{position:'absolute',left:px2dp(270), top:px2dp(40)}}
                     source={require('../image/search.png')}/>
                    <TextInput style={{height:px2dp(100),flex:1, color:'#fff',fontSize:px2dp(24)}}
                               placeholder='搜索'
                               placeholderTextColor='#fff'
                               textAlign='center'
                    />
                 </View>
             </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    style1:{
        backgroundColor:'#F36363',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:px2dp(12),
        paddingLeft:px2dp(40),
        paddingBottom:px2dp(12),
        paddingRight:px2dp(40)
    }
});