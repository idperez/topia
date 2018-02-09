import React from 'react';
import { StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

import Job from './Markers/Job';

export default class TopiaMap extends React.Component {

    animateToRegion() {
        const region = {
            latitude: 37.72111,
            longitude: -122.4311,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0061,
        };
        this._map.animateToRegion(region, 100);
    }

    render() {
        return (
            <MapView
                ref={component => {this._map = component;}}
                onPress={() => this.animateToRegion()}
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <Job
                    amount={2}
                    latitude={37.78825}
                    longitude={-122.4324}
                />
                <Job
                    amount={4}
                    latitude={37.7812}
                    longitude={-122.432}
                />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    }
});