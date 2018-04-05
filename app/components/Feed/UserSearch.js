import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

import { Icon, List, ListItem } from 'react-native-elements';
import { sanFranciscoWeights } from 'react-native-typography';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Actions } from 'react-native-router-flux';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const recentUsers = [
    {
        title: 'Doug Carrol'
    },
    {
        title: 'Isidro Perez'
    },
    {
        title: 'Katie Mitchell',
    },
    {
        title: 'Steve Ballmer'
    }

];

export default class UserSearch extends React.Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ffffff'}} >
                <View style={styles.leftContainer}>
                    <Icon
                        name='keyboard-arrow-left'
                        color='#000000'
                        size={50}
                        onPress={() => Actions.pop()}/>
                </View>
                <View style={{flex: 1}}>
                    <View style={{marginTop: 40}}>
                        <View style={{marginLeft: 20}}>
                            <Text style={styles.recentText}>Recent Searches:</Text>
                        </View>
                        <List>
                            {
                                recentUsers.map((item, i) => (
                                    <ListItem
                                        noBorder
                                        key={i}
                                        title={item.title}
                                        containerStyle={{ borderBottomWidth: 0 }}
                                        titleStyle={styles.titleText}
                                    >
                                        <Text>{item.title}</Text>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    leftContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20
    },
    recentText: {
        ...sanFranciscoWeights.light,
        marginTop: 5,
        fontSize: 20,
        color: '#494763'
    },
    titleText: {
        ...sanFranciscoWeights.light,
        marginTop: 5,
        fontSize: 14,
        color: '#494763'
    }
});