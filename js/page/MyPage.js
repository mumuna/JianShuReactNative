//我的
'use strict';
import React,{Component} from 'react';
import {View,Text,StyleSheet,Platform,PixelRatio,ScrollView,TouchableOpacity,Image,Switch}from 'react-native';

import px2dp from '../utils/px2dp';
import theme from '../config/theme';
import Button from '../components/Button';

export default class MyPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            listdataModule:[{title:'公开文章',num:'6'},{title:'关注',num:'10'},{title:'粉丝',num:'8'}],
            listdata:[{title:'私密文章',num:'0'},{title:'收藏的文章',num:'0'},{title:'喜欢的文章',num:'9'},{title:'我的专题',num:'3'},{title:'我的文集',num:'1'},{title:'关注的专题／文集',num:'14'}],
            listdataSecond:[{title:'浏览器'}],
            listdataThird:[{title:'分享简书App'},{title:'帮助与反馈'},{title:'给简书评分'}],
            refreshing:false,
            trueSwitchIsOn:true,
        }
    }
    renderExpenseItem(item,i){
        return(
            <View style={{height:px2dp(122), width:theme.screenWidth}}>
              <View style={{height:px2dp(120),flexDirection:'row',alignItems:'center',width:theme.screenWidth}}>
                <Image style={{marginLeft:px2dp(50),width:px2dp(40),height:px2dp(40)}}
                       source={require('../image/my.png')}
                />
                <Text style={{marginLeft:px2dp(30),fontSize:px2dp(32)}}>{item.title}</Text>
                <TouchableOpacity style={{position:'absolute',right:px2dp(0),flexDirection:'row',alignItems:'center',height:px2dp(110),width:px2dp(130)}}
                                  onPress={()=>{this._onCLick(item)}}>
                    <Text style={{height:px2dp(30),marginLeft:px2dp(30),textAlignVertical:'center', color:'gray',fontSize:px2dp(30)}}>{item.num}</Text>
                    <Image style={{position:'absolute',right:px2dp(30),width:px2dp(30),height:px2dp(30)}} source={require('../image/open.png')}/>
                </TouchableOpacity>
              </View>
                <View style={{backgroundColor:theme.lightGray,height:px2dp(2),width:theme.screenWidth}}>
                </View>
            </View>
        );
    }
    renderModuleItem(item,i){
        return(
            <TouchableOpacity style={styles.touch1} onPress={()=>this._clickGongKai(item)}>
                <Text style={styles.text1}>{item.num}</Text>
                <Text style={styles.text2}>{item.title}</Text>
            </TouchableOpacity>
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.actionBar}>
                    <View style={{width:px2dp(80),height:theme.actionBar.height}}></View>
                    <View style={{flex:1}}></View>
                    <TouchableOpacity style={{width:px2dp(80),height:theme.actionBar.height,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../image/time.png')}/>
                    </TouchableOpacity>
                </View>
              <ScrollView>
                  <View style={{height:px2dp(400), flex:1}}>
                      <View style={{height:px2dp(200),width:theme.screenWidth,flexDirection:'row',alignItems:'center'}}>
                          <Image style={{marginLeft:px2dp(50),width:px2dp(140),height:px2dp(140),borderRadius:px2dp(60)}} source={require('../image/photo.png')}/>
                          <View style={{marginLeft:px2dp(30),height:px2dp(100),width:theme.screenWidth-px2dp(290)}}>
                              <View style={styles.style3}>
                                  <Text style={{fontSize:px2dp(38)}}>万明娜</Text>
                                  <Image style={{height:px2dp(30),width:px2dp(30),marginLeft:px2dp(25)}} source={require('../image/people.png')}/>
                                  <TouchableOpacity >
                                      <Image style={{height:px2dp(30),width:px2dp(30),marginLeft:px2dp(25)}} source={require('../image/time.png')}/>
                                  </TouchableOpacity>
                              </View>
                              <View style={[styles.style3, {marginTop:px2dp(20)}]}>
                                  <TouchableOpacity style={styles.style4} onPress={this._clickJiFen.bind(this)}>
                                      <Image style={{height:px2dp(30),width:px2dp(30)}} source={require('../image/homeselected.png')}/>
                                      <Text style={{color:'red'}}> 积分503</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={[styles.style4,{marginLeft:px2dp(30)}]} onPress={this._clickJiFenShang.bind(this)}>
                                      <Text style={{color:'red'}}> 积分商城</Text>
                                  </TouchableOpacity>
                              </View>

                          </View>
                          <TouchableOpacity style={{position:'absolute',right:0,width:px2dp(80),height:px2dp(400),justifyContent:'center',alignItems:'center'}}>
                              <Image style={{width:px2dp(30),height:px2dp(30)}} source={require('../image/open.png')}/>
                          </TouchableOpacity>
                      </View>
                      <View style={{backgroundColor:theme.lightGray,height:px2dp(2),width:theme.screenWidth}}></View>
                      <View style={{height:px2dp(200),width:theme.screenWidth}}>
                          <View style={{height:px2dp(160),flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                              {
                                  this.state.listdataModule.map((item,i)=>this.renderModuleItem(item,i))
                              }
                          </View>
                          <View style={styles.style5}>
                          </View>
                      </View>
                  </View>
                 <View style={{width:theme.screenWidth,height:px2dp(720)}}>
                     {
                        this.state.listdata.map((item,i)=>this.renderExpenseItem(item,i))
                     }
                 </View>
                 <View style={{height:px2dp(320),width:theme.screenWidth}} >
                     <View style={styles.style5}>
                     </View>
                     <View style={{height:px2dp(122), width:theme.screenWidth}}>
                         <View style={{height:px2dp(120),flexDirection:'row',alignItems:'center',width:theme.screenWidth}}>
                             <Image style={{marginLeft:px2dp(50),width:px2dp(40),height:px2dp(40)}}
                                    source={require('../image/my.png')}
                             />
                             <Text style={{marginLeft:px2dp(30),fontSize:px2dp(32)}}>夜间模式</Text>
                             <Switch
                                 style={{position:'absolute',right:px2dp(0),flexDirection:'row',alignItems:'center',height:px2dp(90),width:px2dp(130)}}
                                 value={this.state.trueSwitchIsOn}
                                 onValueChange={(value) => this.setState({trueSwitchIsOn:value})}
                             />
                         </View>
                         <View style={{backgroundColor:theme.lightGray,height:px2dp(2),width:theme.screenWidth}}>
                         </View>
                     </View>
                     <View style={{height:px2dp(120), width:theme.screenWidth}}>
                         {
                            this.state.listdataSecond.map((item,i)=>this.renderExpenseItem(item,i))
                         }
                     </View>
                     <View style={styles.style5}>
                     </View>
                 </View>
                  <View style={{height:px2dp(360),width:theme.screenWidth}}>
                      {
                          this.state.listdataThird.map((item,i)=>this.renderExpenseItem(item,i))
                      }
                  </View>
              </ScrollView>


            </View>
        );
    }
    _clickGongKai(item){
        alert(item.title);
    }
   _clickJiFen(){
        alert('点击积分');
   }
   _clickJiFenShang(){
       alert('点击积分商城');
   }
    _onCLick(item){
        alert('点击的是'+item.title);
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
        paddingTop:(Platform.OS ==='ios')?px2dp(35):0,
        flexDirection:'row',
        alignItems:'center',
    },
    touch1:{
        width:px2dp(120),
        height:px2dp(100),
        flexDirection:'column',
        justifyContent:'center'
    },
    text1:{
      textAlign:'center',
        fontSize:px2dp(30)
    },
    text2:{
        marginTop:px2dp(10),
        color:'gray',
        textAlign:'center'
    },
    style3:{
        alignItems:'center',
        flexDirection:'row',
        height:px2dp(45)
    },
    style4:{
        borderRadius:px2dp(5),
        borderWidth:px2dp(0.6),
        borderColor:'red',
        height:px2dp(45),
        width:px2dp(170),
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    style5:{
        height:px2dp(40),
        backgroundColor:theme.lightGray,
        borderTopWidth:px2dp(0.6),
        borderBottomWidth:px2dp(0.6),
        borderTopColor:'gray',
        borderBottomColor:'gray'
    }

});