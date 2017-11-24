import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';

import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { saveData, clearLocation, setLocation } from '../../redux/action';


class PlaceCardMain extends Component {

    constructor(props) {

        super(props);

        this.state = {

            distance: null,
        }
    }

    componentDidMount() {
        console.log(this.props.mapR.origin.lat + ',' + this.props.mapR.origin.lng);
        let origin = {

            lat: this.props.savedPlaces === true ? this.props.mapR.origin.lat : this.props.mapR.lat,
            lng: this.props.savedPlaces === true ? this.props.mapR.origin.lng : this.props.mapR.lng,
        }

        let destination = {

            lat: this.props.placeData.geometry.location.lat,
            lng: this.props.placeData.geometry.location.lng,
        }

        let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + origin.lat + ',' + origin.lng + '&destinations=' + destination.lat + ',' + destination.lng + '&key=AIzaSyAthHFQlQ7ApePt-MGU6zjH82kfCinAi7o';

        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson)
                this.setState({

                    distance: responseJson.rows[0].elements[0].distance.text.split(' ')[0],
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    renderAvailabilityText() {

        if (this.props.placeData.opening_hours.open_now === true) {

            return (<Text style={{ color: "#16AC04", paddingVertical: 5, fontStyle: 'italic' }}>Open Now</Text>);
        } else {

            return (<Text style={{ color: '#F72807', paddingVertical: 5, fontStyle: 'italic' }}>Closed</Text>);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <View style={styles.addressContainer}>
                        <Image style={{ height: 40, width: 40 }} source={{ uri: this.props.placeData.icon }} />
                        <View style={{ width: 250 }}><Text style={{ fontSize: 13, color: '#555' }}>{this.props.placeData.vicinity}</Text></View>
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
                    <View style={styles.distanceContainer}>
                        {/* <Image style={{ height: 25, width: 25 }} source={require('../../assets/distance.png')} /> */}
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 24, color: "#444", fontWeight: 'bold' }}>{this.state.distance}</Text>
                            <Text style={{ padding: 2, color: '#444' }}>km</Text>
                        </View>
                        <Text>(approx.)</Text>
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
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 2,
        flex: 0.1,
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
    },
    distanceContainer: {
        flexDirection: 'column',
        flex: 0.9,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 5,
    },
})

export default connect(({ mapR }) => ({ mapR }), {

})(PlaceCardMain);

