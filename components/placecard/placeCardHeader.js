import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    Dimensions,
    Modal
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

        return (

            <View style={styles.container}>
                <Text style={styles.heading}>Heading Goes Here</Text>
                <Menu>
                    <MenuTrigger>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>&#9776;</Text>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert('Saved')} >
                            <Text style={styles.heading}>Save Place</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => this.setState({ modalVisible: true })} >
                            <Text style={styles.heading}>Details</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
                <Modal
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { }}
                    animationType={'slide'}
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
        padding: 5,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1

    },
    heading: {

        color: '#555',
        fontWeight: 'bold',
        fontSize: 16,
    },

})