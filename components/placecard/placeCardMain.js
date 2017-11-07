import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

import MapView from 'react-native-maps';


export default class PlaceCardMain extends Component {

    render() {

        return (

            <MapView style={styles.container} showsUserLocation={true} showsMyLocationButton={true}
                initialRegion={{
                    latitude: 28.460370,
                    longitude: 77.052913,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={{
                    latitude: 28.460370,
                    longitude: 77.052913,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                mapType={'terrain'}
                zoomEnabled={false}
                rotateEnabled={false}
                scrollEnabled={false}
                showsTraffic={true}>
            </MapView>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        height: 100,
        width: Dimensions.get('window').width - 20,
    },
    heading: {

        color: '#555',
        fontWeight: 'bold',
        fontSize: 16,
    }
})