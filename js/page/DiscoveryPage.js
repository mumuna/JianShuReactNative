//发现
'use strict';
import React,{Component} from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import theme from '../config/theme';
import px2dp from '../utils/px2dp';
export default class DiscoveryPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[{img:require('../image/imd.png')},{img:require('../image/imb.png')},{img:require('../image/imc.png')}],
            autoplay:true,
            autoplayTimeout:2,
            showPagination:true,
            horizontal:true,
            loop:true,
            showsButtons:true,
            swipervisible:false
        }
    }
    render(){
            return(
                <View style={styles.container}>
                    {this.state.swipervisible?<View style={{height:px2dp(400), width:theme.screenWidth}}>
                       <Swiper style={{height:px2dp(400)}}  autoplay = {this.state.autoplay} autoplayTimeout = {this.state.autoplayTimeout} showPagination = {true} dotColor = 'gray'
                               activeDotColor = 'red' horizontal={true}  loop = {this.state.loop} index = {0}   showsButtons = {false}
                               pagingEnabled={true}>
                           {
                               this.state.items.map((item,index)=>{
                                   return(
                                       <Image key={index} source={item.img}/>
                                   );
                               })
                           }

                       </Swiper>
                   </View>
                    :null}
                   <View style={{width:theme.screenWidth,flex:1}}>
                       <Text>asdasdasd</Text>
                   </View>
                </View>
            );
    }
    _click(index){
        alert('点击的是第'+index+'张图');
}
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swipervisible:true
            })
        },100)
    }
    componentWillUnmount(){
        alert('componentWillUnmount');
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
});