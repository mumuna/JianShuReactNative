import React, {Component,PropTypes} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import px2dp from '../utils/px2dp';
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

export default  class TimerButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            timerCount: this.props.timerCount || 60,
            timerTitle: this.props.timerTitle || '获取验证码',
            counting: false,
            selfEnable: true,
        };
        this.shouldStartCountting = this.shouldStartCountting.bind(this)
        this.countDownAction = this.countDownAction.bind(this)
    }

    static propTypes = {
        style: PropTypes.object,
        textStyle: Text.propTypes.style,
        onClick: PropTypes.func,
        disableColor: PropTypes.string,
        timerTitle: PropTypes.string,
        enable: React.PropTypes.oneOfType([React.PropTypes.bool,React.PropTypes.number])
    };

    countDownAction() {
        const codeTime = this.state.timerCount;
        this.interval = setInterval(() => {
            const timer = this.state.timerCount - 1
            if (timer === 0) {
                this.interval && clearInterval(this.interval);
                this.setState({
                    timerCount: codeTime,
                    timerTitle: this.props.timerTitle || '获取验证码',
                    counting: false,
                    selfEnable: true
                })
            } else {
                this.setState({
                    timerCount: timer,
                    timerTitle: `${timer}s`,
                })
            }
        }, 1000)
    }

    shouldStartCountting(shouldStart) {
        if (this.state.counting) {
            return
        }
        if (shouldStart) {
            this.countDownAction()
            this.setState({counting: true, selfEnable: false})
        } else {
            this.setState({selfEnable: true})
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const {onClick, style, textStyle, disableColor} = this.props;
        const {counting, timerTitle, selfEnable} = this.state;
        return (
            <TouchableOpacity activeOpacity={counting ? 1 : 0.8} onPress={() => {
                if (!counting &&selfEnable) {
                    this.setState({selfEnable:false})
                    onClick(this.shouldStartCountting)
                };
            }}>
                <View
                    style={styles.styleCodeView}>
                    <Text allowFontScaling={false}
                          style={[{fontSize: px2dp(30)}, textStyle, {color: ((!counting && selfEnable) ? textStyle.color : disableColor || 'gray')}]}>{timerTitle}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: px2dp(30)
    },
    styleCodeView: {
        height:px2dp(40),
        width: px2dp(180),
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleTextCode: {
        fontSize: px2dp(30),
        color: '#dc1466',
        textAlign: 'center',
    },

});