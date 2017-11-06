import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icon from '../icon';


export default class PlaceCardHeader extends Component {

    render() {

        return (

            <View style={styles.container}>
                <Text style={styles.heading}>Demo Heading</Text>
                <Icon name="https://image.flaticon.com/icons/png/512/61/61140.png" />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1

    },
    heading: {

        color: '#333',
        fontWeight: 'bold',
        fontSize: 16,
    }
})