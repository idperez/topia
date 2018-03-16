import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button, List, ListItem, Card, Icon, FormLabel, FormInput } from 'react-native-elements';
import { sanFranciscoWeights } from 'react-native-typography';
import { Actions } from 'react-native-router-flux';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class Matches extends React.Component {

    constructor(props) {
        super(props);
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
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        Austin
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={94}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    94
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        Portland
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={82}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    82
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        Phoenix
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={79}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    79
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                        </Card>
                    </View>

                    <View style={styles.saveList}>
                        <Card containerStyle={{padding: 0, marginTop: 0}}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    Career
                                </Text>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        San Francisco
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={100}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    100
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        Seattle
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={90}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    90
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        New York City
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={84}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    84
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                        </Card>
                    </View>

                    <View style={styles.saveList}>
                        <Card containerStyle={{padding: 0, marginTop: 0}}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    Housing
                                </Text>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        Phoenix
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={100}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    100
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        Atlanta
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={85}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    90
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        Oklahoma City
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={79}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    79
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                        </Card>
                    </View>

                    <View style={styles.saveList}>
                        <Card containerStyle={{padding: 0, marginTop: 0}}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    Lifestyle
                                </Text>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        San Diego
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={100}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    100
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        Los Angeles
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={87}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    87
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.headerText}>
                                        Denver
                                    </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={76}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763" >
                                        {
                                            (fill) => (
                                                <Text>
                                                    76
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>
                                </View>
                            </View>
                        </Card>
                    </View>
                    <View style={{marginBottom: 10}}/>
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