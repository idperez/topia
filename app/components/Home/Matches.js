import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button, List, ListItem, Card, Icon, FormLabel, FormInput } from 'react-native-elements';
import { sanFranciscoWeights } from 'react-native-typography';
import { Actions } from 'react-native-router-flux';
import profile from '../../lib/preferences/preferences';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class Matches extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            matches: []
        }
    }

    getMatches = () => {
        profile.getCityMatch().then((result) => {
            this.setState({
                matches: result.cityMatch
            });
        }).catch(err => {
            throw err;
        });
    };

    componentDidMount() {
        this.getMatches()
    }

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
                <ScrollView>
                    <View style={styles.saveList}>
                        <Card containerStyle={{padding: 0, marginTop: 0}}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    Overall
                                </Text>
                            </View>
                            {
                                this.state.matches.map((item, i) => (
                                    <View style={styles.navForm} key={i}>
                                        <View style={styles.leftContainer}>
                                            <Text style={styles.headerText}>
                                                {item.city}, {item.state}
                                            </Text>
                                        </View>
                                        <View style={styles.rightContainer}>
                                            <AnimatedCircularProgress
                                                size={40}
                                                width={6}
                                                fill={item.rating}
                                                tintColor="#494763"
                                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                                backgroundColor="#C6AADB" >
                                                {
                                                    (fill) => (
                                                        <Text>
                                                            {Math.ceil(item.rating)}
                                                        </Text>
                                                    )
                                                }
                                            </AnimatedCircularProgress>
                                        </View>
                                    </View>
                                ))
                            }
                        </Card>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    leftContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20
    },
    saveList: {
        marginTop: 15,
    },
    saveItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        ...sanFranciscoWeights.light,
        marginTop: 5,
        fontSize: 16,
        marginLeft: 10,
        color: '#494763'
    },
    rightSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    navBar: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 5
    },
    rightIcon: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
    },
    cardButton: {
        backgroundColor: 'white'
    }
});