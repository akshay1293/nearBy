import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableHighlight,
    Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import { saveData } from '../redux/action';

class Result extends Component {

    render() {

        return (

            <View style={styles.container}>
                <Image style={{ height: 16, width: 16 }} source={require('../assets/result_icon.png')} />
                <TouchableHighlight style={styles.result} underlayColor={'#F2F3F4'}>
                    <Text>{this.props.place.fullText}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F2F3F4',
        width: Dimensions.get('window').width - 30,
        top: 16,
        paddingHorizontal: 10,
        paddingVertical: 5

    },

    result: {

        padding: 10
    }

})

//this.props.saveData({});
//this.props.mapR.lat;

export default connect(({ mapR }) => ({ mapR }), {
    saveData
})(Result);