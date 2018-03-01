import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

import { sanFranciscoWeights } from 'react-native-typography';

import { PricingCard } from 'react-native-elements'

export default class JobList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View>
                <PricingCard
                    color='#4f9deb'
                    title='UX Engineer'
                    price='$95,000'
                    info={['yelp', 'San Francisco', 'Entry Level']}
                    button={{ title: 'See Nearby Homes', icon: 'home' }}
                />
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