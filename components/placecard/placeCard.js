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
                    <PlaceCardHeader placeData={this.props.place} savedPlaces={this.props.savedPlaces} />
                </View>
                <View style={styles.placeCardMainContainer}>
                    <PlaceCardMain placeData={this.props.place} savedPlaces={this.props.savedPlaces} />
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
        width: Dimensions.get('window').width - 20,
        elevation: 1,
        borderRadius: 2,
        marginVertical: 3,
        paddingVertical: 2
    },
    placeCardHeaderContainer: {
        paddingVertical: 5
    },

    placeCardMainContainer: {
        paddingVertical: 5
    },
    placeCardFooterContainer: {
        paddingVertical: 5,
        backgroundColor: '#f96f5c',
        elevation: 2,
    },
})