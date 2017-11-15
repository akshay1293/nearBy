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
    Button,
    Keyboard
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import Result from './result'
import { connect } from 'react-redux';
import { saveData } from '../redux/action';

class Home extends Component {

    constructor(props) {

        super(props);
        this.state = {
            text: '',
            typing: false,
            focus: false,
            currentLocation: {
                name: null,
                latitude: null,
                longitude: null,
            },
            places: [],
        }
    }

    componentWillMount() {

        RNGooglePlaces.getCurrentPlace()
            .then((results) => {
                console.log(results)
                let bestMatch = this.getBestMatch(results);
                this.setState({

                    currentLocation: {
                        name: bestMatch.name,
                        latitude: bestMatch.latitude,
                        longitude: bestMatch.longitude,
                    }
                }, () => console.log(this.state.currentLocation));
            })
            .catch((error) => console.log(error.message));
    }

    static navigationOptions = {
        header: null,
    };

    getPlaces() {

        if (this.state.text !== null) {

            RNGooglePlaces.getAutocompletePredictions(this.state.text, {

                country: 'IN',
                latitude: this.state.currentLocation.latitude,
                longitude: this.state.currentLocation.longitude,
                radius: 10,
            })
                .then((result) => {

                    //console.log(result);
                    this.setState({

                        places: result,
                    })
                })
                .catch(error => console.log(error.message));
        }
    }

    getBestMatch(places) {

        let likelihood = -1;
        let bestMatch;

        places.map((place, i) => {

            if (place.likelihood > likelihood) {

                likelihood = place.likelihood;
                bestMatch = place;
            }
        })

        return bestMatch;

    }

    renderSuggestions() {

        if (this.state.places.length !== 0) {

            return this.state.places.map((place, i) => {

                return <Result place={place} key={i} />
            })
        }


    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchIconContainer}>
                        <Image style={{ height: 17, width: 17 }} source={require('../assets/search_icon.png')} />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        returnKeyType='search'
                        placeholder="Search for Places"
                        onChangeText={(text) => this.setState({ text }, () => this.getPlaces())}
                        value={this.state.text}
                        returnKeyType={'search'}
                        onSubmitEditing={() => this.props.navigation.navigate('main')}
                        onFocus={() => this.setState({ focus: true })}
                        onBlur={() => this.setState({ focus: false })}
                    />
                    <TouchableHighlight underlayColor={'#F2F3F4'}
                        onPress={() => {

                            this.setState({ text: null, places: [] })
                            Keyboard.dismiss();
                        }

                        }

                        style={[styles.searchIconContainer, { display: this.state.focus ? 'flex' : 'none' }]}>
                        <Image style={{ height: 17, width: 17 }} source={require('../assets/cross.png')} />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#F2F3F4'}
                        onPress={
                            () => {

                                this.setState({
                                    text: this.state.currentLocation.name,
                                })

                            }} style={[styles.searchIconContainer, { display: this.state.focus ? 'flex' : 'none' }]}>
                        <Image style={{ height: 17, width: 17, }} source={require('../assets/location.png')} />
                    </TouchableHighlight>
                </View>
                <View style={[styles.savedPlaces, { display: this.state.focus === true ? 'flex' : 'none', }]}>
                    <Image style={{ height: 20, width: 20 }} source={require('../assets/bookmark.png')} />
                    <Text style={{ paddingLeft: 5, color: '#333' }}> Saved Places</Text>
                </View>
                <View style={[styles.resultContainer, { display: this.state.places.length !== 0 ? 'flex' : 'none' }]}>
                    {this.renderSuggestions()}
                </View>
                <View style={[styles.searchTextContainer, { display: this.state.text ? 'none' : 'flex' }]}>
                    <Image style={{ height: 100, width: 100, }} source={require('../assets/nearby.png')} />
                    <Text style={styles.searchText}>Enter location</Text>
                    <Text style={styles.searchText}>To find places to visit Near By</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#e7e7e7",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'

    },
    text: {
        fontSize: 14,
        color: '#5D6D7E',
        flex: 0.9,


    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F2F3F4',
        width: Dimensions.get('window').width - 30,
        top: 12,
        elevation: 2,
    },

    savedPlaces: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F2F3F4',
        width: Dimensions.get('window').width - 30,
        top: 14,
        elevation: 0,
        paddingHorizontal: 8,
        paddingVertical: 15

    },

    searchIconContainer: {
        display: 'flex',
        flex: 0.1,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchIcon: {
        height: 17,
        width: 17,
    },
    textInput: {
        flex: 0.7,
        backgroundColor: '#F2F3F4',
        height: 37,
    },
    myLocationContainer: {
        display: 'flex',
        height: 35,
        top: 14,
        flexDirection: 'row',
        backgroundColor: '#F2F3F4',
        width: Dimensions.get('window').width - 30,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    searchTextContainer: {
        position: 'absolute',
        top: Dimensions.get('window').height - 450,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchText: {

        color: 'gray',
    },
    resultContainer: {

        display: 'none'

    }
})

export default connect(({ mapR }) => ({ mapR }), {

})(Home);