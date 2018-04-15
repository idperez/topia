import React, { Component } from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';

import styles from './../Styles/EntryStyles';

import { Actions } from 'react-native-router-flux';

import HouseEntry from './Housing/HouseEntry';

export default class HouseSlideEntry extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showContent: true
        };
    }

    showHouseContent() {
        alert(JSON.stringify(this.props.data));
    }

    render () {

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => this.showHouseContent()}
            >
                <View style={styles.textContainer}>
                    <HouseEntry house={this.props.data[0]} />
                </View>
            </TouchableOpacity>
        );
    }
}