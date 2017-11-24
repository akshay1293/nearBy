import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    Dimensions,
    Modal,
    TouchableHighlight,
    AsyncStorage,
    ToastAndroid
} from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import Icon from '../icon';
import Details from '../details'


export default class PlaceCardHeader extends Component {

    constructor() {

        super();

        this.state = {

            modalVisible: false,

        }
    }

    render() {
        // console.log(JSON.parse(this.props.placeData));
        return (

            <View style={styles.container}>
                <Text style={[styles.heading, { paddingBottom: 5, width: 250 }]}>{this.props.placeData.name}</Text>
                <Menu>
                    <MenuTrigger>
                        <View style={{ width: 30, display: 'flex' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'flex-end' }}>&#9776;</Text>
                        </View>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => {

                            try {
                                if (this.props.savedPlaces !== true) {
                                    AsyncStorage.setItem(this.props.placeData.place_id, JSON.stringify(this.props.placeData), () => {

                                        ToastAndroid.show('Place saved succesfully', ToastAndroid.SHORT);
                                        AsyncStorage.getItem(this.props.placeData.place_id, (err, result) => {
                                        });
                                    });
                                } else {

                                    AsyncStorage.removeItem(this.props.placeData.place_id, () => {

                                        ToastAndroid.show('place removed , Please refresh', ToastAndroid.SHORT);
                                    });


                                }

                            } catch (error) {

                                console.log(error);
                            }
                        }} >
                            <Text style={styles.heading}>{this.props.savedPlaces === true ? "Remove Place" : "Save Place"}</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
                <Modal
                    transparent={true}
                    visible={this.state.modalVisible}
                    animationType={'fade'}
                    onRequestClose={() => { }}
                    style={{ height: 300, width: 300 }}
                >
                    <Details handleClick={this.showModal.bind(this)} />

                </Modal>
            </View>
        );
    }

    showModal() {

        this.setState({

            modalVisible: false
        })
    }
}

const styles = StyleSheet.create({

    container: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1

    },
    heading: {

        color: '#555',
        fontWeight: 'bold',
        fontSize: 15,
    },

})