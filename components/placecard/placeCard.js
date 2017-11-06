import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Image,
    TouchableHighlight,

} from 'react-native';

import PlaceCardHeader from './placeCardHeader';
import PlaceCardFooter from './placeCardFooter';
import PlaceCardMain from './placeCardMain';




export default class PlaceCard extends Component {

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.placeCardHeaderContainer}>
                    <PlaceCardHeader />
                </View>
                <View style={styles.placeCardMainContainer}>
                    <PlaceCardMain />
                </View>
                <View style={styles.placeCardFooterContainer}>
                    <PlaceCardFooter />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        height: 160,
        width: Dimensions.get('window').width - 20,
        //marginTop: 20,
        //marginBottom: 10,
        elevation: 2,
        borderRadius: 2,
        //padding: 10,
        marginVertical: 5,
    },
    placeCardHeaderContainer: {

        flex: 0.2
    },

    placeCardMainContainer: {

        flex: 0.6,
    },
    placeCardFooterContainer: {

        flex: 0.2,
    },

})