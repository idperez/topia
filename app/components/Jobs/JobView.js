import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

import JobMarker from './../Map/Markers/Jobs/JobMarker';

import JobList from './JobList';
import JobDetails from './JobDetails';

export default class JobView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <View style={{height: Dimensions.get('window').height / 3.5}}>
                    <MapView
                        ref={component => {this._map = component;}}
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0082,
                            longitudeDelta: 0.0061
                        }}
                        zoomEnabled={false}>
                        <JobMarker
                            index={0}
                            amount={8}
                            latitude={37.78825}
                            longitude={-122.4324}
                        />
                    </MapView>
                </View>
                <View style={{flex: 1, backgroundColor: '#f5f5f5'}} >
                    {
                        this.props.amount > 1 ?
                            <JobList/>
                            :
                            <JobDetails/>
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    carousel: {
        marginTop: Dimensions.get('window').height / 1.5
    }
});