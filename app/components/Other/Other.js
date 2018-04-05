import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

export default class Other extends React.Component {

    constructor(props) {
        super(props);
    }

    logOut = () => {
        alert("log out");
    };

    render() {

        return (
            <View style={styles.container}>
                <List containerStyle={{marginBottom: 20, marginTop: 40}}>
                    <ListItem
                        title="Settings"
                        leftIcon={{name: "rowing"}}
                    />
                    <ListItem
                        title="Privacy"
                        leftIcon={{name: "lock"}}
                    />
                    <ListItem
                        title="Terms of Service"
                        leftIcon={{name: "book"}}
                    />
                    <ListItem
                        title="Help and Support"
                        leftIcon={{name: "question-answer"}}
                    />
                </List>
                <View style={styles.logOutButton}>
                    <Button
                        full
                        backgroundColor="#89A7A7"
                        title='Log Out'
                        onPress={() => this.logOut()}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    logOutButton: {
        marginTop: 15,
        marginBottom: 15
    }
});