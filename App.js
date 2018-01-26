import React from 'react';
import { View, StyleSheet } from 'react-native';
import Routes from './app/components/Routes';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Routes/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});