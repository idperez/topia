import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { Button, Header, FormLabel, FormInput } from 'react-native-elements';
import { sanFranciscoWeights } from 'react-native-typography';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
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
                    <Header
                        outerContainerStyles={{ borderBottomWidth: 0 }}
                        innerContainerStyles={{ backgroundColor: 'transparent'}}
                        backgroundColor= 'transparent'
                        leftComponent={{ icon: 'keyboard-arrow-left', color: '#fff',  onPress: () => Actions.pop() }}
                    />
                    <View style={styles.welcome}>
                        <Text style={styles.landingText}>
                            Welcome Back.
                        </Text>
                        <FormLabel
                            containerStyle={styles.formLabelContainer}
                            labelStyle={styles.formLabel}>
                            Email
                        </FormLabel>
                        <FormInput
                            inputStyle={styles.formInput}
                        />
                        <FormLabel
                            containerStyle={styles.formLabelContainer}
                            labelStyle={styles.formLabel}>
                            Password
                        </FormLabel>
                        <FormInput
                            inputStyle={styles.formInput}
                            secureTextEntry={true}
                        />
                        <View style={styles.loginContainer}>
                            <Button containerViewStyle={styles.loginButton}
                                    rounded={true}
                                    raised
                                    outline={true}
                                    color="#f7f7f7"
                                    title='Login' />
                            <Button containerViewStyle={styles.loginButton}
                                    rounded={true}
                                    raised
                                    backgroundColor={"#6E3272"}
                                    color="#f7f7f7"
                                    icon={{type: 'font-awesome', name: 'facebook'}}
                                    title='Login with Facebook' />
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        marginTop: Dimensions.get('window').height / 11,
    },
    landingText: {
        ...sanFranciscoWeights.light,
        marginLeft: Dimensions.get('window').width / 20,
        marginBottom: Dimensions.get('window').height / 15,
        backgroundColor: 'transparent',
        fontSize: 28,
        color: '#f7f7f7'
    },
    formLabelContainer: {
        backgroundColor: 'transparent'
    },
    formLabel: {
        color: "#f7f7f7"
    },
    formInput: {
        color: "#f7f7f7"
    },
    loginContainer: {
        marginTop: Dimensions.get('window').height / 17
    },
    loginButton: {
        backgroundColor: 'transparent',
        marginTop: 10,
        marginLeft: Dimensions.get('window').width / 15,
        marginRight: Dimensions.get('window').width / 17
    }
});