import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

import { Icon, List, ListItem } from 'react-native-elements';
import { sanFranciscoWeights } from 'react-native-typography';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Actions } from 'react-native-router-flux';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const recentCities = [
    {
        title: 'Seattle, WA',
        match: 20
    },
    {
        title: 'San Diego, CA',
        match: 55
    },
    {
        title: 'Austin, TX',
        match: 24
    },
    {
        title: 'Denver, CO',
        match: 58
    },
    {
        title: 'Phoenix, AZ',
        match: 89
    },

];

export default class Home extends React.Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ffffff'}} >
                <View style={styles.leftContainer}>
                    <Icon
                        name='keyboard-arrow-left'
                        color='#000000'
                        size={50}
                        onPress={() => Actions.pop()}/>
                </View>
                <View style={{flex: 1}}>
                    <GooglePlacesAutocomplete
                        placeholder='Where ya going?'
                        minLength={2} // minimum length of text to search
                        autoFocus={false}
                        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                        listViewDisplayed='auto'    // true/false/undefined
                        fetchDetails={true}
                        renderDescription={row => row.description} // custom description render
                        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                            Actions.topiaMap({location: details.geometry.location});
                        }}

                        getDefaultValue={() => ''}

                        query={{
                            // available options: https://developers.google.com/places/web-service/autocomplete
                            key: 'AIzaSyB0qLyeZGKreKL1ktvePOAnMD2XJPRkCE4',
                            language: 'en', // language of the results
                            types: '(cities)' // default: 'geocode'
                        }}

                        styles={{
                            textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderTopWidth: 0,
                                borderBottomWidth:0,
                            },
                            textInput: {
                                marginLeft: 0,
                                marginRight: 0,
                                height: 60,
                                color: '#494763',
                                fontSize: 25
                            },
                            description: {
                                fontWeight: 'bold',
                                marginTop: 10,
                                height: 20
                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb'
                            },
                        }}

                        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                        GoogleReverseGeocodingQuery={{
                            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                        }}
                        GooglePlacesSearchQuery={{
                            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                            rankby: 'distance',
                            types: 'food'
                        }}

                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

                        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                    >
                        <View style={{marginTop: 40}}>
                            <View style={{marginLeft: 20}}>
                                <Text style={styles.recentText}>Recent Searches:</Text>
                            </View>
                            <List>
                                {
                                    recentCities.map((item, i) => (
                                        <ListItem
                                            noBorder
                                            key={i}
                                            title={item.title}
                                            rightIcon={<AnimatedCircularProgress
                                                size={40}
                                                width={6}
                                                fill={item.match}
                                                tintColor="#C6AADB"
                                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                                backgroundColor="#494763">
                                                {
                                                    (fill) => (
                                                        <Text>
                                                            {item.match}
                                                        </Text>
                                                    )
                                                }
                                            </AnimatedCircularProgress>}
                                            containerStyle={{ borderBottomWidth: 0 }}
                                            titleStyle={styles.titleText}
                                        />
                                    ))
                                }
                            </List>
                        </View>
                    </GooglePlacesAutocomplete>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    leftContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20
    },
    recentText: {
        ...sanFranciscoWeights.light,
        marginTop: 5,
        fontSize: 20,
        color: '#494763'
    },
    titleText: {
        ...sanFranciscoWeights.light,
        marginTop: 5,
        fontSize: 14,
        color: '#494763'
    }
});