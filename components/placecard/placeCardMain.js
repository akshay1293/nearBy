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

    renderAvailabilityText() {

        if (this.props.placeData.opening_hours.open_now === true) {

            return (<Text style={{ color: "#16AC04", paddingVertical: 5, fontStyle: 'italic' }}>Open Now</Text>);
        } else {

            return (<Text style={{ color: '#F72807', paddingVertical: 5, fontStyle: 'italic' }}>Closed</Text>);
        }
    }

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
                <View style={styles.detailsContainer}>
                    <View style={styles.addressContainer}>
                        <Image style={{ height: 40, width: 40 }} source={{ uri: this.props.placeData.icon }} />
                        <View style={{ width: 250 }}><Text style={{ fontSize: 14 }}>{this.props.placeData.vicinity}</Text></View>
                    </View>
                    <View>
                        {this.props.placeData.opening_hours !== undefined ? this.renderAvailabilityText() : <Text style={{ color: 'lightgray', fontStyle: 'italic', paddingVertical: 5 }}>{'No Timing Info'}</Text>}
                    </View>
                </View>
                <View style={styles.sideContainer}>
                    <View style={styles.ratingContainer}>
                        <Image style={{ height: 15, width: 15 }} source={require('../../assets/rating.png')} />
                        <Text style={styles.rating}>{this.props.placeData.rating === undefined ? 'Unrated' : this.props.placeData.rating}</Text>
                        {/* <Text style={[styles.rating, { display: this.props.placeData.rating === undefined ? 'none' : 'flex' }]}>Rating</Text> */}
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        padding: 2
    },
    detailsContainer: {
        flexDirection: 'column',
        flex: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
    },
    addressContainer: {
        flexDirection: 'column',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    sideContainer: {
        flexDirection: 'column',
        flex: 2,
        //borderBottomColor: '#999',
        //borderBottomWidth: 1,

    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 2,
        //backgroundColor: '#FFEC33',
        elevation: 0,
        borderRadius: 4,
        marginRight: 3,
        borderColor: '#F1B207',
        borderWidth: 1
    },
    rating: {
        fontSize: 14,
        color: '#777',
        fontWeight: 'bold'
    }
})
