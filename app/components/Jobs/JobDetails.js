import React from 'react';
import { Dimensions, Image, Text, View, StyleSheet, ScrollView } from 'react-native';

import { sanFranciscoWeights } from 'react-native-typography';

import { PricingCard, Card, Icon, List, ListItem } from 'react-native-elements';

import companyInfo from './../../lib/jobs/company';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { Actions } from 'react-native-router-flux';

export default class JobList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            jobSaved: false,
            isCompanyInfo: false,
            companyInfo: {}
        };
    }

    jobSaved = () => {
        this.setState({
            jobSaved: true
        });
        this.props.jobSavedParent();
    };

    findHomesPressed = () => {
        Actions.housingMap({jobData: this.props.jobdata});
    };

    componentDidMount() {
        companyInfo.getCompanyInfo(this.props.jobData.jobs[0].company)
            .then((result) => {
                console.log(JSON.stringify(result));
                if(!result.err) {
                    this.setState({
                        companyInfo: result,
                        isCompanyInfo: true
                    });
                }
            }).catch(err => {
                throw err;
            });
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
                    title={this.props.jobData.jobs[0].jobtitle}
                    price='$95,000'
                    info={[this.props.jobData.jobs[0].company, this.props.jobData.jobs[0].formattedLocation]}
                    button={{ title: 'See Nearby Homes', icon: 'home' }}
                    onButtonPress={() => this.findHomesPressed()}
                />
                { this.state.isCompanyInfo ?
                    <Card>
                        <View>
                            <View style={styles.navForm}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.companyText}>Company Ratings</Text>
                                </View>
                            </View>
                            <List>
                                <ListItem
                                    noBorder
                                    title={this.state.companyInfo.name}
                                    rightIcon={<Image
                                        style={{width: 50, height: 50}}
                                        source={{uri: this.state.companyInfo.squareLogo}}

                                    />}
                                    containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                                    titleStyle={styles.titleText}
                                />
                                <ListItem
                                    noBorder
                                    title={"Overall"}
                                    rightIcon={<AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={this.state.companyInfo.overallRating * 20}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763">
                                        {
                                            (fill) => (
                                                <Text>
                                                    {this.state.companyInfo.overallRating * 20}
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>}
                                    containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                                    titleStyle={styles.titleText}
                                />
                                <ListItem
                                    noBorder
                                    title={"Culture and Values"}
                                    rightIcon={<AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={this.state.companyInfo.cultureAndValuesRating * 20}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763">
                                        {
                                            (fill) => (
                                                <Text>
                                                    {this.state.companyInfo.cultureAndValuesRating * 20}
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>}
                                    containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                                    titleStyle={styles.titleText}
                                />
                                <ListItem
                                    noBorder
                                    title={"Senior Leadership"}
                                    rightIcon={<AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={this.state.companyInfo.seniorLeadershipRating * 20}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763">
                                        {
                                            (fill) => (
                                                <Text>
                                                    {this.state.companyInfo.seniorLeadershipRating * 20}
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>}
                                    containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                                    titleStyle={styles.titleText}
                                />
                                <ListItem
                                    noBorder
                                    title={"Pay and Benefits"}
                                    rightIcon={<AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={this.state.companyInfo.compensationAndBenefitsRating * 20}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763">
                                        {
                                            (fill) => (
                                                <Text>
                                                    {this.state.companyInfo.compensationAndBenefitsRating * 20}
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>}
                                    containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                                    titleStyle={styles.titleText}
                                />
                                <ListItem
                                    noBorder
                                    title={"Career Opportunity"}
                                    rightIcon={<AnimatedCircularProgress
                                        size={40}
                                        width={6}
                                        fill={this.state.companyInfo.careerOpportunitiesRating * 20}
                                        tintColor="#C6AADB"
                                        onAnimationComplete={() => console.log('onAnimationComplete')}
                                        backgroundColor="#494763">
                                        {
                                            (fill) => (
                                                <Text>
                                                    {this.state.companyInfo.careerOpportunitiesRating * 20}
                                                </Text>
                                            )
                                        }
                                    </AnimatedCircularProgress>}
                                    containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                                    titleStyle={styles.titleText}
                                />
                            </List>
                            { this.state.companyInfo.ceo.hasOwnProperty('image')
                                ?
                                <View>
                                    <View style={styles.navForm}>
                                        <View style={styles.leftContainer}>
                                            <Text style={styles.companyText}>CEO Rating</Text>
                                        </View>
                                    </View>
                                    <List>
                                        <ListItem
                                            noBorder
                                            title={this.state.companyInfo.ceo.name}
                                            rightIcon={<Image
                                                style={{width: 50, height: 50}}
                                                source={{uri: this.state.companyInfo.ceo.image.src}}
                                            />}
                                            containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                                            titleStyle={styles.titleText}
                                        />
                                        <ListItem
                                            noBorder
                                            title={"Approval Rating"}
                                            rightIcon={<AnimatedCircularProgress
                                                size={40}
                                                width={6}
                                                fill={this.state.companyInfo.ceo.pctApprove}
                                                tintColor="#C6AADB"
                                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                                backgroundColor="#494763">
                                                {
                                                    (fill) => (
                                                        <Text>
                                                            {this.state.companyInfo.ceo.pctApprove}
                                                        </Text>
                                                    )
                                                }
                                            </AnimatedCircularProgress>}
                                            containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                                            titleStyle={styles.titleText}
                                        />
                                    </List>
                                </View>
                                :
                                <View/>
                            }
                        </View>
                    </Card>
                    :
                    <View/>
                }
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
    },
    companyText: {
        ...sanFranciscoWeights.heavy,
        fontSize: 22,
        color: '#494763'
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 5
    }
});