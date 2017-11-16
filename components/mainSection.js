import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Image,
    ScrollView,
    TouchableHighlight,

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

            placesData: this.props.navigation.state.params.data,
        }
    }
    render() {

        //console.log(this.props.navigation.state.params.data);
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {this.renderPlaceCards()}

            </ScrollView>
        );
    }

    renderPlaceCards() {

        return this.state.placesData.results.map((place, i) => {

            return <PlaceCard place={place} key={i} />
        })
    }
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    }
})