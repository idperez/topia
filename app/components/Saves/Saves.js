import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import { Button, List, ListItem, Card, Icon } from 'react-native-elements';
import { sanFranciscoWeights } from 'react-native-typography';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class Saves extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.saveList}>
                    <Card containerStyle={{padding: 0}}>
                        <View style={styles.navBar}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    San Francisco
                                </Text>
                            </View>
                            <Image
                                style={{width: 35, height: 35}}
                                source={{uri: 'http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png'}}
                            />
                            <View style={styles.rightContainer}>
                                <AnimatedCircularProgress
                                    size={40}
                                    width={6}
                                    fill={45}
                                    tintColor="#C6AADB"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor="#494763" >
                                    {
                                        (fill) => (
                                            <Text>
                                                43
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginRight: 10}}>
                            <View style={{width: Dimensions.get('window').width / 3.4, height: 30}} >
                                <Icon
                                    name='user'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                            <View style={{width: Dimensions.get('window').width / 3, height: 30}} >
                                <Icon
                                    name='edit'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                            <View style={{width: Dimensions.get('window').width / 3, height: 30}} >
                                <Icon
                                    name='ellipsis-v'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                        </View>
                    </Card>
                    <Card containerStyle={{padding: 0}}>
                        <View style={styles.navBar}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    Austin
                                </Text>
                            </View>
                            <Image
                                style={{width: 35, height: 35}}
                                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzFbLMlJ2WIIk9yUSOP6zdw_PBcjJqwr1Ac2VxaAQ6Aq2FrBozA'}}
                            />
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
                                                81
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginRight: 10}}>
                            <View style={{width: Dimensions.get('window').width / 3.4, height: 30}} >
                                <Icon
                                    name='user'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                            <View style={{width: Dimensions.get('window').width / 3, height: 30}} >
                                <Icon
                                    name='edit'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                            <View style={{width: Dimensions.get('window').width / 3, height: 30}} >
                                <Icon
                                    name='ellipsis-v'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                        </View>
                    </Card>
                    <Card containerStyle={{padding: 0}}>
                        <View style={styles.navBar}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    Seattle
                                </Text>
                            </View>
                            <Image
                                style={{width: 35, height: 35}}
                                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png'}}
                            />
                            <View style={styles.rightContainer}>
                                <AnimatedCircularProgress
                                    size={40}
                                    width={6}
                                    fill={65}
                                    tintColor="#C6AADB"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor="#494763" >
                                    {
                                        (fill) => (
                                            <Text>
                                                68
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginRight: 10}}>
                            <View style={{width: Dimensions.get('window').width / 3.4, height: 30}} >
                                <Icon
                                    name='user'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                            <View style={{width: Dimensions.get('window').width / 3, height: 30}} >
                                <Icon
                                    name='edit'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                            <View style={{width: Dimensions.get('window').width / 3, height: 30}} >
                                <Icon
                                    name='ellipsis-v'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                        </View>
                    </Card>
                </View>
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
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
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