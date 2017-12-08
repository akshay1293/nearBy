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
    AsyncStorage,
    Dimensions,
    RefreshControl,
    NetInfo
} from 'react-native';
import PlaceCard from './placecard/placeCard';
import Filter from './filter/filter';
import { connect } from 'react-redux';
import { applyFilter, setCurrentFilter, setPreviousFilter } from '../redux/action'

class MainSection extends Component {
    static navigationOptions = {
        title: 'Searched Places',
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
            modalVisibility: false,
            refreshing: false,

        }
    }

    componentDidMount() {

        let latitude = this.state.latitude;
        let longitude = this.state.longitude;
        let API_KEY = 'AIzaSyD0jdo4JE3HcU8BCL5MxqK7lf0EaKaKGtQ';
        let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=5000&key=' + API_KEY;


        if (this.props.navigation.state.params.savedPlaces !== true) {
            NetInfo.isConnected.fetch().then(isConnected => {

                if (isConnected) {

                    fetch(url, {
                        method: 'GET',
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

                    alert('you are offline');
                }
            });

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

    handleRefresh() {
        this.setState({

            refreshing: true,
        })
        if (this.props.filterRed.filter !== null) {
            let latitude = this.state.latitude;
            let longitude = this.state.longitude;
            let API_KEY = 'AIzaSyD0jdo4JE3HcU8BCL5MxqK7lf0EaKaKGtQ';
            let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=5000&type=' + this.props.filterRed.filter + '&key=' + API_KEY;

            fetch(url, {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    this.setState({ placesData: responseJson.results, isLoading: false, refreshing: false }, () => this.props.applyFilter({ applied: false }));

                })
                .catch((error) => {
                    console.log(error);
                })

        }

    }

    handleModalClose(type) {
        console.log(type);
        this.setState({
            modalVisibility: false
        })

        if (this.props.filterRed.applied === true && type === 'apply') {
            this.refs._scrollView.scrollTo({ y: 0 });
            this.handleRefresh();
        }
    }

    render() {


        if (this.state.isLoading === false) {
            return (
                <View>
                    <ScrollView
                        ref={'_scrollView'}
                        refreshControl={<RefreshControl refreshing={this.state.refreshing} enabled={true} />}
                        contentContainerStyle={styles.container}>
                        {this.renderPlaceCards()}
                    </ScrollView>

                    <TouchableHighlight
                        underlayColor={'#f5f5f5'}
                        style={[styles.filterContainer, { display: this.props.navigation.state.params.savedPlaces === true ? 'none' : 'flex' }]}
                        onPress={() => {
                            this.setState({ modalVisibility: true });
                            this.props.setCurrentFilter({ current: null });
                            this.props.setPreviousFilter({ previous: null });
                        }}>
                        <Image style={{ height: 24, width: 24 }} source={require('../assets/filter_white.png')} />
                    </TouchableHighlight>
                    <Modal
                        visible={this.state.modalVisibility}
                        animationType={'slide'}
                        onRequestClose={() => console.log('modal closed')}
                        transparent={true}
                    >
                        <Filter handleClose={this.handleModalClose.bind(this)} />
                    </Modal>
                </View>


            );
        } else {

            return (
                <View style={styles.loader}>
                    <ActivityIndicator size={30} color={'#000'} />
                    <Text style={{ fontSize: 16, fontStyle: 'italic' }}>Finding Places... </Text>
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
    filterContainer: {

        elevation: 20,
        position: 'absolute',
        //borderWidth: 0.6,
        padding: 12,
        borderRadius: 24,
        borderColor: '#f96f5c',
        backgroundColor: '#f96f5c',
        top: Dimensions.get('window').height - 150,
        left: Dimensions.get('window').width - 70,

    }

})

export default connect(({ filterRed }) => ({ filterRed }), {
    applyFilter, setCurrentFilter, setPreviousFilter
})(MainSection);