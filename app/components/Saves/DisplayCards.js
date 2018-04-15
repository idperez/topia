import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

export default class DisplayCards extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }

    render() {

        return (
            <View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    carousel: {
        marginTop: Dimensions.get('window').height / 1.5
    },
    saveButton: {
        marginTop: 15,
        marginBottom: 15
    }
});