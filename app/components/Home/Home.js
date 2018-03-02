import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import { Button } from 'react-native-elements';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Home extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ffffff'}} >
                <Text>hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    },
    searchButton: {
        height: 50,
        width: 200,
        marginTop: Dimensions.get('window').height / 5
    },
    buttonView: {
        alignItems: 'center'
    }
});