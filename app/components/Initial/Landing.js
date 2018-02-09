import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { Button } from 'react-native-elements'
import { sanFranciscoWeights } from 'react-native-typography'
import { Actions } from 'react-native-router-flux';

export default class Landing extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#E7B7DC', flex: 1 }} />
                <LinearGradient
                    start={[0, 1]} end={[1, 0]}
                    colors={['rgba(75,41,107,0.8)', 'transparent']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: Dimensions.get('window').height
                    }}
                >
                    <View style={styles.login}>
                        <Button
                                containerViewStyle={styles.loginButton}
                                rounded={true}
                                raised
                                transparent={true}
                                color="#f7f7f7"
                                title='Log In'
                                onPress={Actions.login}/>
                    </View>

                    <View style={styles.welcome}>
                        <Image
                            style={styles.logo}
                            source={require('./../../../assets/t-logo.png')}
                        />
                        <Text style={styles.landingText}>
                            Welcome to Topia.
                        </Text>
                        <Button containerViewStyle={styles.welcomeButton}
                            rounded={true}
                            raised
                            backgroundColor={"#6E3272"}
                            color="#f7f7f7"
                            icon={{type: 'font-awesome', name: 'facebook'}}
                            title='Login with Facebook' />

                        <Button containerViewStyle={styles.welcomeButton}
                            rounded={true}
                            raised
                            outline={true}
                            color="#f7f7f7"
                            title='Create Account'
                            onPress={Actions.createAccount}/>
                    </View>

                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        marginTop: Dimensions.get('window').height / 7,
    },
    logo: {
        marginLeft: Dimensions.get('window').width / 12,
        marginBottom: Dimensions.get('window').height / 15,
        width: 50,
        height: 80
    },
    landingText: {
        ...sanFranciscoWeights.light,
        marginLeft: Dimensions.get('window').width / 8,
        marginBottom: Dimensions.get('window').height / 15,
        backgroundColor: 'transparent',
        fontSize: 28,
        color: '#fff'
    },
    welcomeButton: {
        backgroundColor: 'transparent',
        marginTop: 10,
        marginLeft: Dimensions.get('window').width / 15,
        marginRight: Dimensions.get('window').width / 17
    },
    login: {
        alignItems: 'flex-end'
    },
    loginButton: {
        backgroundColor: 'transparent',
        marginTop: Dimensions.get('window').height / 25
    }
});