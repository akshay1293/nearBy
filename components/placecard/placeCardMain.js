import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';

import MapView from 'react-native-maps';


export default class PlaceCardMain extends Component {

    render() {

        return (

            // <MapView style={{ flex: 1 }} showsUserLocation={true} showsMyLocationButton={true}
            //     initialRegion={{
            //         latitude: this.props.placeData.geometry.location.lat,
            //         longitude: this.props.placeData.geometry.location.lng,
            //         latitudeDelta: 0.0922,
            //         longitudeDelta: 0.0421,
            //     }}
            //     region={{
            //         latitude: this.props.placeData.geometry.location.lat,
            //         longitude: this.props.placeData.geometry.location.lng,
            //         latitudeDelta: 0.0922,
            //         longitudeDelta: 0.0421,
            //     }}
            //     mapType={'terrain'}
            //     zoomEnabled={false}
            //     rotateEnabled={false}
            //     scrollEnabled={false}
            //     minZoomLevel={15}
            //     showsTraffic={true}>
            // </MapView>
            <View style={styles.container}>
                <Image style={{ height: 70, width: 70 }} source={require('../../assets/bookmark.png')} />
                <Text style={styles.rating}>4.5</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    rating: {

        position: 'absolute',
        top: 26,
        left: 24,
        fontSize: 17,
        fontWeight: 'bold'
    }
})
