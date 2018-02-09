import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

import JobMarker from './Markers/Jobs/JobMarker';

import jobs from './../../lib/jobs/jobs';

import Carousel from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from './Carousel/Styles/EntryStyles';
import SliderEntry from './Carousel/Components/SlideEntry';
import carouselStyles from './Carousel/Styles/index.js';

const SLIDER_1_FIRST_ITEM = 1;

export default class TopiaMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mapMarkers: <View/>,
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null,
            slider1Item: 0,
            jobData: [],
            carouselData: []
        };
    }

    displayJob = (latitude, longitude, index) => {
        const region = {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0082,
            longitudeDelta: 0.0061
        };
        this._map.animateToRegion(region, 100);

        this.setState({
            slider1Item: index,
            carouselData: this.state.jobData,
        });
    };

    onMapReady = () => {
        const region = {
            latitude: 37.72111,
            longitude: -122.4311
        };
        this.getJobs(region);
    };

    getJobs = (region) => {
        jobs.getJobInformation(
            region.latitude,
            region.longitude
        ).then(jobData => {
            this.setMarkers(jobData);
        }).catch(err => {
            throw err;
        });
    };

    setMarkers(jobData) {
        let markers = [];

        jobData.map((job, i) => {
            markers.push(
                <JobMarker
                    key={i}
                    index={i}
                    amount={job.jobs.length}
                    latitude={job.latitude}
                    longitude={job.longitude}
                    displayJob={this.displayJob}
                />
            )
        });

        this.setState({
            mapMarkers: markers,
            jobData: jobData
        });
    }

    _renderItem({item, index}) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
            />
        );
    }

    onCarouselChange(index) {
        const swipedJob = this.state.jobData[index];
        this.setState({ slider1ActiveSlide: index });
        const region = {
            latitude: swipedJob.latitude,
            longitude: swipedJob.longitude,
            latitudeDelta: 0.0082,
            longitudeDelta: 0.0061,
        };
        this._map.animateToRegion(region, 100);
    }

    render() {
        return (
            <View style={styles.homeContainer}>
            <MapView
                ref={component => {this._map = component;}}
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onMapReady={this.onMapReady}>
                {this.state.mapMarkers}
            </MapView>
                <View style={styles.carousel} >
                    <Carousel
                        ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                        data={this.state.carouselData}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        firstItem={this.state.slider1Item}
                        inactiveSlideScale={0.94}
                        inactiveSlideOpacity={0.7}
                        enableMomentum={false}
                        containerCustomStyle={carouselStyles.slider}
                        contentContainerCustomStyle={carouselStyles.sliderContentContainer}
                        loop={true}
                        loopClonesPerSide={2}
                        onSnapToItem={(index) => this.onCarouselChange(index)}
                    />
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