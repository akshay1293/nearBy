import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableHighlight,
    ActivityIndicator,
    Modal
} from 'react-native';
import PlaceCard from './placecard/placeCard';

export default class MainSection extends Component {
    static navigationOptions = {
        //header: null,
        title: 'Searched Places'
    };

    constructor(props) {

        super(props);

        this.state = {

            latitude: this.props.navigation.state.params.lat,
            longitude: this.props.navigation.state.params.lng,
            placesData: null,
            isLoading: true,
            isScrolling: false,

        }
    }

    componentDidMount() {
        console.log('hey');
        let latitude = this.state.latitude;
        let longitude = this.state.longitude;
        let API_KEY = 'AIzaSyD0jdo4JE3HcU8BCL5MxqK7lf0EaKaKGtQ';
        let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=5000&key=' + API_KEY;

        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({ placesData: responseJson, isLoading: false });

            })
            .catch((error) => {
                console.log(error);
            })

    }

    render() {
        if (this.state.isLoading === false) {
            return (

                <ScrollView contentContainerStyle={styles.container}>
                    {this.renderPlaceCards()}

                </ScrollView>



            );
        } else {

            return (
                <View style={styles.loader}>
                    {/* <Image style={{ height: 30, width: 30 }} source={require('../assets/Rolling.gif')} /> */}
                    <ActivityIndicator size={30} color={'#000'} />
                    <Text style={{ fontSize: 16, fontStyle: 'italic' }}>Getting data... </Text>
                </View>
            );
        }
    }

    renderPlaceCards() {

        if (this.state.placesData !== null) {

            return this.state.placesData.results.map((place, i) => {

                return <PlaceCard place={place} key={i} />
            })
        }
    }
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    loader: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        elevation: 3
    },

})