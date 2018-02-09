import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

export default class Job extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    }

    getDisplayAmount() {
        if(this.props.amount > 9) {
            return "+9";
        } else if(this.props.amount == 1) {
            return "";
        } else {
            return this.props.amount;
        }
    }

    jobClicked() {
        this.setState({pressed: !this.state.pressed});
    }

    render() {
        return (
            <MapView.Marker
                onPress={() => this.jobClicked()}
                coordinate={{
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                }}>
                <View style={styles.radius}>
                    <View style={this.state.pressed ? styles.markerPressed : styles.marker}>
                        <Text style={this.state.pressed ? styles.markerTextPressed : styles.markerText}>{this.getDisplayAmount()}</Text>
                    </View>
                </View>
            </MapView.Marker>
        );
    }
}

const styles = StyleSheet.create({
    radius: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 0,
        borderColor: 'rgba(0, 122, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        height: 25,
        width: 25,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 25 / 2,
        overflow: 'hidden',
        backgroundColor: '#6E3272'
    },
    markerPressed: {
        height: 30,
        width: 30,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 30 / 2,
        overflow: 'hidden',
        backgroundColor: '#E7B7DC'
    },
    markerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#6E3272',
        fontSize: 14
    },
    markerTextPressed: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#E7B7DC',
        fontSize: 18
    }
});