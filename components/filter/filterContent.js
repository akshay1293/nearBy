import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { setFilter, setCurrentFilter, setPreviousFilter } from '../../redux/action';

class FilterContent extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isClicked: false,
        }
    }


    render() {


        return (
            <TouchableHighlight
                onPress={() => this.handleClick()}
                underlayColor={'#FFF'}
                style={{ padding: 8, borderBottomWidth: 0.5, borderColor: 'lightgray' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.name.item}</Text>
                    <Image ref={this.props.name.item} style={{ height: 16, width: 16, display: 'none' }} source={require('../../assets/selected.png')} />
                </View>
            </TouchableHighlight>
        );
    }

    async handleClick() {

        let actualFilters = { Hospitals: 'hospital', Restaurants: 'restaurant', Petrol: 'gas_station', Hotels: 'lodging', Schools: 'school', Institutes: 'university', Bars: 'bar', ATM: 'atm' };

        this.props.setFilter({ filter: actualFilters[this.props.name.item], applied: true })
        await this.props.setCurrentFilter({ current: this.refs[this.props.name.item] });

        if (this.props.filterRed.selector.previousValue === null) {

            this.props.filterRed.selector.currentValue.setNativeProps({ display: 'flex' });
            await this.props.setPreviousFilter({ previous: this.refs[this.props.name.item] });
        } else {

            this.props.filterRed.selector.previousValue.setNativeProps({ display: 'none' });
            this.props.filterRed.selector.currentValue.setNativeProps({ display: 'flex' });
            await this.props.setPreviousFilter({ previous: this.refs[this.props.name.item] });

        }


    }
}

export default connect(({ filterRed }) => ({ filterRed }), {
    setFilter, setCurrentFilter, setPreviousFilter
})(FilterContent);