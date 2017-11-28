import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    FlatList,
    RefreshControl
} from 'react-native';

import FilterContent from './filterContent';
import { connect } from 'react-redux';
import { applyFilter } from '../../redux/action';

class Filter extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        console.log(this.props.filterRed.filter);
        let filters = ['Hospitals', 'Restaurants', 'Bars', 'Petrol', 'Hotels', 'Schools', 'Institutes', 'ATM'];

        return (

            <View style={styles.container}>
                <View style={styles.filterContainer}>
                    <View style={styles.filterHeader}>
                        <TouchableHighlight
                            onPress={() => {
                                //this.props.applyFilter({ applied: true })
                                this.handleClick();

                            }}
                            style={[styles.button, { backgroundColor: '#00b359' }]}>
                            <Text style={{ color: '#FFF' }}>Apply</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.button, { backgroundColor: '#ff4d4d' }]} onPress={() => this.handleClick()} >
                            <Text style={{ color: '#FFF' }}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                    <FlatList
                        data={filters.sort()}
                        renderItem={(data) => <FilterContent name={data} />}

                    />
                </View>
            </View>
        );
    }

    handleClick() {

        this.props.handleClose();
    }

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
    },
    button: {

        paddingHorizontal: 7,
        paddingVertical: 4,
        borderRadius: 3
    }
})

export default connect(({ filterRed }) => ({ filterRed }), {
    applyFilter
})(Filter);