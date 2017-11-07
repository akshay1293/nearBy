import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';


export default class PlaceCardFooter extends Component {

    render() {

        return (

            <TouchableHighlight onPress={() => console.log('navigate pressed')} underlayColor='#f96f5c' style={styles.container}>
                <Text style={styles.heading}>Navigate</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        top: 7,

    },
    heading: {

        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})