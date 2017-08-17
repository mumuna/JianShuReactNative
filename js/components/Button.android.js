const React = require('react');
const ReactNative = require('react-native');
const {
   TouchableOpacity,
    TouchableNativeFeedback,
    View
} = ReactNative;
const  Button = (props) =>{
    return <TouchableOpacity {...props} activeOpacity={0.5}>
        {props.children}
    </TouchableOpacity>
};
module.exports = Button;