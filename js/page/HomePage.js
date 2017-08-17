//首页
'use strict';
import React,{Component}from 'react';
import {View,StyleSheet,Text,Platform,PixelRatio, TouchableOpacity, Image, TextInput,FlatList}from 'react-native'

import theme from '../config/theme';
import px2dp from '../utils/px2dp';
import {getNavigator} from './BasePage';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';
var pageIndex = 1;
var canLoadMore = true;
var searched = false;

let navigator;

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            input:'',
            listData:[{title:'简友圈',content:'',image:''},{title:'iOS Developer',content:'开始用Swift开发iOS10-16介绍静态Table Views，UI',image:''},{title:'上班这点事儿',content:'怎么看待职场挑毛病',image:''},{title:'旅游',content:'长岛之旅',image:''},{title:'Milton Erickon',content:'重新开始',image:''},],
            refreshing:false,
        }
        navigator = this.props.navigation;
    }
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.actionBar}>
                  <TouchableOpacity
                      style={styles.navigationLeft}
                      onPress={this._addAttention.bind(this)}
                  >
                      <Image source={require('../image/my.png')}/>
                  </TouchableOpacity>
                  <Text style={styles.navigationTitle}>全部关注</Text>
                  <View style={{height:theme.actionBar.height,width:px2dp(80)}}></View>
              </View>
                <View style={{height:px2dp(90),paddingVertical:px2dp(10), paddingHorizontal:px2dp(10)}}>
                    <View style={{flex:1,backgroundColor:theme.lightGray,borderRadius:px2dp(35),flexDirection:'row',alignItems:'center'}}>
                        <Image style={{position:'absolute',left:theme.screenWidth*1/5,width:px2dp(30),height:px2dp(30)}} source={require('../image/searchg.png')}/>
                        <TextInput
                            style={styles.TextInput}
                            placeholder='搜索简书上的内容和朋友'
                            placeholderTextColor='gray'
                            multiline={false}
                            returnKeyType='search'
                            underlineColorAndroid={'transparent'}
                            textAlign='center'
                            clearButtonMode='always'
                            onSubmitEditing={this._search.bind(this)}
                            onChangeText={(input) =>{
                                this.setState({input});
                                if (input == ''&& searched){
                                    searched = false;
                                    //网络请求


                                }

                            }}
                        />
                    </View>
                </View>
                <FlatList
                       data = {this.state.listData}
                       renderItem = {this._renderItemComponent}
                       keyExtractor = {(item,index) => index}
                       onEndReached={this._onEndReached}
                       onRefresh={this._onRefresh}
                       refreshing={this.state.refreshing}
                       onEndReachedThreshold={0.1}
                       getItemLayout = {(data,index) =>(
                           { length:px2dp(90),offset:px2dp(90)*index,index }
                           )} />
            </View>
        );
    }
    _renderItemComponent =({item,index})=>{
        return(
            <View style={{height:px2dp(160)}}>
              <View style={{flexDirection:'row',alignItems:'center',height:px2dp(160)}}>
                <Image style={{marginLeft:px2dp(40),width:px2dp(110),height:px2dp(110),borderRadius:px2dp(55)}} source={require('../image/photo.png')}/>
                <View style={{height:px2dp(100),marginLeft:px2dp(40),flex:1}}>
                    <Text style={{fontSize:px2dp(36),marginTop:px2dp(5)}}>{item.title}</Text>
                    <Text style={{position:'absolute',bottom:px2dp(5), color:'gray',fontSize:px2dp(26)}} numberOfLines={1}>{item.content}</Text>
                </View>
                  <TouchableOpacity style={{marginLeft:px2dp(40),marginRight:px2dp(40),width:px2dp(30),height:px2dp(30)}}
                                    onPress={()=>this._clickItem(item)}>
                      <Image  source={require('../image/open.png')}/>
                  </TouchableOpacity>

              </View>
                <View style={{backgroundColor:'gray',position:'absolute',left:px2dp(180),right:0,bottom:px2dp(1),height:px2dp(0.6)}}></View>
            </View>
        );
    }
    _onRefresh =() =>{
        pageIndex = 1;
        this.setState({
            refreshing:true
        })
        //网络请求后要设置refreshing为false

      this.setState({
          refreshing:false,
      })

    }
    _onEndReached = () =>{
        if (pageIndex * 20 < this.state.total && canLoadMore){
            canLoadMore = false;
            pageIndex = pageIndex+1;
            //网络请求
            canLoadMore = true;
        }

    }
    _addAttention(){
        console.log('添加关注');
    }
    _search(){
        console.log('搜索');
    }
    _clickItem(item){
       alert('点击的事第'+item.title);
     getNavigator().navigate('SpecialTopic',{title:item.title})
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
        alignItems:'center',
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#c4c4c4'
    },
    navigationLeft:{
        height:theme.actionBar.height,
        width:px2dp(80),
        justifyContent:'center',
        alignItems:'center'
    },
    navigationTitle:{
        flex:1,
        textAlign:'center',
        color:theme.actionBar.color,
        fontSize:theme.actionBar.fontSize
    },
    TextInput:{
        height:(Platform.OS === 'ios')? px2dp(70):null,
        fontSize:px2dp(30),
        flex:1,
        marginLeft:px2dp(15)
    }

});