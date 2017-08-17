//消息
'use strict';
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    PixelRatio,
    Image,
    SectionList
}from 'react-native';

import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import Button from '../components/Button';
export default class MessagePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data2:[{title:'简书活动精选',content:'分享自今日头条app:[匆匆而过，再见长岛......] http://',time:'去年'},{title:'简叔',content:'分享自今日头条app:[匆匆而过，再见长岛......] http://',time:'去年'}]
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.actionBar}>
                    <View style={{height:theme.actionBar.height,width:px2dp(80)}}></View>
                    <Text style={styles.navigationTitle}>消息</Text>
                    <TouchableOpacity
                        style={styles.navigationLeft}
                        onPress={this._naviRight.bind(this)}>
                        <Image source={require('../image/my.png')}/>
                    </TouchableOpacity>
                </View>
                <SectionList
                    //数据源  这里需要设置key，如果key的值相同那么就只会显示一个组，第二个组的renderSectionHeader不会显示
                    sections = {[
                        {renderItem:this._renderItemSec,key:'s1',data:[{}]},
                        {renderItem:this._renderItem,key:'s2',data:this.state.data2}
                    ]}
                    //每个组的头部组件
                    renderSectionHeader={this._renderSectionHeader}
                    //是否是刷新状态
                    refreshing={false}
                    //刷新控件，当下拉的时候，触发方法
                    onRefresh={()=>{alert('刷新')}}
                    //每一行的分割组件
                    ItemSeparatorComponent = {this._itemSeparator}
                    //组和组的分割组件
                    SectionSeparatorComponent = {this._sectionSeparator}
                    //给每个item设置一个key
                    keyExtractor = {(item,index) =>('index'+index+item)}
                    //达到上拉加载的效果，表示距离可见视图底部为当前列表可见长度的0。1倍时候触发onEndReached方法
                    onEndReachedThreshold={0.1}
                    onEndReached={(info) =>{alert('到底底部')}}
                    //列表头部组件
                    ListHeaderComponent = {this._listHeader}
                    //列表尾部组件
                    ListFooterComponent = {this._listFooter}
                />

            </View>
        );
    }
    _naviRight(){
        console.log('点击右上角');
    }
    _renderSectionHeader = (info) =>{
        return(
            <View style={{paddingHorizontal:px2dp(40),height:px2dp(100),borderBottomColor:'gray',borderBottomWidth:px2dp(0.6),backgroundColor:'white'}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
                    <Text style={{fontSize:px2dp(38)}}>简信</Text>
                    <Text style={{color:'red',fontSize:px2dp(38)}}>新简信</Text>
                </View>
            </View>
        )
    }
    _itemSeparator(){
        return(
            <View style={{height:px2dp(2),width:theme.screenWidth,backgroundColor:theme.lightGray}}></View>
        )
    }
    _renderItem = (info) =>{
        return(
            <View style={{width:theme.screenWidth,height:px2dp(160),flexDirection:'row',alignItems:'center',paddingHorizontal:px2dp(40),paddingVertical:px2dp(30)}}>
                <Image style={{width:px2dp(110),height:px2dp(110),borderRadius:px2dp(55)}} source = {require('../image/photo.png')}/>
                <View style={{marginLeft:px2dp(30),flex:1,height:px2dp(100)}}>
                    <View style={{marginHorizontal:0,marginTop:0,height:px2dp(45),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize:px2dp(38)}} key ={info.item.name}>{info.item.title}</Text>
                        <Text style={{fontSize:px2dp(24),color:'gray',marginRight:0}}>{info.item.time}</Text>
                    </View>
                    <Text style={{marginTop:px2dp(20), marginRight:px2dp(30),height:px2dp(30),fontSize:px2dp(26),color:'gray'}} numberOfLines={1}>{info.item.content}</Text>
                </View>
            </View>
        )
    }
    _renderItemSec = (info) =>{
        return(

            <View style={{height:px2dp(400), flex:1}}>
                <View style={styles.buttonview}>
                    <TouchableOpacity style={[styles.button,{marginLeft:(theme.screenWidth-px2dp(150)*3)/8}]}>
                       <Image style={styles.image} source={require('../image/companyservice_hg.png')}/>
                        <Text>评论</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.image} source={require('../image/companyservice_hg.png')}/>
                        <Text>喜欢和赞</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{marginRight:(theme.screenWidth-px2dp(150)*3)/8}]}>
                        <Image style={styles.image} source={require('../image/companyservice_hg.png')}/>
                        <Text>关注</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonview}>
                    <TouchableOpacity style={[styles.button,{marginLeft:(theme.screenWidth-px2dp(150)*3)/8}]}>
                        <Image style={styles.image} source={require('../image/companyservice_hg.png')}/>
                        <Text>投稿请求</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.image} source={require('../image/companyservice_hg.png')}/>
                        <Text>赞赏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{marginRight:(theme.screenWidth-px2dp(150)*3)/8}]}>
                        <Image style={styles.image} source={require('../image/companyservice_hg.png')}/>
                        <Text>其他提醒</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    _listHeader = ()=>{
        return(
            <View style={{backgroundColor:theme.lightGray,height:px2dp(40)}}></View>
        )
    }
    _listFooter = ()=>{
        return(
            <View style={{backgroundColor:theme.lightGray,height:px2dp(40)}}></View>
        )
    }
    _sectionSeparator =()=>{
        return(
            <View style={{height:px2dp(40),backgroundColor:theme.lightGray,borderBottomColor:'gray',borderBottomWidth:px2dp(0.4),borderTopColor:'gray',borderTopWidth:px2dp(0.4)}}></View>
        )
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
    buttonview:{
        height:px2dp(200),
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    button:{
        height:px2dp(150),
        width:px2dp(150),
        justifyContent:'space-around',
        alignItems:'center'
    },
    image:{
        height:px2dp(60),
        width:px2dp(60)
        },
    text:{
        fontSize:px2dp(30),
        textAlign:'center'
    }


});