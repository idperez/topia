import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';

import { sanFranciscoWeights } from 'react-native-typography';

import { PricingCard, Card, Icon } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';

export default class JobList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            jobSaved: false
        }
    }

    jobSaved = () => {
        this.setState({
            jobSaved: true
        });
        this.props.jobSavedParent();
    };

    findHomesPressed = () => {
        Actions.housingMap();
    };

    render() {

        return (
            <View>
                <Card containerStyle={{marginTop: 0, marginLeft: 0, marginRight: 0}}>
                    { this.state.jobSaved ?
                        <Icon name="heart" type="font-awesome"  color='#494763'/>
                        :
                        <Icon  name='heart' type="feather" onPress={() => this.jobSaved()}/>
                    }
                </Card>
                <PricingCard
                    color='#4f9deb'
                    title='UX Engineer'
                    price='$95,000'
                    info={['yelp', 'San Francisco', 'Entry Level']}
                    button={{ title: 'See Nearby Homes', icon: 'home' }}
                    onButtonPress={() => this.findHomesPressed()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        ...sanFranciscoWeights.light,
        marginTop: 5,
        fontSize: 20,
        color: '#494763',
        textAlign: 'center'
    },
    card: {
        marginLeft: 2,
        marginRight: 2,
        marginTop: 3,
        marginBottom: 3
    }
});