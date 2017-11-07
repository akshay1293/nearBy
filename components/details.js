import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';


export default class Details extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {

        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Details</Text>
                    <Text style={styles.heading} onPress={this.handlePress.bind(this)}> &#9747;</Text>

                </View>
                <View style={styles.main}>
                    <View style={{ width: Dimensions.get('window').width / 1.33, marginBottom: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 24, color: '#222' }}>Daffodil Software Limited</Text></View>
                    <Text style={[styles.mainText, { color: '#555' }]}>TYPE</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#222', marginBottom: 10 }}>Establishment</Text>
                    <Text style={[styles.mainText, { color: '#555' }]}>ADDRESS</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#222' }}>Sector-30 Gurugram , Haryana</Text>
                </View>
            </View>
        );
    }

    handlePress() {

        this.props.handleClick();
    }
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {

        display: 'flex',
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        elevation: 2,
    },
    main: {

        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 1,
        //borderColor: '#555',

        paddingHorizontal: 10,

    },
    heading: {

        color: '#555',
        fontWeight: 'bold',
        fontSize: 20,
    },
    mainText: {

        color: '#555',
        //fontWeight: 'bold',
        fontSize: 12,
        paddingVertical: 10,


    }
})