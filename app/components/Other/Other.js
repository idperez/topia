import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

export default class Other extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Settings</Text>
                <List containerStyle={{marginBottom: 20}}>
                    <ListItem
                        title="Settings"
                        leftIcon={{name: "rowing"}}
                    />
                </List>
                <Button
                    raised
                    title='Log Out' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    }
});