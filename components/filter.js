import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Image,
    TouchableHighlight,
    Keyboard,
    ActivityIndicator,
    ScrollView
} from 'react-native';

export default class Filter extends Component {


    render() {

        return (

            <View style={styles.container}>
                <View style={styles.filterContainer}>
                    <View style={styles.filterHeader}>
                        <TouchableHighlight style={[styles.button, { backgroundColor: 'yellowgreen' }]}>
                            <Text style={{ color: '#FFF' }}>Apply</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.button, { backgroundColor: 'red' }]} onPress={() => this.handleClick()} >
                            <Text style={{ color: '#FFF' }}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                    <ScrollView>
                        {this.renderFilterList()}
                    </ScrollView>
                </View>

            </View>
        );
    }

    handleClick() {

        this.props.handleClose();
    }

    renderFilterList() {

        let filters = ['Hospitals', 'Restaurants', 'Petrol pumps', 'Hotels', 'Schools', 'Parks'];
        return filters.map((filter, i) => {

            return (
                <FilterContent key={i} name={filter} />
            );
        })
    }
}

const FilterContent = (props) => {

    return (
        <TouchableHighlight style={{ padding: 8, borderBottomWidth: 0.5, borderColor: 'lightgray' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>{props.name}</Text>
                <Image style={{ height: 16, width: 16 }} source={require('../assets/selected.png')} />
            </View>
        </TouchableHighlight>

    );
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingVertical: 75,
        paddingHorizontal: 45,
    },
    filterContainer: {

        backgroundColor: 'white',
        padding: 10,
        height: 210,
        width: 200,
        elevation: 5
    },
    filterHeader: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        paddingVertical: 5,
        // borderColor: 'lightgray'
    },
    button: {

        paddingHorizontal: 7,
        paddingVertical: 4,
        borderRadius: 3
    }
})