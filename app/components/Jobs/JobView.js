import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet, ScrollView } from 'react-native';

import MapView from 'react-native-maps';

import { Button, Card } from 'react-native-elements'

import JobMarker from './../Map/Markers/Jobs/JobMarker';

import JobList from './JobList';
import JobDetails from './JobDetails';

import Modal from "react-native-modal";

import { Actions } from 'react-native-router-flux';

import DropdownAlert from 'react-native-dropdownalert';


export default class JobView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }

    jobSavedParent = () => {
        this.dropdown.alertWithType('custom', 'Job Saved!', "");
    };

    render() {

        return (
            <ScrollView style={{
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
                            <JobDetails jobSavedParent={this.jobSavedParent} jobData={this.props.jobData}/>
                    }
                </View>
                <DropdownAlert ref={ref => this.dropdown = ref}  containerStyle={{
                    backgroundColor: '#8A7090'
                }} />
            </ScrollView>
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
    },
    saveButton: {
        marginTop: 15,
        marginBottom: 15
    }
});