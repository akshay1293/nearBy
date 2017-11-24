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
    Modal,
    AsyncStorage
} from 'react-native';
import PlaceCard from './placecard/placeCard';

export default class MainSection extends Component {
    static navigationOptions = {
        //header: null,
        title: 'Searched Places'
    };

    constructor(props) {

        super(props);

        this.placesDataTemp = [];

        this.state = {

            latitude: this.props.navigation.state.params.lat,
            longitude: this.props.navigation.state.params.lng,
            placesData: [],
            isLoading: true,
            isScrolling: false,

        }
    }

    componentDidMount() {
        let latitude = this.state.latitude;
        let longitude = this.state.longitude;
        let API_KEY = 'AIzaSyD0jdo4JE3HcU8BCL5MxqK7lf0EaKaKGtQ';
        let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=5000&key=' + API_KEY;

        if (this.props.navigation.state.params.savedPlaces !== true) {
            fetch(url, {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    this.setState({ placesData: responseJson.results, isLoading: false });

                })
                .catch((error) => {
                    console.log(error);
                })
        } else {

            AsyncStorage.getAllKeys((error, result) => {
                //console.log(result);
                if (result.length !== 0) {
                    result.map((key, i) => {

                        AsyncStorage.getItem(key, (error, result) => {
                            this.setState({

                                placesData: this.state.placesData.concat(JSON.parse(result)),

                            }, () => console.log(this.state.placesData))

                        })
                    });

                }
            })
            this.setState({

                isLoading: false,
            })

        }

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
                    <ActivityIndicator size={30} color={'#000'} />
                    <Text style={{ fontSize: 16, fontStyle: 'italic' }}>Getting data... </Text>
                </View>
            );
        }
    }

    renderPlaceCards() {

        if (this.state.placesData.length !== 0) {

            return this.state.placesData.map((place, i) => {
                if (place.rating !== undefined) {
                    return <PlaceCard place={place} key={i} savedPlaces={this.props.navigation.state.params.savedPlaces} />
                }
            })
        } else {

            return <View style={styles.loader}><Text style={{ fontSize: 16, fontStyle: 'italic' }}>No Places found!!</Text></View>
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