import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

export default class Other extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <Text>Other</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});