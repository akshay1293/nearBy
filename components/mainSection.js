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
        header: null,
    };
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />

            </ScrollView>
        );
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