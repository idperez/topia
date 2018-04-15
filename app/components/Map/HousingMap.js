import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

import MapView from 'react-native-maps';

import HouseMarker from './Markers/Housing/HouseMarker';

import housing from './../../lib/housing/housing';

import { Header, Button } from 'react-native-elements';

import { sanFranciscoWeights } from 'react-native-typography';

import ActionButton from 'react-native-action-button';

import Carousel from 'react-native-snap-carousel';

import { Icon } from 'react-native-elements';
import { sliderWidth, itemWidth } from './Carousel/Styles/EntryStyles';
import HouseSlideEntry from './Carousel/Components/HouseSlideEntry';
import carouselStyles from './Carousel/Styles/index.js';

import { Actions } from 'react-native-router-flux';

const SLIDER_1_FIRST_ITEM = 1;

export default class HousingMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mapMarkers: <View/>,
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null,
            slider1Item: 0,
            housingData: [],
            carouselData: []
        };
    }

    displayHouse = (lat, long, index) => {
        const region = {
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.1682,
            longitudeDelta: 0.1661
        };

        this.setState({
            slider1Item: index,
            carouselData: this.state.housingData,
        });
    };

    adjustSalary() {

    }

    onMapReady = () => {
        const region = {
            latitude:  29.8569348,
            longitude: -95.26405559
        };
        this.getHousing(region);
    };

    getHousing = (region) => {
        housing.getHousingData(
            29.8569348,
            -95.26405559
        ).then(housingData => {
            this.setMarkers(housingData);
        }).catch(err => {
            throw err;
        });
    };

    setMarkers(housingData) {
        let markers = [];

        housingData.map((house, i) => {
            markers.push(
                <HouseMarker
                    key={i}
                    index={i}
                    lat={house.lat}
                    long={house.long}
                    displayHouse={this.displayHouse}
                />
            )
        });

        this.setState({
            mapMarkers: markers,
            housingData: housingData
        });
    }

    _renderItem({item, index}) {
        return (
            <HouseSlideEntry
                data={item}
                even={(index + 1) % 2 === 0}
            />
        );
    }

    onCarouselChange(index) {
        const swipedJob = this.state.housingData[index];
        this.setState({ slider1ActiveSlide: index });
        const region = {
            latitude: swipedJob.lat,
            longitude: swipedJob.long,
            latitudeDelta: 0.0082,
            longitudeDelta: 0.0061
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
                        latitude: 29.8569348,
                        longitude: -95.26405559,
                        latitudeDelta: 0.4922,
                        longitudeDelta: 0.4421,
                    }}
                    onMapReady={this.onMapReady}>
                    {this.state.mapMarkers}
                </MapView>
                <Header
                    backgroundColor={'#bdc3c7'}
                    leftComponent={ <Icon
                        name='keyboard-arrow-left'
                        color='#000000'
                        size={50}
                        containerStyle={{marginTop: 30}}
                        onPress={() => Actions.pop()}/>}
                    centerComponent={<View><Text style={styles.headerText}>Homes with <Text style={styles.salaryText}>$95,000</Text> salary</Text></View>}
                />
                <ActionButton buttonColor="rgba(141, 59, 114, 1)">
                    <ActionButton.Item buttonColor='#C6AADB' title="Adjust Salary" onPress={() => this.adjustSalary()}>
                        <Icon name="attach-money" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#89A7A7' title="Lifestyle" onPress={() => {}}>
                        <Icon name="local-drink" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
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
    },
    leftContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20
    },
    headerText: {
        ...sanFranciscoWeights.light,
        fontSize: 18,
        marginBottom: 5,
        color: '#000000'
    },
    salaryText: {
        ...sanFranciscoWeights.light,
        fontSize: 18,
        marginLeft: 10,
        color: '#494763'
    }
});
