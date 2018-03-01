import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

import { sanFranciscoWeights } from 'react-native-typography';

export default class JobList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View>
                <Text style={styles.headerText}>
                    This location contains 8 jobs
                </Text>
                <Card containerStyle={styles.card}>
                    <View style={styles.user}>
                        <Text style={styles.name}>Software Egineer</Text>
                        <Text style={styles.name}>Yelp</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.card}>
                    <View style={styles.user}>
                        <Text style={styles.name}>Software Egineer</Text>
                        <Text style={styles.name}>Yelp</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.card}>
                    <View style={styles.user}>
                        <Text style={styles.name}>Software Egineer</Text>
                        <Text style={styles.name}>Yelp</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.card}>
                    <View style={styles.user}>
                        <Text style={styles.name}>Software Egineer</Text>
                        <Text style={styles.name}>Yelp</Text>
                    </View>
                </Card>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        ...sanFranciscoWeights.light,
        marginTop: 5,
        fontSize: 20,
        color: '#494763',
        textAlign: 'center'
    },
    card: {
        marginLeft: 2,
        marginRight: 2,
        marginTop: 3,
        marginBottom: 3
    }
});