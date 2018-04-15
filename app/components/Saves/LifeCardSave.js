import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

import EmptyCards from './EmptyCards';

import DisplayCards from './DisplayCards';

const lifecards = [
    {
        name: "my life in new york",
        created: "3 days ago",
        contributors: 1
    },
    {
        name: "my life in austin",
        created: "5 minutes ago",
        contributors: 3
    }
];
export default class LifeCardSave extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                { lifecards.length > 0 ? <EmptyCards/> : <DisplayCards/>}
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