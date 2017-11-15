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

                <View style={styles.main}>
                    <View style={styles.header}>
                        <View style={{ width: Dimensions.get('window').width / 1.43, marginBottom: 20 }}><Text style={{ fontWeight: 'bold', fontSize: 26, color: '#222' }}>Daffodil Software Limited</Text></View>
                        <TouchableHighlight underlayColor={'#eee'} onPress={() => this.handlePress()}>
                            <Image style={{ height: 20, width: 20 }} source={require('../assets/cross.png')} />
                        </TouchableHighlight>
                    </View>
                    <View>

                        <Text style={[styles.mainText, { color: '#555' }]}>TYPE</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#222', marginBottom: 10 }}>Establishment</Text>
                        <Text style={[styles.mainText, { color: '#555' }]}>ADDRESS</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#222' }}>Sector-30 Gurugram , Haryana</Text>
                    </View>
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
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width / 1.23,
    },
    main: {


        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 20,
        width: Dimensions.get('window').width - 30,
        borderRadius: 4,
        marginTop: 130,

    },
    heading: {

        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    },
    mainText: {

        color: '#555',
        fontSize: 12,
        paddingVertical: 10,


    },

})