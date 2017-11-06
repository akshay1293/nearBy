import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight,

} from 'react-native';


export default class Icon extends Component {

    render() {

        return (

            <TouchableHighlight underlayColor='#F2F3F4'>
                <Image style={{ height: 17, width: 17 }} source={{ uri: this.props.name }} />
            </TouchableHighlight>
        );
    }
}
