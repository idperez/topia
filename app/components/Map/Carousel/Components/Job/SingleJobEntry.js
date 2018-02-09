import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

export default class SingleJobEntry extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { jobtitle, company, snippet } = this.props.job;

        return (
            <View>
                <Text>{jobtitle}</Text>
                <Text>{company}</Text>
                <Text>{snippet}</Text>
                <Text>herro</Text>
            </View>
        );
    }
}
