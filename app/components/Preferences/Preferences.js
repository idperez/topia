import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button, List, ListItem, Card, Icon, FormLabel, FormInput } from 'react-native-elements';
import { sanFranciscoWeights } from 'react-native-typography';
import profile from '../../lib/preferences/preferences';


export default class Preferences extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            inputTitle: "",
            bedroom: 0,
            inputBedroom: 0,
            bathroom: 0,
            inputBathroom: 0,
            interests: []
        };
    }

    getProfile = () => {
        profile.getProfile().then((result) => {
            this.setState({
                title: result.prefs_jobs_titles[0],
                bedroom: result.prefs_house_beds,
                bathroom: result.prefs_house_baths
            });
        }).catch(err => {
            throw err;
        });
    };

    setProfile = () => {
        profile.setProfile(
            this.state.inputTitle,
            this.state.inputBedroom,
            this.state.inputBathroom
        ).then((result) => {
            this.setState({
                title: this.state.inputTitle
            });
            alert("Preferences Saved!");
        }).catch(err => {
            throw err;
        });
    };

    componentDidMount() {
        this.getProfile();
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.saveList}>
                    <Card containerStyle={{padding: 0}}>
                        <View style={styles.navBar}>
                            <View style={styles.leftContainer}>
                                <Image
                                    style={{width: 60, height: 60}}
                                    source={{uri: 'https://i0.wp.com/barobite.com/wp-content/uploads/2017/04/avatar-round-3-1.png'}}
                                />
                            </View>
                            <Text>Profile photo</Text>
                            <View style={styles.rightContainer}>
                                <Icon
                                    name='chevron-right'
                                    type='font-awesome'
                                    color='black'/>
                            </View>
                        </View>
                    </Card>
                </View>
                <View style={styles.saveList}>
                    <Card containerStyle={{padding: 0, marginLeft: 0, marginRight: 0}}>
                        <View style={styles.navForm}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    Job
                                </Text>
                                <FormLabel>Title</FormLabel>
                                <FormInput
                                    placeholder={this.state.title}
                                    onChangeText={(text) => this.setState({inputTitle: text})}
                                />
                            </View>
                        </View>
                    </Card>
                </View>
                <View style={styles.saveList}>
                    <Card containerStyle={{padding: 0, marginLeft: 0, marginRight: 0}}>
                        <View style={styles.navForm}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    Housing
                                </Text>
                                <FormLabel>Bedroom</FormLabel>
                                <FormInput
                                    keyboardType="numeric"
                                    placeholder={this.state.bedroom.toString()}
                                    onChangeText={(text) => this.setState({bedroomInput: {text}})}
                                />
                                <FormLabel>Bathroom</FormLabel>
                                <FormInput
                                    keyboardType="numeric"
                                    placeholder={this.state.bathroom.toString()}
                                    onChangeText={(text) => this.setState({bathroomInput: {text}})}
                                />
                            </View>
                        </View>
                    </Card>
                </View>
                <View style={styles.saveList}>
                    <Card containerStyle={{padding: 0, marginLeft: 0, marginRight: 0}}>
                        <View style={styles.navForm}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.headerText}>
                                    Lifestyle
                                </Text>
                                <FormLabel>Interests</FormLabel>
                                <FormInput
                                    placeholder="Roller Coasters, Dodgeball, Hiking..."
                                />
                            </View>
                        </View>
                    </Card>
                </View>
                <View style={styles.saveButton}>
                    <Button
                        full
                        backgroundColor="#89A7A7"
                        title='Save'
                        onPress={() => this.setProfile()}/>
                </View>
            </ScrollView>
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
    leftContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginBottom: 10
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
    },
    saveButton: {
        marginTop: 15,
        marginBottom: 15
    }
});