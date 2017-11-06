import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default class PlaceCardFooter extends Component {

    render() {

        return (

            <View style={styles.container}>
                <Text style={styles.heading}>Navigate</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        top: 7
    },
    heading: {

        color: '#555',
        fontWeight: 'bold',
        fontSize: 16,
    }
})