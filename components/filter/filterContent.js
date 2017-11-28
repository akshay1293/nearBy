import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/action';

class FilterContent extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isClicked: false,
        }
    }


    render() {

        let actualFilters = { Hospitals: 'hospital', Restaurants: 'restaurant', Petrol: 'gas_station', Hotels: 'lodging', Schools: 'school', Institutes: 'university',Bars:'bar',ATM:'atm' };

        return (
            <TouchableHighlight
                onPress={() => this.props.setFilter({ filter: actualFilters[this.props.name.item], applied: true })}
                underlayColor={'#FFF'}
                style={{ padding: 8, borderBottomWidth: 0.5, borderColor: 'lightgray' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.name.item}</Text>
                    <Image style={{ height: 16, width: 16 }} source={require('../../assets/selected.png')} />
                </View>
            </TouchableHighlight>
        );
    }
}

export default connect(({ filterRed }) => ({ filterRed }), {
    setFilter
})(FilterContent);