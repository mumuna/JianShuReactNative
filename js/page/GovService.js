/**
 * Created by apple on 2017/5/11.
 */
import React, {Component, PropTypes} from 'react';

import {
    View,
    Text,
    SectionList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import theme from '../config/theme';
import px2dp from '../utils/px2dp';
/**
 * 政府服务
 */
export  default class GovService extends Component {
    // 构造
    constructor(props) {
        super(props);

        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <SectionList
                style={{backgroundColor:theme.pageBackgroundColor,paddingLeft:px2dp(30),paddingRight:px2dp(30)}}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                sections={this.props.data}
                keyExtractor={(item,index) => index}
            />
        )
    }

    renderExpenseItem(item, i) {
        return (<TouchableOpacity key={i} >
            <View style={[styles.item,i%4===3?{ borderRightWidth:px2dp(0)}:{borderRightWidth:px2dp(1)},i>4?{borderTopWidth:px2dp(1)}:{borderTopWidth:px2dp(0)}]}>
                <Text style={{fontSize:theme.text.fontSize,color:theme.lightDarkColor}}>{item.name}</Text>
            </View>
        </TouchableOpacity>);
    }
    _renderItem = ({item}) => (

        <View  style={styles.list}>
            {
                item.map((item, i) => this.renderExpenseItem(item, i))
            }
        </View>

    );
    _renderSectionHeader= ({section})=>{
        return(
            <Text style={{fontSize:theme.text.fontSize,color:theme.grayColor,marginTop:px2dp(30),marginBottom:px2dp(20)}}>{section.key}</Text>
        )
    }
}
const styles = StyleSheet.create({
    list: {
        //justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        padding:px2dp(10),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        width: (theme.screenWidth-px2dp(63)) / 4,
        height: (theme.screenWidth-px2dp(63)) / 4,
        alignItems: 'center',
        borderColor:theme.lightGray,
    },
});

GovService.propTypes = {
    data: PropTypes.array.isRequired
};