import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

export default class MultipleJobEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { jobs } = this.props;

        return (
            <View>
                <Text>There are {jobs.length} jobs at this location</Text>
                <Text>Press to see more!</Text>
            </View>
        );
    }
}
