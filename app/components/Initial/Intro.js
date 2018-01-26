import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 320,
    }
});

const slides = [
    {
        key: 'slide-1',
        title: 'Welcome!',
        text: 'Topia lets you find a city right for you',
        image: require('./../../../assets/slide-1.png'),
        imageStyle: styles.image,
        backgroundColor: '#72E1D1',
    },
    {
        key: 'slide-2',
        title: 'Preferences',
        text: 'Your preferences are evertying. \n Our results are based off them.',
        image: require('./../../../assets/slide-3.png'),
        imageStyle: {height: 150, width: 150},
        backgroundColor: '#89A7A7',
    },
    {
        key: 'slide-3',
        title: 'Life Cards',
        text: 'Create a life card. \n With a career, home and things you love.',
        image: require('./../../../assets/slide-4.png'),
        imageStyle: styles.image,
        backgroundColor: '#8A7090',
    },
    {
        key: 'slide-4',
        title: 'The Power of Share',
        image: require('./../../../assets/slide-5.png'),
        text: 'Bring people into your cards \n Your horizons expand if you do.',
        imageStyle: {height: 150, width: 150},
        backgroundColor: '#8D3B72',
    }
];

export default class Intro extends React.Component {
    _onDone = () => {
        alert('App Starts');
    };

    render() {
        return (
            <AppIntroSlider
                slides={slides}
                onDone={this._onDone}
            />
        );
    }
}