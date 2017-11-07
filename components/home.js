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
} from 'react-native';
import Icon from './icon';

export default class Home extends Component {

    constructor(props) {

        super(props);
        this.state = {
            text: '',
            typing: false,
            focus: false,
        }
    }
    static navigationOptions = {
        header: null,
    };

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchIconContainer}>
                        <Icon name={'http://images.clipartpanda.com/search-png-white-white-search-icon-transparent-background.png'} />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        returnKeyType='search'
                        placeholder="Search for Places"
                        onChange={(text) => this.setState({ text })}
                        value={this.state.text}
                        returnKeyType={'search'}
                        onSubmitEditing={() => this.props.navigation.navigate('main')}
                        onFocus={() => this.setState({ focus: true })}
                        onBlur={() => this.setState({ focus: false })}
                    />
                    <View style={styles.searchIconContainer}>
                        <Icon name={'http://simpleicon.com/wp-content/uploads/cross.png'} />
                    </View>
                    <View style={styles.searchIconContainer}>
                        <Icon name={'https://cdn0.iconfinder.com/data/icons/map-3/1024/location-512.png'} />
                    </View>
                </View>
                <View style={[styles.savedPlaces, { display: this.state.focus === true ? 'flex' : 'none', }]}>
                    <Image style={{ height: 20, width: 20 }} source={require('../assets/bookmark.png')} />
                    <Text style={{ paddingLeft: 5, color: '#333' }}> Saved Places</Text>
                </View>
                <View style={[styles.searchTextContainer, { display: this.state.text ? 'none' : 'flex' }]}>
                    <Image style={{ height: 100, width: 100 }} source={require('../assets/nearby.png')} />
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
        justifyContent: 'center',
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
        elevation: 1,
        paddingHorizontal: 8,
        paddingVertical: 10

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

        top: Dimensions.get('window').height - 500,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchText: {

        color: 'gray',
    }
})