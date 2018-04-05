import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { SearchBar, Divider, Card, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { sanFranciscoWeights } from 'react-native-typography';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export default class Home extends React.Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ffffff'}} >
                <View style={styles.content}>
                    <TouchableOpacity onPress={Actions.userSearch}>
                        <SearchBar
                            lightTheme
                            pointerEvents="none"
                            placeholder='Search explorers...' />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.saveList}>
                        <TouchableOpacity>
                            <Card containerStyle={{padding: 0, marginLeft: 0, marginRight: 0}}>
                                <View style={styles.navBar}>
                                    <View style={styles.leftContainer}>
                                        <Image
                                            style={{width: 45, height: 45}}
                                            source={{uri: 'https://i0.wp.com/barobite.com/wp-content/uploads/2017/04/avatar-round-3-1.png'}}
                                        />
                                        <View style={styles.cardTextSection}>
                                            <Text style={styles.authorText}>Doug Carroll<Text style={styles.cityText}> 6hrs</Text> </Text>
                                            <Text style={styles.cityText}>in New York, NY</Text>
                                            <Text style={styles.cityText}>as Software Engineer</Text>
                                            <Text style={styles.titleText}>My Life in New York</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.leftContainer}>
                                    <View style={styles.postContent}>
                                        <Image
                                            style={{width: 200, height: 200}}
                                            source={{uri: 'http://phoenixcondokings.com/wp-content/uploads/2012/07/Historic-Phoenix-Homes.jpg'}}
                                        />
                                        <View style={styles.rightPostContent}>
                                            <Image
                                                style={{width: 100, height: 70}}
                                                source={{uri: 'https://wrightgrid.com/wp-content/uploads/2015/09/squarespace-logo.png'}}
                                            />
                                            <View style={{marginTop: 10}}>
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
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: '#89A7A7' }} />
                                <View style={styles.bottomCard}>
                                    <View style={{marginLeft: 110, marginRight: 110}}>
                                        <Icon
                                            name='thumb-up' />
                                        </View>
                                    <View>
                                        <Icon
                                            name='comment' />
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchButton: {
        height: 50,
        width: 200,
        marginTop: Dimensions.get('window').height / 5
    },
    headerText: {
        ...sanFranciscoWeights.light,
        marginTop: 20,
        fontSize: 22,
        marginLeft: 10,
        color: '#494763'
    },
    bottomCard: {
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row'
    },
    postContent: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row'
    },
    rightPostContent: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        alignItems: 'center'
    },
    content: {
        marginTop: Dimensions.get('window').height / 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    imageList: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 25,
        marginRight: 25
    },
    authorText: {
        ...sanFranciscoWeights.light,
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 10
    },
    titleText: {
        ...sanFranciscoWeights.light,
        marginTop: 3,
        fontSize: 18,
        marginLeft: 10
    },
    cityText: {
        ...sanFranciscoWeights.light,
        fontSize: 12,
        marginLeft: 10
    },
    rightSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cardTextSection: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    navBar: {
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 5
    }
});